import {makeAutoObservable} from "mobx";
import Module from "./Module";

class ModulesStore{
  private readonly _modules: Array<Module>
  private static _instance: ModulesStore
  private constructor() {
    makeAutoObservable(this)
    this._modules = []
  }

  public static getInstance(){
    if(ModulesStore._instance == null){
      ModulesStore._instance = new ModulesStore()
    }
    return ModulesStore._instance
  }

  public addModule(module: Module){
    this._modules.push(module)
    return this._modules[-1]
  }

  public get modules(){
    return this._modules
  }
}

export default ModulesStore