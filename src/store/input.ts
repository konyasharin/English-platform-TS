import {action, makeAutoObservable, makeObservable, observable, observe} from "mobx";

class Input{
  public name: string
  public text: string
  public placeholder: string

  public constructor(name: string, text: string, placeholder: string) {
    makeObservable(this, {
      name: observable,
      text: observable,
      placeholder: observable,
      onChange: action,
      clone: action
    })
    this.name = name
    this.text = text
    this.placeholder = placeholder
  }

  public onChange(value: string){
    this.text = value
  }

  public clone(){ // Prototype
    return new Input(this.name, this.text, this.placeholder)
  }
}

export default Input