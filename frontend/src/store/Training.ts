/**
 * Модуль содержит абстрактный класс Training
 */

import {action, computed, makeObservable, observable} from "mobx";

/**
 * Абстрактный класс тренировки
 */
abstract class Training{
  // количество слов в тренировке
  private _countOfWord
  // максимальное количество слов в тренировке, которое можно поставить
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

  /**
   * @return количество слов в тренировке
   */
  public get countOfWord(){
    return this._countOfWord
  }

  /**
   * Метод для увеличения числа слов в тренировке на 1
   */
  public incrementCountOfWord(){
    if(this._countOfWord < this._maxCountOfWord){
      this._countOfWord += 1
    }
  }

  /**
   * Метод для уменьшения числа слов в тренировке на 1
   */
  public decrementCountOfWord() {
    if(this._countOfWord > 1){
      this._countOfWord -= 1
    }
  }

  /**
   * @return максимальное количество слов в тренировке, которое можно поставить
   */
  public get maxCountOfWord(){
    return this._maxCountOfWord
  }

  /**
   * сеттер для максимального количества слов
   * @param count новое максимальное количество слов
   */
  public set maxCountOfWord(count: number){
    this._maxCountOfWord = count
  }

  /**
   * сеттер для количества слов
   * @param count новое количество слов
   */
  public set countOfWord(count: number){
    this._countOfWord = count
  }
}

export default Training