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
  public addInput(input: Input | InputAutoFill) {
    if (input instanceof Input){
      this._inputs.push(input)
      return this._inputs[this._inputs.length - 1]
    } else{
      this._inputsAutoFill.push(input)
      return this._inputsAutoFill[this._inputsAutoFill.length - 1]
    }
  }

  public get nameForm(){
    return this._nameForm
  }

  public getAllInputs(){
    return this._inputs
  }

  public getInput(nameInput: string): Input | undefined{
    let i: number
    for (i = 0; i < this._inputs.length; i++){
      if (this._inputs[i].name === nameInput){
        return this._inputs[i]
      }
    }
  }
}

export default Form