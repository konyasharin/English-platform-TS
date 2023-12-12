// Компонент содержит страницу с модулями

import Folder from "./Folder";
import Add from "./Add";
import CheckAuth from "../Auth/CheckAuth";
import {Link} from "react-router-dom";

const stylesLink={
  display: "block",
  width: "100%"
}

function Modules(){
  CheckAuth()
  return(
    <section className="modules container">
      <Link to={"/createModule"} style={stylesLink}>
        <Add className={"module-add"} img={"icons/plus-blue.png"}/>
      </Link>
      <Folder className={"module"} img={"/icons/module.png"} alt={"module"} title={"test"}/>
      <Folder className={"module"} img={"/icons/module.png"} alt={"module"} title={"test"}/>
      <Folder className={"module"} img={"/icons/module.png"} alt={"module"} title={"test"}/>
      <Folder className={"module"} img={"/icons/module.png"} alt={"module"} title={"test"}/>
    </section>
  )
}
export default Modules