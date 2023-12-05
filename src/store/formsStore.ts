import Form from "./Form";
import {makeAutoObservable} from "mobx";

class FormsStore{
  private readonly _forms: Form[]
  private _formStatus: string;
  private static _instance: FormsStore

  private constructor() {
    makeAutoObservable(this);
    this._forms = []
    this._formStatus = "";
  }

  public static getInstance(){
    if(FormsStore._instance == null){
      FormsStore._instance = new FormsStore();
    }
    return FormsStore._instance;
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

  public changeStatus(newStatus: string){
    this._formStatus = newStatus
  }

  public get formStatus(){
    return this._formStatus
  }
}

export default FormsStore