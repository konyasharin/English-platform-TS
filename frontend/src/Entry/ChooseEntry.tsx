/*
Компонент, содержащий компонент выбора "авторизация или регистрация",
потом он будет передан в форму
*/

import Btn from "../Btns/Btn";
import "./Entry.css"
import {editForm} from "../Auth/OpenAuth";
import FormsStore from "../store/FormsStore";
import {FormNames} from "../initializeForms";

function ChooseEntry(){
  return(
    <div className="container choose-entry">
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
  )
}

export default ChooseEntry