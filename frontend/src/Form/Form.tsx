import "./Form.css"
import Btn from "../Btns/Btn";

interface FormProps{
  title: string,
  inputs: any,
  btnText: string,
  onClick: () => void
}

/**
 * Данный компонент содержит форму
 * @param title заголовок в форме (h3)
 * @param inputs уже созданные компоненты Input
 * @param btnText текст в кнопке для отправки формы
 * @param onClick функция которая вызывается при нажатии на кнопку для отправки формы
 */
function Form({title, inputs, btnText, onClick}: FormProps){
  return(
    <div className="container">
      <form onSubmit={(e) => {e.preventDefault()}}>
        <h3>{title}</h3>
        {inputs}
        <Btn backgroundColor={"#4D4DFF"} text={btnText} color={"#ffffff"} onClick={onClick}/>
      </form>
    </div>
  )
}

export default Form