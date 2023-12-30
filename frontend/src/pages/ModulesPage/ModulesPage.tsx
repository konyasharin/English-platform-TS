import Folder from "../../FoldersAndModules/Folder";
import Add from "../../components/Add/Add";
import CheckAuth from "../../Auth/CheckAuth";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import ModulesStore from "../../store/ModulesStore";
import ModulesImg from "../../assets/icons/module.png"
import PlusBlueImg from "../../assets/icons/plus-blue.png"
import styles from "./ModulesPage.module.css"
import Container from "../../components/Container/Container";


const stylesLink={
  display: "block",
  width: "100%"
}

/**
 * Метод создает компоненты Folder (модули)
 * @param onClick функия, которая вызывается при нажатии на модуль
 */
export function createModuleComponents(onClick?: any){
  let modules: any[] = []
  let i: number
  for (i = 0; i < ModulesStore.getInstance().modules.length; i++){
    modules.push(
      <Folder className={styles.module} img={ModulesImg} alt={"module"}
              title={ModulesStore.getInstance().modules[i].name} key={i}
              onClick={onClick}/>
    )
  }
  return modules
}

/**
 * Компонент содержит страницу с модулями
 */
const ModulesPage = observer(() => {
  CheckAuth()
  const modules = createModuleComponents(() => alert("Данный функционал еще недоступен"))
  return(
    <Container>
      <section className={styles.modules}>
        <Link to={"/createModule"} style={stylesLink}>
          <Add className={styles.moduleAdd} img={PlusBlueImg}/>
        </Link>
        {modules}
      </section>
    </Container>
  )
})
export default ModulesPage