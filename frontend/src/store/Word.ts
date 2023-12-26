/**
 * Модуль содержит класс Word
 */

import {makeAutoObservable} from "mobx";

/**
 * Класс слова
 */
class Word{
  // слово на английском языке
  private readonly _word: string
  // перевод
  private readonly _translate: string

  /**
   * @constructor
   * @param word слово на английском языке
   * @param translate перевод
   */
  constructor(word: string, translate: string) {
    makeAutoObservable(this)
    this._word = word
    this._translate = translate
  }

  /**
   * @return слово на английском языке
   */
  public get word(){
    return this._word
  }

  /**
   * @return перевод слова
   */
  public get translate(){
    return this._translate
  }
}

export default Word