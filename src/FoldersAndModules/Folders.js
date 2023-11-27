import Folder from "./Folder";
import "./Folders.css"
import Add from "./Add";
import CheckAuth from "../Auth/CheckAuth";

function Folders(){
  return(
    <section className="container folders">
      <CheckAuth/>
      <Add class={"folder-add"} img={"icons/plus-orange.png"}/>
      <Folder class={"folder"} img={"/icons/folder.png"} alt={"folder"} title={"test"}/>
      <Folder class={"folder"} img={"/icons/folder.png"} alt={"folder"} title={"test"}/>
      <Folder class={"folder"} img={"/icons/folder.png"} alt={"folder"} title={"test"}/>
      <Folder class={"folder"} img={"/icons/folder.png"} alt={"folder"} title={"test"}/>
    </section>
  )
}

export default Folders