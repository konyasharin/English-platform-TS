import styles from "./Input.module.css"
import InputClass from "../../../store/Input";
import FormsStore from "../../../store/FormsStore";

export interface InputProps{
  placeholder?: string,
  value?: string,
  edit?: InputClass,
  className?: string
}

/**
 * Компонент содержит обычный инпут
 * @param placeholder placeholder для инпута
 * @param value текст в инпуте
 * @param edit экземпляр класса Input, который редактируется (с которым связан сам инпут)
 * @param className className который накладывается на данный компонент
 */
function Input({placeholder, value, edit, className}: InputProps) {
  return (
    <input type="text" placeholder={placeholder} className={`${styles.input} ${className}`} value={value} onChange={
      (event) => {
        console.log(FormsStore.getInstance())
        edit?.onChange(event.target.value)
      }
    }/>
  )
}
export default Input