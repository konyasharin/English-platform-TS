import Folder from "./Folder";
import {makeAutoObservable} from "mobx";

class FoldersStore{
  private readonly _folders: Array<Folder>
  private static _instance: FoldersStore

  private constructor() {
    makeAutoObservable(this)
    this._folders = []
  }

  public static getInstance(){
    if(FoldersStore._instance == null){
      FoldersStore._instance = new FoldersStore()
    }
    return FoldersStore._instance
  }

  public addFolder(folder: Folder){
    this._folders.push(folder)
  }

  public get folders(){
    return this._folders
  }

  public getFolder(folderName: string){
    let i: number
    for(i = 0; i < this._folders.length; i++){
      if(this._folders[i].name === folderName){
        return this._folders[i]
      }
    }
  }
}

export default FoldersStore