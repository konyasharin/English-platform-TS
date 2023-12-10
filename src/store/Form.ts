import Input from "./Input";
import {makeAutoObservable} from "mobx";
import InputAutoFill from "./InputAutoFill";

class Form{
  private readonly _inputs: Array<Input>
  private readonly _inputsAutoFill: Array<InputAutoFill>
  private readonly _nameForm: string

  public constructor(name: string) {
    makeAutoObservable(this)
    this._inputs = []
    this._inputsAutoFill = []
    this._nameForm = name
  }
  public addInput(input: Input | InputAutoFill): Input | InputAutoFill {
    this._inputs.push(input)
    return this._inputs[this._inputs.length - 1]
  }

  public addInputAutoFill(input: InputAutoFill): InputAutoFill{
    this._inputsAutoFill.push(input)
    return this._inputsAutoFill[this._inputsAutoFill.length - 1]
  }

  public get nameForm(){
    return this._nameForm
  }

  public getAllInputs(){
    return this._inputs
  }

  public getAllInputsAutoFill(){
    return this._inputsAutoFill
  }

  public getInput(nameInput: string): Input | undefined{
    let i: number
    for (i = 0; i < this._inputs.length; i++){
      if (this._inputs[i].name === nameInput){
        return this._inputs[i]
      }
    }
  }

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

  public checkEmptyAutoFillInputs(): boolean{
    let i: number
    for(i = 0; i < this.getAllInputsAutoFill().length; i ++){
      if(this.getAllInputsAutoFill()[i].text === ""){
        return true
      }
    }
    return false
  }
}

export default Form