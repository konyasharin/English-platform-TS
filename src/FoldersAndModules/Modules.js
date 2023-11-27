import Folder from "./Folder";
import Add from "./Add";
import CheckAuth from "../Auth/CheckAuth";

function Modules(){
  return(
    <section className="modules container">
      <CheckAuth/>
      <Add class={"module-add"} img={"icons/plus-blue.png"}/>
      <Folder class={"module"} img={"/icons/module.png"} alt={"module"} title={"test"}/>
      <Folder class={"module"} img={"/icons/module.png"} alt={"module"} title={"test"}/>
      <Folder class={"module"} img={"/icons/module.png"} alt={"module"} title={"test"}/>
      <Folder class={"module"} img={"/icons/module.png"} alt={"module"} title={"test"}/>
    </section>
  )
}
export default Modules