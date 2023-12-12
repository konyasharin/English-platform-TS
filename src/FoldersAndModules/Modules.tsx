// Компонент содержит страницу с модулями

import Folder from "./Folder";
import Add from "./Add";
import CheckAuth from "../Auth/CheckAuth";
import {Link} from "react-router-dom";
import User from "../store/User";
import {observer} from "mobx-react-lite";

const stylesLink={
  display: "block",
  width: "100%"
}

function createModuleComponents(){
  let modules: any[] = []
  User.getInstance().modules.forEach(module => {
    modules.push(
      <Folder className={"module"} img={"/icons/module.png"} alt={"module"} title={module.name} key={module._id}/>
    )
  })
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