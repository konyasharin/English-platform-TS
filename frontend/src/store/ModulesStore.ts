/**
 * Модуль содержит класс ModulesStore
 */

import {makeAutoObservable} from "mobx";
import Module from "./Module";

/**
 * Класс для хранения модулей (store для модулей)
 */
class ModulesStore{
  // массив модулей
  private readonly _modules: Array<Module>
  // единственный экземпляр данного класса (Singleton)
  private static _instance: ModulesStore
  // текущий модуль (например для тренировки)
  private _currentModule: string

  private constructor() {
    makeAutoObservable(this)
    this._modules = []
    this._currentModule = ""
  }

  /**
   * Singleton
   * @return единственный экземпляр данного класса
   */
  public static getInstance(){
    if(ModulesStore._instance == null){
      ModulesStore._instance = new ModulesStore()
    }
    return ModulesStore._instance
  }

  /**
   * Метод для добавления нового модуля
   * @param module модуль для добавления в store
   */
  public addModule(module: Module){
    this._modules.push(module)
    return this._modules[-1]
  }

  /**
   * @return массив модулей
   */
  public get modules(){
    return this._modules
  }

  /**
   * Метод для получения модуля по имени
   * @param moduleName имя модуля, который мы хотим получить
   */
  public getModule(moduleName: string){
    let i: number
    for(i = 0; i < this._modules.length; i++){
      if(this._modules[i].name === moduleName){
        return this._modules[i]
      }
    }
  }

  /**
   * @return текущий модуль (например для тренировки)
   */
  public get currentModule(){
    return this._currentModule
  }

  /**
   * сеттер для currentModule
   * @param moduleName имя модуля, значение которого будет использовано в currentModule
   */
  public set currentModule(moduleName: string){
    this._currentModule = moduleName
  }
}

export default ModulesStore