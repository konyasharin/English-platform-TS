import {useParams} from "react-router-dom";
import Container from "../../components/Container/Container";
import styles from "./ModulePage.module.css"

function ModulePage(){
  const {userName, moduleName} = useParams()

  return (
    <Container>
      <section>
        {userName}
        {moduleName}
      </section>
    </Container>
  )
}

export default ModulePage