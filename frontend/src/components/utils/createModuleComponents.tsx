import {ReactNode} from "react";
import ModulesStore from "../../store/ModulesStore";
import Folder from "../Folder/Folder";
import moduleStyles from "../Folder/Folder.module.css";
import ModulesImg from "../../assets/icons/module.png";
import Module from "../../store/Module";

/**
 * Метод создает компоненты Folder (модули)
 * @param onClick функия, которая вызывается при нажатии на модуль
 * @param className классы которые добавляются к модулям
 */
function createModuleComponents(onClick?: (event: any, moduleName: string) => void, className?: string): ReactNode[]{
  let modules: ReactNode[] = []
  ModulesStore.getInstance().modules.forEach((module: Module, i: number) => {
    modules.push(
      <Folder className={`${moduleStyles.module} ${className}`} img={ModulesImg} alt={"module"}
              title={module.name} key={i}
              onClick={onClick}/>
    )
  })
  return modules
}

export default createModuleComponents