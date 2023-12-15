import {makeAutoObservable} from "mobx";
import Word from "./Word";

class Module{
  private readonly _name: string
  private _words: Array<Word>
  constructor(name: string, words: Array<Word>) {
    makeAutoObservable(this)
    this._name = name
    this._words = words
  }

  public get name(){
    return this._name
  }

  public get words(){
    return this._words
  }
}

export default Module