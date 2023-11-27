import "./Form.css"
import Btn from "../Btns/Btn";

interface FormProps{
  title: string,
  inputs: any,
  btnText: string
}
function Form({title, inputs, btnText}: FormProps){
  return(
    <div className="container">
      <form action="#" method="post">
        <h3>{title}</h3>
        {inputs}
        <Btn backgroundColor={"#4D4DFF"} text={btnText} color={"#ffffff"}/>
      </form>
    </div>
  )
}

export default Form