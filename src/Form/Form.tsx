import "./Form.css"
import Btn from "../Btns/Btn";
import axios from "axios";

interface FormProps{
  title: string,
  inputs: any,
  btnText: string
}
const test = async () => {
  await axios.post("api/auth/registration", {
    userName: "test1",
    password: "1234"
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  })
}
function Form({title, inputs, btnText}: FormProps){
  return(
    <div className="container">
      <form onSubmit={(e) => {e.preventDefault()}}>
        <h3>{title}</h3>
        {inputs}
        <Btn backgroundColor={"#4D4DFF"} text={btnText} color={"#ffffff"} onClick={test}/>
      </form>
    </div>
  )
}

export default Form