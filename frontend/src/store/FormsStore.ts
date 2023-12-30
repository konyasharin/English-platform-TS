/**
 * Моудль содержит класс FormsStore
 */

import Form from "./Form";
import {makeAutoObservable} from "mobx";

/**
 * Класс для хранения всех форм (store для форм)
 */
class FormsStore{
  // массив всех созданных форм
  private readonly _forms: Form[]
  // статус формы главной (регистрация и вход)
  private _formStatus: string;
  // экземпляр класса FormsStore (для реализации паттерна Singleton)
  private static _instance: FormsStore
  // статус черного фона true - активен false - выключен
  private _blackBgStatus: boolean

  /**
   * @constructor конструктор приватный так как мы используем паттерн Singleton для данного класса
   * @private
   */
  private constructor() {
    makeAutoObservable(this);
    this._forms = []
    this._formStatus = "";
    this._blackBgStatus = false
  }

  /**
   * Метод для создания экземпляра данного класса (хранится в _instance) если его еще нет,
   * и возврата единственного экземпляра данного класса (реализация паттерна Singleton)
   * @return единственный экземпляр данного класса
   */
  public static getInstance(){
    if(FormsStore._instance == null){
      FormsStore._instance = new FormsStore();
    }
    return FormsStore._instance;
  }

  /**
   * Метод для создания новой формы
   * @param nameForm имя формы
   * @return созданная форма
   */
  public addForm(nameForm: string){
    this._forms.push(new Form(nameForm))
    return this._forms[this._forms.length - 1]
  }

  /**
   * Метод для поиска формы по имени
   * @param nameForm имя формы
   * @return найденная форма (экземпляр класса Form) или undefined если форма не была найдена
   */
  public getForm(nameForm: string): Form | undefined{
    let i: number
    for(i = 0; i < this._forms.length; i++){
      if(this._forms[i].nameForm === nameForm){
        return this._forms[i]
      }
    }
  }

  /**
   * Метод для изменения статуса главной формы (вход и регистрация)
   * @param newStatus новый статус формы
   */
  public changeStatus(newStatus: string){
    this._formStatus = newStatus
  }

  /**
   * @return статус формы главной (регистрация и вход)
   */
  public get formStatus(){
    return this._formStatus
  }

  /**
   * Метод для активации компонента blackBg (форма с затемненным фоном)
   */
  public activateBlackBg(){
    this._blackBgStatus = true
  }

  /**
   * Метод для деактивации компонента blackBg (форма с затемненным фоном)
   */
  public deactivateBlackBg(){
    this._blackBgStatus = false
  }

  /**
   * @return статус blackBg (включена ли форма с затемнением заднего фона)
   */
  public get blackBgStatus(){
    return this._blackBgStatus
  }
}

export default FormsStore