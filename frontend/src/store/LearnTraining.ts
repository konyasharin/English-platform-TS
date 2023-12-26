/**
 * Данный модуль содержит класс TrainingStatuses
 */

import Training from "./Training";
import {action, makeObservable, observable, override} from "mobx";
import ModulesStore from "./ModulesStore";
import Queue from "./Queue";
import Word from "./Word";
import Shuffler from "./Shuffler";

/**
 * Статусы тренировки-заучивание
 */
export enum TrainingStatuses{
  SHOW_WORDS = "SHOW_WORDS",
  WRITE_ANSWERS = "WRITE_ANSWERS",
  RESULTS = "RESULTS"
}

/**
 * Класс для тренировки-заучивания, наследуется от абстрактного класса Training
 */
class LearnTraining extends Training{
  // Очередь, состоящая из всех слов
  private _queue: Queue<Word>
  // Очередь, состоящая из максимум 5 слов (текущая группа из 5 слов, которая показывается пользователю)
  private _queueCurrentGroup: Queue<Word>
  /* После показа пользователю слов из очереди из 5 слов сюда переходят эти слова просто для хранения
   (чтобы перемешать этот массива снова и вернуть их обратно в очередь)*/
  private _temp: Array<Word>
  // Текущее слово для показа
  private _currentWord: Word | undefined
  // Флаг инициализации тренировки
  private _isInit: boolean
  // Экземпляр данного класса (Singleton)
  private static _instance: LearnTraining
  // Текущий статус тренировки
  private _currentStatus: string
  // Количество правильно введенных ответов
  private _correctAnswers: number

  private constructor() {
    super();
    makeObservable<this, "_countOfWord" | "_maxCountOfWord" | "_currentWord" | "_currentStatus">(this, {
      _countOfWord: override,
      _maxCountOfWord: override,
      incrementCountOfWord: override,
      decrementCountOfWord: override,
      maxCountOfWord: override,
      countOfWord: override,
      _currentWord: observable,
      nextWord: action,
      resetTraining: action,
      _currentStatus: observable,
      toggleStatus: action,
      toggleToTrainingGroup: action,
      setFinishStatus: action
    })
    this._queue = new Queue<Word>()
    this._queueCurrentGroup = new Queue<Word>()
    this._temp = []
    this._isInit = false
    this._currentStatus = TrainingStatuses.SHOW_WORDS
    this._correctAnswers = 0
  }

  /**
   * Singleton
   * @return единственный экземпляр данного класса
   */
  public static getInstance(){
    if(this._instance == null){
      this._instance = new LearnTraining()
    }
    return this._instance
  }

  /**
   * Метод для перемешивания слов и создания структуры данных ОЧЕРЕДЬ, которая хранит
   * уже перемешанные слова
   */
  public createTrainingQueue(){
    const shuffler = new Shuffler()

    // копия массива чтобы была работа не с observable переменной
    let words = [...ModulesStore.getInstance().getModule(ModulesStore.getInstance().currentModule)!.words]

    words = shuffler.shuffle<Word>(words)
    let i: number
    for(i = 0; i < this.countOfWord; i++){
      this._queue.enqueue(words[i])
    }
  }

  /**
   * Метод создает группу из 5 слов (мы показываем пользователю из всей очереди только 5 слов)
   */
  public nextGroup(){
    let i: number
    for (i = 0; i < 5; i ++){
      let temp = this._queue.dequeue()
      if(temp === undefined){
        break
      }
      this._queueCurrentGroup.enqueue(temp)
    }
  }

  /**
   * Метод берет следующее слово из очереди (которая на 5 слов)
   */
  public nextWord() {
    this._currentWord = this._queueCurrentGroup.dequeue()
    if(this._currentWord !== undefined && this._currentStatus === TrainingStatuses.SHOW_WORDS){
      this._temp.push(this._currentWord)
    } else if(this._currentWord === undefined && this._currentStatus === TrainingStatuses.SHOW_WORDS){
      this.toggleToTrainingGroup()
    } else if(this._currentWord === undefined && this._currentStatus === TrainingStatuses.WRITE_ANSWERS){
      this.nextGroup()
      this._currentWord = this._queueCurrentGroup.dequeue()
      this._temp.push(this._currentWord!)
      this.toggleStatus()
    }
    return this._currentWord
  }

  /**
   * Метод для переключения с просмотра слов на уже тренировку с этими словами
   */
  public toggleToTrainingGroup(){
    // перемешивание уже для ввода пользователем ответов
    const shuffler = new Shuffler()
    shuffler.shuffle<Word>(this._temp)
    this._temp.forEach(word => {
      this._queueCurrentGroup.enqueue(word)
    })
    this._temp = []
    this.toggleStatus()
    this.nextWord()
  }

  /**
   * @return Текущее слово для показа
   */
  public get currentWord(){
    return this._currentWord
  }

  /**
   * Метод для инициализации тренировки
   */
  public initializeTraining(){
    this.createTrainingQueue()
    this.nextGroup()
    this.nextWord()
    this._isInit = true
  }

  /**
   * @return Флаг инициализации тренировки
   */
  public get isInit(){
    return this._isInit
  }

  /**
   * Метод для сброса всей тренировки
   */
  public resetTraining(){
    this._queue = new Queue<Word>()
    this._queueCurrentGroup = new Queue<Word>()
    this._isInit = false
    this._currentStatus = TrainingStatuses.SHOW_WORDS
    this._correctAnswers = 0
  }

  /**
   * @return Текущий статус тренировки
   */
  public get currentStatus(){
    return this._currentStatus
  }

  /**
   * Метод для переключения статуса с SHOW_WORDS на WRITE_ANSWERS и наоборот
   */
  public toggleStatus(){
    switch (this._currentStatus){
      case TrainingStatuses.SHOW_WORDS:
        this._currentStatus = TrainingStatuses.WRITE_ANSWERS
        break
      case TrainingStatuses.WRITE_ANSWERS:
        this._currentStatus = TrainingStatuses.SHOW_WORDS
        break
    }
  }

  /**
   * Установка статуса RESULTS
   */
  public setFinishStatus(){
    this._currentStatus = TrainingStatuses.RESULTS
  }

  /**
   * Метод для проверки правильности ввода перевода пользователем
   * @param answer ответ, введенный пользователем
   */
  public checkAnswer(answer: string){
    if(this._currentWord?.translate === answer){
      this._correctAnswers += 1
    }
  }

  /**
   * @return Количество правильно введенных ответов
   */
  public get correctAnswers(){
    return this._correctAnswers
  }
}

export default LearnTraining