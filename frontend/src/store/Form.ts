/**
 * Модуль содержит класс Form - форма
 */

import Input from "./Input";
import {makeAutoObservable} from "mobx";
import InputAutoFill from "./InputAutoFill";

/**
 * Класс формы
 */
class Form{
  // массив всех инпутов (обычных) в форме
  private readonly _inputs: Array<Input>
  // массив всех инпутов с автозаполнением в форме
  private _inputsAutoFill: Array<InputAutoFill>
  // имя формы (для поиска в FormsStore)
  private readonly _nameForm: string

  /**
   * @constructor
   * @param name имя формы
   */
  public constructor(name: string) {
    makeAutoObservable(this)
    this._inputs = []
    this._inputsAutoFill = []
    this._nameForm = name
  }

  /**
   * Метод для добавления нового инпута (обычного) в форму
   * @param input экземпляр класса Input, который мы добавляем к форме
   * @return инпут который мы добавили
   */
  public addInput(input: Input): Input {
    this._inputs.push(input)
    return this._inputs[this._inputs.length - 1]
  }

  /**
   * Метод для добавления нового инпута с автозаполнением в форму
   * @param input экземпляр класса InputAutoFill, который мы добавляем к форме
   * @return инпут который мы добавили
   */
  public addInputAutoFill(input: InputAutoFill): InputAutoFill{
    this._inputsAutoFill.push(input)
    return this._inputsAutoFill[this._inputsAutoFill.length - 1]
  }

  /**
   * @return имя формы
   */
  public get nameForm(){
    return this._nameForm
  }

  /**
   * Метод для получения всех инпутов (обычных) из формы
   * @return массив инпутов (экземпляры класса Input)
   */
  public getAllInputs(){
    return this._inputs
  }

  /**
   * Метод для получения всех инпутов с автозаполнением из формы
   * @return массив инпутов с автозаполнением (экземпляры класса InputAutoFill)
   */
  public getAllInputsAutoFill(){
    return this._inputsAutoFill
  }

  /**
   * Метод для получения инпута (обычного) из формы по имени инпута
   * @param nameInput имя инпута, который мы ищем
   * @return найденный инпут (экземпляр класса Input) или undefined если инпут не был найден
   */
  public getInput(nameInput: string): Input | undefined{
    let i: number
    for (i = 0; i < this._inputs.length; i++){
      if (this._inputs[i].name === nameInput){
        return this._inputs[i]
      }
    }
  }

  /**
   * Метод для проверки всех инпутов с автозаполнением на повторы (экземпляры класса InputAutoFill)
   * @return true если есть повторы и false если нет повторов
   */
  public checkRepeatAutoFillInputs(): boolean{
    let i: number
    let j: number
    for (i = 0; i < this.getAllInputsAutoFill().length; i ++){
      for (j = i + 2; j < this.getAllInputsAutoFill().length; j += 2){ // j += 2 потому что сравниваются переводы с
        if (this.getAllInputsAutoFill()[i].equal(this.getAllInputsAutoFill()[j])){ // переводами и слова со словами
          return true
        }
      }
    }
    return false
  }

  /**
   * Метод для проверки инпутов с автозаполнением на заполненность (экземпляры класса InputAutoFill)
   * @return true если есть пустые инпуты или false если нет пустых инпутов
   */
  public checkEmptyAutoFillInputs(): boolean{
    let i: number
    for(i = 0; i < this.getAllInputsAutoFill().length; i ++){
      if(this.getAllInputsAutoFill()[i].text === ""){
        return true
      }
    }
    return false
  }

  /**
   * Метод для удаления всех инпутов с автозаполнением из формы
   */
  public deleteAllAutoFillInputs(){
    this._inputsAutoFill = []
  }

  /**
   * Метод для очистки (то есть удаление текста из инпутов) всех инпутов
   * (и с автозаполнением и без)
   */
  cleanAllForm(){
    this.cleanAllAutoFillInputs()
    this.cleanAllInputs()
  }

  /**
   * Метод для очистки от текста всех обычных инпутов
   */
  public cleanAllInputs(){
    this._inputs.forEach(input => {
      input.clean()
    })
  }

  /**
   * Метод для очистки от текст всех инпутов с автозаполнением
   */
  public cleanAllAutoFillInputs(){
    this._inputsAutoFill.forEach(inputAutoFill => {
      inputAutoFill.cleanAutoFills()
      inputAutoFill.clean()
    })
  }
}

export default Form