import Btn from "../../btns/Btn/Btn";
import styles from "./ChooseEntry.module.css"
import {editForm} from "../../OpenAuth/OpenAuth";
import FormsStore from "../../../store/FormsStore";
import {FormNames} from "../../../initializeForms";
import Container from "../../Container/Container";

/**
 * Компонент, содержащий выбор "авторизация или регистрация",
 * потом он будет передан в форму
 */
function ChooseEntry(){
  return(
    <Container>
      <div className={styles.chooseEntry}>
        <Btn text={"Регистрация"} backgroundColor={"#4D4DFF"} color={"#ffffff"}
             onClick={() => {
               FormsStore.getInstance().changeStatus(FormNames.REGISTRATION)
               editForm()
             }}/>
        <Btn text={"Вход"} backgroundColor={"#4D4DFF"}
             color={"#ffffff"}
             onClick={() => {
               FormsStore.getInstance().changeStatus(FormNames.ENTRY)
               editForm()
             }}/>
      </div>
    </Container>
  )
}

export default ChooseEntry