import Folder from "../../FoldersAndModules/Folder";
import "../../FoldersAndModules/Folders.module.css"
import Add from "../../components/Add/Add";
import CheckAuth from "../../Auth/CheckAuth";
import PlusOrangeImg from "../../assets/icons/plus-orange.png"
import FolderImg from "../../assets/icons/folder.png"
import styles from "./FoldersPage.module.css"
import Container from "../../components/Container/Container";

function addFolder(){

}

/**
 * Компонент содержит страницу с папками
 */
function FoldersPage(){
  CheckAuth()
  return(
    <Container>
      <section className={styles.folders}>
        <Add className={styles.folderAdd} img={PlusOrangeImg} onClick={addFolder}/>
        <Folder className={styles.folder} img={FolderImg} alt={"folder"} title={"test"} onClick={() => alert("Данный функционал еще недоступен")}/>
        <Folder className={styles.folder} img={FolderImg} alt={"folder"} title={"test"} onClick={() => alert("Данный функционал еще недоступен")}/>
        <Folder className={styles.folder} img={FolderImg} alt={"folder"} title={"test"} onClick={() => alert("Данный функционал еще недоступен")}/>
        <Folder className={styles.folder} img={FolderImg} alt={"folder"} title={"test"} onClick={() => alert("Данный функционал еще недоступен")}/>
      </section>
    </Container>
  )
}

export default FoldersPage