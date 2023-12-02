import "./Input.css"
import {observer} from "mobx-react-lite";
import InputClass from "../store/input";
import FormsStore from "../store/formsStore";

interface InputProps{
  placeholder?: string,
  value?: string,
  edit?: InputClass
}
function Input({placeholder, value, edit}: InputProps) {
  return (
    <input type="text" placeholder={placeholder} value={value} onChange={
      (event) => {
        console.log(FormsStore.getInstance())
        edit?.onChange(event.target.value)
      }
    }/>
  )
}
export default Input