import Container from "../../components/Container/Container";
import styles from "./CreateFolderPage.module.css"
import Input from "../../components/inputs/Input/Input";

function CreateFolderPage(){
  return(
    <Container>
      <section className={styles.createFolder}>
        <Input placeholder={"Название папки"} value={""}/>
      </section>
    </Container>
  )
}

export default CreateFolderPage