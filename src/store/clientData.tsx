import {makeAutoObservable} from "mobx";

class ClientData {
  private static _instance: ClientData;
  public formStatus: string;
  private constructor() {
    makeAutoObservable(this);
    this.formStatus = "";
  }

  public static getInstance(){
    if(ClientData._instance == null){
      ClientData._instance = new ClientData();
    }
    return ClientData._instance;
  }
}

export default ClientData