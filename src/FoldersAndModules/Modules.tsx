import Folder from "./Folder";
import Add from "./Add";
import CheckAuth from "../Auth/CheckAuth";

function Modules(){
  CheckAuth()
  return(
    <section className="modules container">
      <Add className={"module-add"} img={"icons/plus-blue.png"}/>
      <Folder className={"module"} img={"/icons/module.png"} alt={"module"} title={"test"}/>
      <Folder className={"module"} img={"/icons/module.png"} alt={"module"} title={"test"}/>
      <Folder className={"module"} img={"/icons/module.png"} alt={"module"} title={"test"}/>
      <Folder className={"module"} img={"/icons/module.png"} alt={"module"} title={"test"}/>
    </section>
  )
}
export default Modules