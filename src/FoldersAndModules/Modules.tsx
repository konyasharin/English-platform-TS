// Компонент содержит страницу с модулями

import Folder from "./Folder";
import Add from "./Add";
import CheckAuth from "../Auth/CheckAuth";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import ModulesStore from "../store/ModulesStore";

const stylesLink={
  display: "block",
  width: "100%"
}

function createModuleComponents(){
  let modules: any[] = []
  let i: number
  for (i = 0; i < ModulesStore.getInstance().modules.length; i++){
    modules.push(
      <Folder className={"module"} img={"/icons/module.png"} alt={"module"}
              title={ModulesStore.getInstance().modules[i].name} key={i}/>
    )
  }
  return modules
}

const Modules = observer(() => {
  CheckAuth()
  const modules = createModuleComponents()
  return(
    <section className="modules container">
      <Link to={"/createModule"} style={stylesLink}>
        <Add className={"module-add"} img={"icons/plus-blue.png"}/>
      </Link>
      {modules}
    </section>
  )
})
export default Modules