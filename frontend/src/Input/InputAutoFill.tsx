import "./Input.css"
import FormsStore from "../store/FormsStore";
import InputAutoFillClass from "../store/InputAutoFill";

interface InputProps{
  placeholder?: string,
  value?: string,
  edit?: InputAutoFillClass,
  onChange: any,
  prev?: InputAutoFillClass
}

/**
 * Компонент содержит инпут с автодополнением
 * @param placeholder placeholder для инпута
 * @param value текст внутри инпута
 * @param edit экземпляр класса InputAutoFill, который редактируется (с которым связан сам инпут)
 * @param onChange функция, которая вызывается при onChange
 * @param prev экземпляр класса InputAutoFill - слово на английском языке (если мы сейчас вводим перевод, иначе ничего)
 * @constructor
 */
function InputAutoFill({placeholder, value, edit, onChange, prev}: InputProps) {
  return (
    <input type="text" placeholder={placeholder} value={value} onChange={
      (event) => {
        if(prev){
          onChange(event, edit, prev)
          console.log(FormsStore.getInstance())
          edit?.onChange(event.target.value)
        } else{
          onChange(event, edit)
          console.log(FormsStore.getInstance())
          edit?.onChange(event.target.value)
        }
      }
    }/>
  )
}
export default InputAutoFill