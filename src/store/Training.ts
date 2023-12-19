// Модуль содержит абстрактный класс Training

import {action, computed, makeObservable, observable} from "mobx";

abstract class Training{
  private _countOfWord
  private _maxCountOfWord

  protected constructor() {
    makeObservable<this, "_countOfWord" | "_maxCountOfWord">(this, {
      _countOfWord: observable,
      _maxCountOfWord: observable,
      incrementCountOfWord: action,
      decrementCountOfWord: action,
      maxCountOfWord: computed,
      countOfWord: computed
    })
    this._countOfWord = 1
    this._maxCountOfWord = 1
  }

  public get countOfWord(){
    return this._countOfWord
  }

  /*
  Метод для увеличения числа слов в тренировке на 1
   */
  public incrementCountOfWord(){
    if(this._countOfWord < this._maxCountOfWord){
      this._countOfWord += 1
    }
  }

  /*
  Метод для уменьшения числа слов в тренировке на 1
   */
  public decrementCountOfWord() {
    if(this._countOfWord > 1){
      this._countOfWord -= 1
    }
  }

  public get maxCountOfWord(){
    return this._maxCountOfWord
  }

  public set maxCountOfWord(count: number){
    this._maxCountOfWord = count
  }

  public set countOfWord(count: number){
    this._countOfWord = count
  }
}

export default Training