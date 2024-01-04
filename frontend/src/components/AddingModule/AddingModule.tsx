import Folder from "../Folder/Folder";
import moduleImg from "../../assets/icons/module.png"
import moduleStyles from "../Folder/Folder.module.css"
import Adding from "../Adding/Adding";
import styles from "./AddingModule.module.css"
import Module from "../../store/Module";
import {observer} from "mobx-react-lite";

interface addingModuleInterface{
  module: Module
}

const AddingModule = observer(({module}: addingModuleInterface) => {
  return (
    <Folder className={`${moduleStyles.module} ${styles.addingModule}`} alt={"adding module"} img={moduleImg} title={module.name} onClick={() => module.toggleIsAdd()}>
      <Adding isAdd={module.isAdd} className={styles.addingModuleBtn}/>
    </Folder>
  )
})

export default AddingModule