// Компонент содержит страницу с папками

import Folder from "./Folder";
import "./Folders.css"
import Add from "./Add";
import CheckAuth from "../Auth/CheckAuth";
import PlusOrangeImg from "../assets/icons/plus-orange.png"
import FolderImg from "../assets/icons/folder.png"

function Folders(){
  CheckAuth()
  return(
    <section className="container folders">
      <Add className={"folder-add"} img={PlusOrangeImg} onClick={() => console.log(123)}/>
      <Folder className={"folder"} img={FolderImg} alt={"folder"} title={"test"}/>
      <Folder className={"folder"} img={FolderImg} alt={"folder"} title={"test"}/>
      <Folder className={"folder"} img={FolderImg} alt={"folder"} title={"test"}/>
      <Folder className={"folder"} img={FolderImg} alt={"folder"} title={"test"}/>
    </section>
  )
}

export default Folders