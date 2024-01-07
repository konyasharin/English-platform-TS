import ModulesStore from "../store/ModulesStore";
import Module from "../store/Module";
import FoldersStore from "../store/FoldersStore";
import axios from "../axios";
import User from "../store/User";
import Folder from "../store/Folder";
import Input from "../store/Input";

export interface FolderInterface{
  name: string,
  modules: Array<string>,
  _id: string,
  __v: number
}

async function createFolder(input: Input){
  const addingModulesToFolder = ModulesStore.getInstance().modules.filter((module: Module) => module.isAdd)
  if(input.text === ""){
    alert("Введите название папки!")
  } else if(addingModulesToFolder.length === 0){
    alert("Выберите хотя бы 1 модуль для добавления в папку!")
  } else if(FoldersStore.getInstance().getFolder(input.text)){
    alert("Папка с таким именем уже создана!")
  }else{
    try{
      axios.post("folders/create", {
        userName: User.getInstance().login,
        name: input.text,
        modules: addingModulesToFolder.map((module: Module) => module.name)
      })
        .then(response => response.data)
        .then((data: FolderInterface) => {
          FoldersStore.getInstance().addFolder(new Folder(data.name))
          data.modules.forEach(moduleName => {
            FoldersStore.getInstance().getFolder(data.name)!.addModule(ModulesStore.getInstance().getModule(moduleName)!)
          })
          alert("Папка успешно создана!")
          input.onChange("")
          ModulesStore.getInstance().modules.forEach((module: Module) => {
            module.clearIsAdd()
          })
        })
    } catch (error) {
      console.log(error)
    }
  }
}

export default createFolder