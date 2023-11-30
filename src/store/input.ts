import {makeAutoObservable} from "mobx";

class Input{
  public name: string
  public text: string
  public placeholder: string

  public constructor(name: string, text: string, placeholder: string) {
    this.name = name
    this.text = text
    this.placeholder = placeholder
  }

  public onChange(value: string){
    this.text = this.text + value
  }
}

export default Input