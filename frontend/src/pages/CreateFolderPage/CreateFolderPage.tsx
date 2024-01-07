import Container from "../../components/Container/Container";
import styles from "./CreateFolderPage.module.css"
import createModulePageStyles from "../CreateModulePage/CreateModulePage.module.css"
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
import createFolder from "../../api/createFolder";

const createFolderForm = FormsStore.getInstance().addForm(FormNames.CREATE_FOLDER)
const folderNameInput = createFolderForm.addInput(new InputClass(InputNames.FOLDER_NAME, "", "Название папки"))

const CreateFolderPage = observer(() => {
  const addingModuleComponents: ReactNode[] = []
  ModulesStore.getInstance().modules.forEach((module: Module, i: number) => {
    addingModuleComponents.push(
      <AddingModule module={module} key={i}/>
    )
  })

  return(
    <Container>
      <section>
        <Input placeholder={folderNameInput.placeholder} value={folderNameInput.text} edit={folderNameInput} className={createModulePageStyles.createModuleInput}/>
        <div className={styles.foldersBlock}>
          {addingModuleComponents}
        </div>
        <Btn backgroundColor={"#4D4DFF"} color={"#ffffff"} text={"Создать папку"} className={styles.btn} onClick={() => createFolder(folderNameInput)}/>
      </section>
    </Container>
  )
})

export default CreateFolderPage