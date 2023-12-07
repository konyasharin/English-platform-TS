import "./Input.css"
import FormsStore from "../store/FormsStore";
import InputAutoFillClass from "../store/InputAutoFill";

interface InputProps{
  placeholder?: string,
  value?: string,
  edit?: InputAutoFillClass,
  onChange: any
}
function InputAutoFill({placeholder, value, edit, onChange}: InputProps) {
  return (
    <input type="text" placeholder={placeholder} value={value} onChange={
      (event) => {
        onChange(event, edit)
        console.log(FormsStore.getInstance())
        edit?.onChange(event.target.value)
      }
    }/>
  )
}
export default InputAutoFill