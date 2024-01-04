/**
 * Модуль содержит класс Module
 */

import {makeAutoObservable} from "mobx";
import Word from "./Word";

/**
 * Класс модуля
 */
class Module{
  // имя модуля
  private readonly _name: string
  // массив слов в модуле
  private readonly _words: Array<Word>
  // добавляется ли данный модуль в папку (для страницы по созданию папки)
  private _isAdd: boolean

  /**
   * @constructor
   * @param name имя модуля
   * @param words массив слов в модуле
   */
  constructor(name: string, words: Array<Word>) {
    makeAutoObservable(this)
    this._name = name
    this._words = words
    this._isAdd = false
  }

  /**
   * @return имя модуля
   */
  public get name(){
    return this._name
  }

  /**
   * @return массив слов в модуле
   */
  public get words(){
    return this._words
  }

  /**
   * Переключает поле isAdd на противоположное значение
   */
  public toggleIsAdd(){
    this._isAdd = !this._isAdd
  }

  /**
   * Геттер поля isAdd
   */
  public get isAdd(){
    return this._isAdd
  }
}

export default Module