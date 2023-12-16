import {makeAutoObservable} from "mobx";
import Module from "./Module";

class ModulesStore{
  private readonly _modules: Array<Module>
  private static _instance: ModulesStore
  private _currentModule: string
  private constructor() {
    makeAutoObservable(this)
    this._modules = []
    this._currentModule = ""
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

  public getModule(moduleName: string){
    let i: number
    for(i = 0; i < this._modules.length; i++){
      if(this._modules[i].name === moduleName){
        return this._modules[i]
      }
    }
  }

  public get currentModule(){
    return this._currentModule
  }

  public set currentModule(moduleName: string){
    this._currentModule = moduleName
  }
}

export default ModulesStore