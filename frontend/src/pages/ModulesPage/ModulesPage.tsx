import Add from "../../components/Add/Add";
import {Link, NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import ModulesStore from "../../store/ModulesStore";
import PlusBlueImg from "../../assets/icons/plus-blue.png"
import styles from "../FoldersPage/FoldersPage.module.css"
import moduleAddStyles from "../../components/Add/Add.module.css"
import Container from "../../components/Container/Container";
import {ReactNode} from "react";
import createModuleComponents from "../../components/utils/createModuleComponents";
import User from "../../store/User";
import CheckAuth from "../../components/CheckAuth/CheckAuth";

/**
 * Компонент содержит страницу с модулями
 */
const ModulesPage = observer(() => {
  CheckAuth()

  let modules = createModuleComponents(() => {
    ModulesStore.getInstance().currentModule = ""
  }, styles.folder)

  modules = modules.map((module: ReactNode, i: number) => {
    return(
      <NavLink to={`/modules/${User.getInstance().login}/${ModulesStore.getInstance().modules[i].name}`} className={styles.stylesNavLink} key={i}>
        {module}
      </NavLink>
    )
  })

  return(
    <Container>
      <section className={styles.folders}>
        <Link to={"/createModule"} className={styles.stylesLink}>
          <Add className={moduleAddStyles.moduleAdd} img={PlusBlueImg}/>
        </Link>
        {modules}
      </section>
    </Container>
  )
})
export default ModulesPage