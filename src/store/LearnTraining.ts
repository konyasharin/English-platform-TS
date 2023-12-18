import Training from "./Training";
import {action, makeObservable, observable, override} from "mobx";
import ModulesStore from "./ModulesStore";
import Queue from "./Queue";
import Word from "./Word";
import Shuffler from "./Shuffler";

class LearnTraining extends Training{
  private _queue: Queue<Word>
  private _queueCurrentGroup: Queue<Word>
  private _queueCurrentTrainingGroup: Queue<Word>
  private _currentWord: Word | undefined
  private _isInit: boolean
  private static _instance: LearnTraining
  private constructor() {
    super();
    makeObservable<this, "_countOfWord" | "_maxCountOfWord" | "_currentWord">(this, {
      _countOfWord: override,
      _maxCountOfWord: override,
      incrementCountOfWord: override,
      decrementCountOfWord: override,
      maxCountOfWord: override,
      countOfWord: override,
      _currentWord: observable,
      nextWord: action,
      resetTraining: action
    })
    this._queue = new Queue<Word>()
    this._queueCurrentGroup = new Queue<Word>()
    this._queueCurrentTrainingGroup = new Queue<Word>()
    this._isInit = false
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
    if(this._currentWord !== undefined){
      this._queueCurrentTrainingGroup.enqueue(this._currentWord)
    }
    return this._currentWord
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
}

export default LearnTraining