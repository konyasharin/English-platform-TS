import "./Form.css"
import Btn from "../Btns/Btn";

function Form(props){
  return(
    <div className="container">
      <form action="#" method="post">
        <h3>{props.title}</h3>
        {props.inputs}
        <Btn backgroundColor={"#4D4DFF"} text={props.btnText} color={"#ffffff"}/>
      </form>
    </div>
  )
}

export default Form