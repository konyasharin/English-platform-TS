import Input from "./input";

class Form{
  private readonly _inputs: Array<Input>
  private readonly _nameForm: string

  public constructor(name: string) {
    this._inputs = []
    this._nameForm = name
  }
  public addInput(nameInput: string, text: string, placeholder: string) {
    this._inputs.push(new Input(nameInput, text, placeholder))
    return this._inputs[this._inputs.length - 1]
  }

  public get nameForm(){
    return this._nameForm
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