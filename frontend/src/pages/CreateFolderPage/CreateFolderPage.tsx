import Container from "../../components/Container/Container";
import styles from "./CreateFolderPage.module.css"
import Input from "../../components/inputs/Input/Input";
import InputClass from "../../store/Input"
import AddingModule from "../../components/AddingModule/AddingModule";
import Btn from "../../components/btns/Btn/Btn";
import FormsStore from "../../store/FormsStore";
import {FormNames, InputNames} from "../../initializeForms";
import {observer} from "mobx-react-lite";
import ModulesStore from "../../store/ModulesStore";
import {ReactNode} from "react";
import Module from "../../store/Module";
import axios from "../../axios";
import FoldersStore from "../../store/FoldersStore";
import Folder from "../../store/Folder";
import User from "../../store/User";

export interface FolderInterface{
  name: string,
  modules: Array<string>,
  _id: string,
  __v: number
}

async function createFolder(){
  const addingModulesToFolder = ModulesStore.getInstance().modules.filter((module: Module) => module.isAdd)
  if(folderNameInput.text === ""){
    alert("Введите название папки!")
  } else if(addingModulesToFolder.length === 0){
    alert("Выберите хотя бы 1 модуль для добавления в папку!")
  } else if(FoldersStore.getInstance().getFolder(folderNameInput.text)){
    alert("Папка с таким именем уже создана!")
  }else{
    try{
      axios.post("folders/create", {
        userName: User.getInstance().login,
        name: folderNameInput.text,
        modules: addingModulesToFolder.map((module: Module) => module.name)
      })
        .then(response => response.data)
        .then((data: FolderInterface) => {
          FoldersStore.getInstance().addFolder(new Folder(data.name))
          data.modules.forEach(moduleName => {
            FoldersStore.getInstance().getFolder(data.name)!.addModule(ModulesStore.getInstance().getModule(moduleName)!)
          })
          alert("Папка успешно создана!")
          folderNameInput.onChange("")
          ModulesStore.getInstance().modules.forEach((module: Module) => {
            module.clearIsAdd()
          })
        })
    } catch (error) {
      console.log(error)
    }
  }
}

const createFolderForm = FormsStore.getInstance().addForm(FormNames.CREATE_FOLDER)
const folderNameInput = createFolderForm.addInput(new InputClass(InputNames.FOLDER_NAME, "", "Название папки"))

const CreateFolderPage = observer(() => {
  const addingModuleComponents = new Array<ReactNode>()
  let i: number
  for (i = 0; i < ModulesStore.getInstance().modules.length; i++){
    addingModuleComponents.push(<AddingModule module={ModulesStore.getInstance().modules[i]} key={i}/>)
  }

  return(
    <Container>
      <section className={styles.createFolder}>
        <Input placeholder={folderNameInput.placeholder} value={folderNameInput.text} edit={folderNameInput}/>
        <div className={styles.foldersBlock}>
          {addingModuleComponents}
        </div>
        <Btn backgroundColor={"#4D4DFF"} color={"#ffffff"} text={"Создать папку"} className={styles.btn} onClick={createFolder}/>
      </section>
    </Container>
  )
})

export default CreateFolderPage