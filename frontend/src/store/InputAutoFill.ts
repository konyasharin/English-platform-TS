/**
 * Данный модуль содержит класс InputAutoFill
 */

import Input from "./Input";
import {action, makeObservable, observable, override} from "mobx";
import AutoFill from "./AutoFill";

/**
 * Класс инпута с автозаполнением (наследуется от класса Input)
 */
class InputAutoFill extends Input{
  // Массив вариантов для автозаполнения инпута
  private _autoFills: Array<AutoFill>

  /**
   * @constructor
   * @param name имя инпута
   * @param text текст в инпуте
   * @param placeholder placeholder в инпуте (текст, отображаемый в пустом инпуте)
   */
  constructor(name: string, text: string, placeholder: string) {
    super(name, text, placeholder);
    makeObservable<this, "_autoFills">(this, { // <- тут видно как нужно передавать приватные поля +
      name: override,                                    // класс с наследованием не поддерживается makeAutoObservable()
      text: override,                                    // override - actions и observable из класса - родителя (Input)
      placeholder: override,
      onChange: override,
      clone: override,
      addAutoFill: action,
      chooseAutoFill: action,
      cleanAutoFills: action,
      _autoFills: observable
    })
    this._autoFills = []
  }

  /**
   * Метод для добавления варианта для автозаполнения
   * @param text вариант для автозаполнения
   */
  public addAutoFill(text: string){
    this._autoFills.push(new AutoFill(text))
  }

  /**
   * @return Массив вариантов для автозаполнения инпута (экземпляры класса AutoFill)
   */
  public get autoFills(){
    return this._autoFills
  }

  /**
   * Метод для клонирования экземпляра класса InputAutoFill
   * @return экземпляр класса InputAutoFill
   */
  public clone(): InputAutoFill {
    return new InputAutoFill(this.name, "", this.placeholder)
  }

  /**
   * Метод для очистки вариантов автодополнения (очистка массива autoFills)
   */
  public cleanAutoFills(){
    this._autoFills = []
  }

  /**
   * Метод, который мы вызываем при выборе одного из вариантов автозаполнения
   * (данный инпут заполняется и вызывается метод autoFillTranslate)
   * @param event event из JS
   * @param next экземпляр класса InputAutoFill (в нашем случае это перевод, если мы автозаполнили слово,
   * а в случае если мы заполняли перевод, то сюда ничего не передается)
   * @param autoFillTranslate метод для предложения вариантов автозаполнения перевода
   */
  public chooseAutoFill(event: any, next?: InputAutoFill, autoFillTranslate?: any){
    this.onChange(event.target.innerText.toLowerCase())
    this.cleanAutoFills()
    if (next && autoFillTranslate){
      autoFillTranslate(event, next)
    }
  }

  /**
   * Метод для сравнения двух экземпляров класса InputAutoFill на равенство (поле text одинаковое)
   * @param obj экземпляр класса с которым мы сравниваем текущий экземпляр класса
   * @return true если экземпляры класса равны, и false если не равны
   */
  public equal(obj: InputAutoFill){
    return this.text === obj.text;
  }
}

export default InputAutoFill