import {makeAutoObservable} from "mobx";
import Form from "./form";

class ClientData {
  private static _instance: ClientData;
  public formStatus: string;
  private readonly _forms: Array<Form>
  private constructor() {
    makeAutoObservable(this);
    this.formStatus = "";
    this._forms = []
  }

  public static getInstance(){
    if(ClientData._instance == null){
      ClientData._instance = new ClientData();
    }
    return ClientData._instance;
  }

  public addForm(nameForm: string){
    this._forms.push(new Form(nameForm))
    return this._forms[this._forms.length - 1]
  }

  public getForm(nameForm: string): Form | undefined{
    let i: number
    for(i = 0; i < this._forms.length; i++){
      if(this._forms[i].nameForm === nameForm){
        return this._forms[i]
      }
    }
  }

  public updateInput(formName: string, inputName: string, newText: string){
    this.getForm(formName)!.getInput(inputName)!.text = newText
  }
}

export default ClientData