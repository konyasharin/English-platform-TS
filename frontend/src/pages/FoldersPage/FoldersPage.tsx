import Folder from "../../FoldersAndModules/Folder";
import "../../FoldersAndModules/Folders.module.css"
import Add from "../../FoldersAndModules/Add";
import CheckAuth from "../../Auth/CheckAuth";
import PlusOrangeImg from "../../assets/icons/plus-orange.png"
import FolderImg from "../../assets/icons/folder.png"
import styles from "./FoldersPage.module.css"
import stylesForComponents from "../../FoldersAndModules/Folders.module.css"
import Container from "../../components/Container/Container";

/**
 * Компонент содержит страницу с папками
 */
function FoldersPage(){
  CheckAuth()
  return(
    <Container>
      <section className={styles.folders}>
        <Add className={stylesForComponents.folderAdd} img={PlusOrangeImg} onClick={() => alert("Данный функционал еще недоступен")}/>
        <Folder className={stylesForComponents.folder} img={FolderImg} alt={"folder"} title={"test"} onClick={() => alert("Данный функционал еще недоступен")}/>
        <Folder className={stylesForComponents.folder} img={FolderImg} alt={"folder"} title={"test"} onClick={() => alert("Данный функционал еще недоступен")}/>
        <Folder className={stylesForComponents.folder} img={FolderImg} alt={"folder"} title={"test"} onClick={() => alert("Данный функционал еще недоступен")}/>
        <Folder className={stylesForComponents.folder} img={FolderImg} alt={"folder"} title={"test"} onClick={() => alert("Данный функционал еще недоступен")}/>
      </section>
    </Container>
  )
}

export default FoldersPage