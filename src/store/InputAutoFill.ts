import Input from "./Input";
import {action, makeObservable, observable, override} from "mobx";
import AutoFill from "./AutoFill";

class InputAutoFill extends Input{
  private _autoFills: Array<AutoFill>
  constructor(name: string, text: string, placeholder: string) {
    super(name, text, placeholder);
    makeObservable<this, "_autoFills">(this, { // <- тут видно как нужно передавать приватные поля +
      name: override,                                    // класс с наследованием не поддерживается makeAutoObservable()
      text: override,
      placeholder: override,
      onChange: override,
      clone: override,
      addAutoFill: action,
      chooseFill: action,
      cleanAutoFills: action,
      _autoFills: observable
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

  public cleanAutoFills(){
    this._autoFills = []
  }
}

export default InputAutoFill