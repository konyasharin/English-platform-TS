import Module from "./Module";
import {makeAutoObservable} from "mobx";

class Folder{
  private readonly _name: string
  private readonly _modules: Array<Module>

  public constructor(name: string, modules: Array<Module> = []) {
    makeAutoObservable(this)
    this._name = name
    this._modules = modules
  }

  public addModule(module: Module){
    this._modules.push(module)
  }

  public get modules(){
    return this._modules
  }

  public get name(){
    return this._name
  }
}

export default Folder