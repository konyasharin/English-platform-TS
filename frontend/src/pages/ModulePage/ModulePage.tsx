import {useParams} from "react-router-dom";
import Container from "../../components/Container/Container";
import styles from "./ModulePage.module.css"
import ModulesStore from "../../store/ModulesStore";
import Input from "../../components/inputs/Input/Input";
import {observer} from "mobx-react-lite";
import CheckAuth from "../../components/CheckAuth/CheckAuth";

const ModulePage = observer(() => {
  CheckAuth()
  const {userName, moduleName} = useParams()
  let module = ModulesStore.getInstance().getModule(moduleName!)

  return (
    <Container>
      <section>
        <Input placeholder={"Название модуля"} value={module ? module.name : ""} className={styles.mainInput}/>
      </section>
    </Container>
  )
})

export default ModulePage