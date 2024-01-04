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

function createFolder(){

}

const createFolderForm = FormsStore.getInstance().addForm(FormNames.CREATE_FOLDER)
const folderNameInput = createFolderForm.addInput(new InputClass(InputNames.FOLDER_NAME, "", "Название папки"))

const CreateFolderPage = observer(() => {
  const addingModuleComponents = new Array<ReactNode>()
  let i: number
  for (i = 0; i < ModulesStore.getInstance().modules.length; i++){
    addingModuleComponents.push(<AddingModule title={ModulesStore.getInstance().modules[i].name} key={i}/>)
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