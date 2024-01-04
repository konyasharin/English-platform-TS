import Folder from "../Folder/Folder";
import moduleImg from "../../assets/icons/module.png"
import moduleStyles from "../Folder/Folder.module.css"
import Adding from "../Adding/Adding";
import styles from "./AddingModule.module.css"
import {useState} from "react";

interface addingModuleInterface{
  title: string
}

function AddingModule({title}: addingModuleInterface){
  const [isAdd, setIsAdd] = useState(false)

  return (
    <Folder className={`${moduleStyles.module} ${styles.addingModule}`} alt={"adding module"} img={moduleImg} title={title} onClick={() => setIsAdd(!isAdd)}>
      <Adding isAdd={isAdd} className={styles.addingModuleBtn}/>
    </Folder>
  )
}

export default AddingModule