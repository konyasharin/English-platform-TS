// Данный модуль содержит класс InputAutoFill

import Input from "./Input";
import {action, makeObservable, observable, override} from "mobx";
import AutoFill from "./AutoFill";

class InputAutoFill extends Input{
  // Массив вариантов для автозаполнения инпута
  private _autoFills: Array<AutoFill>
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

  /*
  Метод для добавления варианта для автозаполнения
  text - вариант для автозаполнения
   */
  public addAutoFill(text: string){
    this._autoFills.push(new AutoFill(text))
  }

  public get autoFills(){
    return this._autoFills
  }

  /*
  Метод для клонирования экземпляра класса InputAutoFill
  return - экземпляр класса InputAutoFill
   */
  public clone(): InputAutoFill {
    return new InputAutoFill(this.name, "", this.placeholder)
  }

  // Метод для очистки вариантов автодополнения
  public cleanAutoFills(){
    this._autoFills = []
  }

  /*
  Метод, который мы вызываем при выборе одного из вариантов автозаполнения
  (данный инпут заполняется и вызывается метод autoFillTranslate)
  event - event из JS
  next - экземпляр класса InputAutoFill (в нашем случае это перевод, если мы автозаполнили слово,
  а в случае если мы заполняли перевод, то сюда ничего не передается)
  autoFillTranslate - метод для предложения вариантов автозаполнения перевода
   */
  public chooseAutoFill(event: any, next?: InputAutoFill, autoFillTranslate?: any){
    this.onChange(event.target.innerText.toLowerCase())
    this.cleanAutoFills()
    if (next && autoFillTranslate){
      autoFillTranslate(event, next)
    }
  }

  /*
  Метод для сравнения двух экземпляров класса InputAutoFill на равенство (поле text одинаковое)
  obj - экземпляр класса с которым мы сравниваем текущий экземпляр класса
  return - true если экземпляры класса равны, и false если не равны
   */
  public equal(obj: InputAutoFill){
    return this.text === obj.text;
  }
}

export default InputAutoFill