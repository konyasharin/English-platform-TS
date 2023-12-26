/**
 * Модуль содержит класс Input
 */

import {action, makeObservable, observable} from "mobx";

/**
 * Класс инпута обычного
 * @property name имя инпута
 * @property text текст в инпуте
 * @property placeholder placeholder в инпуте (текст, отображаемый в пустом инпуте)
 */
class Input{
  // имя инпута
  public name: string
  // текущий введенный текст в форме
  public text: string
  // placeholder в инпуте (текст, отображаемый в пустом инпуте)
  public placeholder: string

  /**
   * @constructor
   * @param name имя инпута
   * @param text текст в инпуте
   * @param placeholder placeholder
   */
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

  /**
   * Метод, который мы вызываем при onChange инпута (пользователь что-то вводит в инпут)
   * @param value новое значение поля text (новый текст в инпуте)
   */
  public onChange(value: string){
    this.text = value
  }

  /**
   * Метод для клонирование инпута
   * @return новый экземпляр класса Input
   */
  public clone(){
    return new Input(this.name, "", this.placeholder)
  }

  /**
   * Метод для очистки поля text (очистка инпута от текста)
   */
  public clean(){
    this.text = ""
  }
}

export default Input