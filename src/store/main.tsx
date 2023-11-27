import {makeAutoObservable} from "mobx";

class Main{
  private static _instance: Main;
  public formStatus: string;
  private constructor() {
    makeAutoObservable(this);
    this.formStatus = "";
  }

  public static getInstance(){
    if(Main._instance == null){
      Main._instance = new Main();
    }
    return Main._instance;
  }
}

export default Main