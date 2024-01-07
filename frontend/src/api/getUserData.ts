import axios from "../axios";
import User from "../store/User";
import {ModuleInterface} from "./createModule";
import Word from "../store/Word";
import ModulesStore from "../store/ModulesStore";
import Module from "../store/Module"
import {FolderInterface} from "./createFolder";
import FoldersStore from "../store/FoldersStore";
import Folder from "../store/Folder";

/**
 * Метод для вытягивания информации о пользователе (если присутствует токен авторизации)
 */
async function getUserData(){
  try {
    await axios.get("auth/me", {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.data)
      .then(data => {
        if (User.getInstance().login === ""){ // чтобы не обновлять компоненты лишний раз делаем проверку
          User.getInstance().login = data.userName
          data.modules.forEach((module: ModuleInterface) => {
            let words: Array<Word> = []
            module.words.forEach(word => {
              words.push(new Word(word.word, word.translate))
            })
            ModulesStore.getInstance().addModule(new Module(module.name, words))
          })
          data.folders.forEach((folder: FolderInterface) => {
            FoldersStore.getInstance().addFolder(new Folder(folder.name,
              folder.modules.map(moduleName => ModulesStore.getInstance().getModule(moduleName)!)))
          })
        }
      })
  }catch (error){
    console.log(error)
  }
}

export default getUserData