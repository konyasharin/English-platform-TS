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

  public static getInstance(){
    if(this._instance == null){
      this._instance = new LearnTraining()
    }
    return this._instance
  }

  public createTrainingQueue(){
    const shuffler = new Shuffler()

    // копия массива чтобы была работа не с observable переменной
    let words = [...ModulesStore.getInstance().getModule(ModulesStore.getInstance().currentModule)!.words]

    words = shuffler.shuffle<Word>(words)
    words.forEach(word => {
      this._queue.enqueue(word)
    })
  }

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

  public initializeTraining(){
    this.createTrainingQueue()
    this.nextGroup()
    this.nextWord()
    this._isInit = true
  }

  public get isInit(){
    return this._isInit
  }

  public resetTraining(){
    this._queue = new Queue<Word>()
    this._queueCurrentGroup = new Queue<Word>()
    this._isInit = false
  }

  public get currentStatus(){
    return this._currentStatus
  }

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

  public setFinishStatus(){
    this._currentStatus = TrainingStatuses.RESULTS
  }

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