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
      chooseAutoFill: action,
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

  public clone(): InputAutoFill {
    return new InputAutoFill(this.name, "", this.placeholder)
  }

  public cleanAutoFills(){
    this._autoFills = []
  }

  public chooseAutoFill(event: any, next?: InputAutoFill, autoFillTranslate?: any){
    this.onChange(event.target.innerText.toLowerCase())
    this.cleanAutoFills()
    if (next && autoFillTranslate){
      autoFillTranslate(event, next)
    }
  }

  public equal(obj: InputAutoFill){
    return this.text === obj.text;
  }
}

export default InputAutoFill