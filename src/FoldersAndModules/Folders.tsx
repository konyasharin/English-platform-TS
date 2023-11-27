import Folder from "./Folder";
import "./Folders.css"
import Add from "./Add";
import CheckAuth from "../Auth/CheckAuth";

function Folders(){
  CheckAuth()
  return(
    <section className="container folders">
      <Add className={"folder-add"} img={"icons/plus-orange.png"}/>
      <Folder className={"folder"} img={"/icons/folder.png"} alt={"folder"} title={"test"}/>
      <Folder className={"folder"} img={"/icons/folder.png"} alt={"folder"} title={"test"}/>
      <Folder className={"folder"} img={"/icons/folder.png"} alt={"folder"} title={"test"}/>
      <Folder className={"folder"} img={"/icons/folder.png"} alt={"folder"} title={"test"}/>
    </section>
  )
}

export default Folders