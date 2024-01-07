import Folder from "../../components/Folder/Folder";
import "../../components/Folder/Folder.module.css"
import Add from "../../components/Add/Add";
import PlusOrangeImg from "../../assets/icons/plus-orange.png"
import FolderImg from "../../assets/icons/folder.png"
import styles from "./FoldersPage.module.css"
import folderStyles from "../../components/Folder/Folder.module.css"
import folderAddStyles from "../../components/Add/Add.module.css"
import Container from "../../components/Container/Container";
import {Link} from "react-router-dom";
import FoldersStore from "../../store/FoldersStore";
import {ReactNode} from "react";
import {observer} from "mobx-react-lite";
import CheckAuth from "../../components/CheckAuth/CheckAuth";

function createFolderComponents(){
  const folders = new Array<ReactNode>()
  let i: number
  for (i = 0; i < FoldersStore.getInstance().folders.length; i++){
    folders.push(<Folder className={folderStyles.folder} img={FolderImg} alt={"folder"}
                         title={FoldersStore.getInstance().folders[i].name}
                         onClick={() => alert("Данный функционал еще недоступен")} key={i}/>)
  }
  return folders
}

/**
 * Компонент содержит страницу с папками
 */
const FoldersPage = observer(() => {
  CheckAuth()
  return(
    <Container>
      <section className={styles.folders}>
        <Link to={"/createFolder"} className={styles.stylesLink}>
          <Add className={folderAddStyles.folderAdd} img={PlusOrangeImg}/>
        </Link>
        {createFolderComponents()}
      </section>
    </Container>
  )
})

export default FoldersPage