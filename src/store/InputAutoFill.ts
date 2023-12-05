import Input from "./Input";

class InputAutoFill extends Input{
  private readonly _autoFills: string[]
  constructor(name: string, text: string, placeholder: string) {
    super(name, text, placeholder);
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