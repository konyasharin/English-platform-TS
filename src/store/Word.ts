import {makeAutoObservable} from "mobx";

class Word{
  private _word: string
  private _translate: string

  constructor(word: string, translate: string) {
    makeAutoObservable(this)
    this._word = word
    this._translate = translate
  }
}

export default Word