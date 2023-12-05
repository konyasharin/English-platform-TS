import Input from "./Input";
import {action, makeObservable, observable, override} from "mobx";

class InputAutoFill extends Input{
  private readonly _autoFills: string[]
  constructor(name: string, text: string, placeholder: string) {
    super(name, text, placeholder);
    makeObservable(this, {
      name: override,
      text: override,
      placeholder: override,
      onChange: override,
      clone: override,
      addAutoFill: action,
      chooseFill: action
    })
    this._autoFills = []
  }

  public addAutoFill(text: string){
    this._autoFills.push(text)
  }

  public get autoFills(){
    return this._autoFills
  }

  public chooseFill(text: string){
    this.text = text
  }

  public clone(): Input {
    return new InputAutoFill(this.name, this.text, this.placeholder)
  }
}

export default InputAutoFill