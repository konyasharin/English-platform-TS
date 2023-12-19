// Модуль содержит класс Word

import {makeAutoObservable} from "mobx";

class Word{
  private readonly _word: string
  private readonly _translate: string

  constructor(word: string, translate: string) {
    makeAutoObservable(this)
    this._word = word
    this._translate = translate
  }

  public get word(){
    return this._word
  }

  public get translate(){
    return this._translate
  }
}

export default Word