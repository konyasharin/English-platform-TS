// Модуль содержит класс Input

import {action, makeObservable, observable} from "mobx";

class Input{
  // имя инпута
  public name: string
  // текущий введенный текст в форме
  public text: string
  // текущий placeholder в инпуте (текст, отображаемый в пустом инпуте)
  public placeholder: string

  public constructor(name: string, text: string, placeholder: string) {
    makeObservable(this, { // <- у нас от данного класса есть наследующиеся классы, поэтому
      name: observable,              // makeAutoObservable не поддерживается mobx и нам нужно вручную
      text: observable,              // указывать actions и отслеживаемые поля
      placeholder: observable,
      onChange: action,
      clone: action
    })
    this.name = name
    this.text = text
    this.placeholder = placeholder
  }

  /*
  Метод, который мы вызываем при onChange инпута (пользователь что-то вводит в инпут)
  value - новое значение text в инпуте
   */
  public onChange(value: string){
    this.text = value
  }

  /*
  Метод для клонирование инпута
  return - новый экземпляр класса Input
   */
  public clone(){
    return new Input(this.name, "", this.placeholder)
  }

  public clean(){
    this.text = ""
  }
}

export default Input