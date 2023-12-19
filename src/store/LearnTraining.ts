// Данный модуль содержит класс TrainingStatuses

import Training from "./Training";
import {action, makeObservable, observable, override} from "mobx";
import ModulesStore from "./ModulesStore";
import Queue from "./Queue";
import Word from "./Word";
import Shuffler from "./Shuffler";

export enum TrainingStatuses{
  SHOW_WORDS = "SHOW_WORDS",
  WRITE_ANSWERS = "WRITE_ANSWERS",
  RESULTS = "RESULTS"
}

class LearnTraining extends Training{
  private _queue: Queue<Word>
  private _queueCurrentGroup: Queue<Word>
  private _temp: Array<Word>
  private _currentWord: Word | undefined
  private _isInit: boolean
  private static _instance: LearnTraining
  private _currentStatus: string
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

  // Singleton
  public static getInstance(){
    if(this._instance == null){
      this._instance = new LearnTraining()
    }
    return this._instance
  }

  /*
   Метод для перемешивания слов и создания структуры данных ОЧЕРЕДЬ, которая хранит
   уже перемешанные слова
   */
  public createTrainingQueue(){
    const shuffler = new Shuffler()

    // копия массива чтобы была работа не с observable переменной
    let words = [...ModulesStore.getInstance().getModule(ModulesStore.getInstance().currentModule)!.words]

    words = shuffler.shuffle<Word>(words)
    words.forEach(word => {
      this._queue.enqueue(word)
    })
  }

  /*
  Метод создает группу из 5 слов (мы показываем пользователю из всей очереди только 5 слов)
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

  /*
  Метод берет следующее слово из очереди (которая на 5 слов)
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

  /*
  Метод для переключения с просмотра слов на уже тренировку с этими словами
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

  public get currentWord(){
    return this._currentWord
  }

  /*
  Метод для инициализации тренировки
   */
  public initializeTraining(){
    this.createTrainingQueue()
    this.nextGroup()
    this.nextWord()
    this._isInit = true
  }

  public get isInit(){
    return this._isInit
  }

  /*
  Метод для сброса всей тренировки
   */
  public resetTraining(){
    this._queue = new Queue<Word>()
    this._queueCurrentGroup = new Queue<Word>()
    this._isInit = false
  }

  public get currentStatus(){
    return this._currentStatus
  }

  /*
  Метод для переключения статуса с SHOW_WORDS на WRITE_ANSWERS и наоборот
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

  /*
  Установка статуса RESULTS
   */
  public setFinishStatus(){
    this._currentStatus = TrainingStatuses.RESULTS
  }

  /*
  Метод для проверки правильности ввода перевода пользователем
   */
  public checkAnswer(answer: string){
    if(this._currentWord?.translate === answer){
      this._correctAnswers += 1
    }
  }

  public get correctAnswers(){
    return this._correctAnswers
  }
}

export default LearnTraining