import Folder from "./Folder";
import "./Folders.css"
import Add from "./Add";
import CheckAuth from "../Auth/CheckAuth";
import PlusOrangeImg from "../assets/icons/plus-orange.png"
import FolderImg from "../assets/icons/folder.png"

/**
 * Компонент содержит страницу с папками
 */
function Folders(){
  CheckAuth()
  return(
    <section className="container folders">
      <Add className={"folder-add"} img={PlusOrangeImg} onClick={() => alert("Данный функционал еще недоступен")}/>
      <Folder className={"folder"} img={FolderImg} alt={"folder"} title={"test"} onClick={() => alert("Данный функционал еще недоступен")}/>
      <Folder className={"folder"} img={FolderImg} alt={"folder"} title={"test"} onClick={() => alert("Данный функционал еще недоступен")}/>
      <Folder className={"folder"} img={FolderImg} alt={"folder"} title={"test"} onClick={() => alert("Данный функционал еще недоступен")}/>
      <Folder className={"folder"} img={FolderImg} alt={"folder"} title={"test"} onClick={() => alert("Данный функционал еще недоступен")}/>
    </section>
  )
}

export default Folders