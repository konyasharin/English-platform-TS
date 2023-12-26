import "./Input.css"
import InputClass from "../store/Input";
import FormsStore from "../store/FormsStore";

interface InputProps{
  placeholder?: string,
  value?: string,
  edit?: InputClass,
}

/**
 * Компонент содержит обычный инпут
 * @param placeholder placeholder для инпута
 * @param value текст в инпуте
 * @param edit экземпляр класса Input, который редактируется (с которым связан сам инпут)
 * @constructor
 */
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