import Btn from "../Btns/Btn";
import "./Entry.css"
import {editForm} from "../Auth/OpenAuth";
import Main from "../store/main";

function ChooseEntry(){
  return(
    <div className="container choose-entry">
      <Btn text={"Регистрация"} backgroundColor={"#4D4DFF"} color={"#ffffff"}
           onClick={() => {
             Main.getInstance().formStatus = "registration"
             editForm()
           }}/>
      <Btn text={"Вход"} backgroundColor={"#4D4DFF"}
           color={"#ffffff"}
           onClick={() => {
             Main.getInstance().formStatus = "entry"
             editForm()
           }}/>
    </div>
  )
}

export default ChooseEntry