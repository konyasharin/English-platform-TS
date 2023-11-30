import Form from "../Form/Form";
import Input from "../Input/Input";
import ClientData from "../store/clientData";
import {observer} from "mobx-react-lite";
import {spy} from "mobx";

spy((ev) => {
  console.log(ev)
})
/*
function test(event: any){
  inputLogin.onChange(event.target.value)
}
*/

const Registration = observer(() => {
  const clientData = ClientData.getInstance()
  const registrationForm = clientData.addForm("Registration")

  const inputPassword = registrationForm.addInput("Password", "", "Ваш пароль")
  const inputRepeatPassword = registrationForm.addInput("RepeatPassword", "", "Повторите пароль")
  const inputLogin = registrationForm.addInput("Login", "", "Ваш логин")

  const inputsArray = [<Input placeholder={inputLogin.placeholder} key={1} value={inputLogin.text}
                              edit={(event: any) => {inputLogin.onChange(event.target.value)}}/>,
    <Input placeholder={inputPassword.placeholder} key={2} value={inputPassword.text}/>,
    <Input placeholder={inputRepeatPassword.placeholder} key={3} value={inputRepeatPassword.text}/>]

  return(
    <Form inputs={inputsArray} btnText={"Завершить регистрацию"} title={"Регистрация"}/>
  )
})

export default Registration