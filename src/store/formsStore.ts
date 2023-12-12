// Моудль содержит класс FormsStore

import Form from "./Form";
import {makeAutoObservable} from "mobx";

class FormsStore{
  // массив всех созданных форм
  private readonly _forms: Form[]
  // статус формы главной (регистрация и вход)
  private _formStatus: string;
  // экземпляр класса FormsStore (для реализации паттерна Singleton)
  private static _instance: FormsStore

  // конструктор приватный так как мы используем паттерн Singleton для данного класса
  private constructor() {
    makeAutoObservable(this);
    this._forms = []
    this._formStatus = "";
  }

  // Метод для создания экземпляра данного класса (хранится в _instance) если его еще нет,
  // и возврата единственного экземпляра данного класса (реализация паттерна Singleton)
  public static getInstance(){
    if(FormsStore._instance == null){
      FormsStore._instance = new FormsStore();
    }
    return FormsStore._instance;
  }

  // Метод для создания новой формы
  // nameForm - имя формы
  // return - созданная форма
  public addForm(nameForm: string){
    this._forms.push(new Form(nameForm))
    return this._forms[this._forms.length - 1]
  }

  // Метод для поиска формы по имени
  // nameForm - имя формы
  // return - найденная форма (экземпляр класса Form) или undefined если форма не была найдена
  public getForm(nameForm: string): Form | undefined{
    let i: number
    for(i = 0; i < this._forms.length; i++){
      if(this._forms[i].nameForm === nameForm){
        return this._forms[i]
      }
    }
  }

  // Метод для изменения статуса главной формы (вход и регистрация)
  // newStatus - новый статус формы
  public changeStatus(newStatus: string){
    this._formStatus = newStatus
  }

  public get formStatus(){
    return this._formStatus
  }
}

export default FormsStore