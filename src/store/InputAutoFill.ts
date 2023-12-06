import Input from "./Input";
import {action, makeObservable, override} from "mobx";
import AutoFill from "./AutoFill";

class InputAutoFill extends Input{
  private readonly _autoFills: Array<AutoFill>
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
    this._autoFills.push(new AutoFill(text))
  }

  public get autoFills(){
    return this._autoFills
  }

  public chooseFill(text: string){
    this.text = text
  }

  public clone(): InputAutoFill {
    return new InputAutoFill(this.name, "", this.placeholder)
  }
}

export default InputAutoFill