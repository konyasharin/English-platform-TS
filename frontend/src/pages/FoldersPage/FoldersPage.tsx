import Folder from "../../components/Folder/Folder";
import "../../components/Folder/Folder.module.css"
import Add from "../../components/Add/Add";
import CheckAuth from "../../components/CheckAuth/CheckAuth";
import PlusOrangeImg from "../../assets/icons/plus-orange.png"
import FolderImg from "../../assets/icons/folder.png"
import styles from "./FoldersPage.module.css"
import folderStyles from "../../components/Folder/Folder.module.css"
import folderAddStyles from "../../components/Add/Add.module.css"
import Container from "../../components/Container/Container";
import {Link} from "react-router-dom";

/**
 * Компонент содержит страницу с папками
 */
function FoldersPage(){
  CheckAuth()
  return(
    <Container>
      <section className={styles.folders}>
        <Link to={"/createFolder"} className={styles.stylesLink}>
          <Add className={folderAddStyles.folderAdd} img={PlusOrangeImg}/>
        </Link>
        <Folder className={folderStyles.folder} img={FolderImg} alt={"folder"} title={"test"} onClick={() => alert("Данный функционал еще недоступен")}/>
        <Folder className={folderStyles.folder} img={FolderImg} alt={"folder"} title={"test"} onClick={() => alert("Данный функционал еще недоступен")}/>
        <Folder className={folderStyles.folder} img={FolderImg} alt={"folder"} title={"test"} onClick={() => alert("Данный функционал еще недоступен")}/>
        <Folder className={folderStyles.folder} img={FolderImg} alt={"folder"} title={"test"} onClick={() => alert("Данный функционал еще недоступен")}/>
      </section>
    </Container>
  )
}

export default FoldersPage