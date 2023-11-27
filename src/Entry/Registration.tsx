import Form from "../Form/Form";
import Input from "../Input/Input";

function Registration(){
  const inputsArray = [<Input placeholder={"Ваш логин"} key={1}/>,
    <Input placeholder={"Ваш пароль"} key={2}/>,
    <Input placeholder={"Повторите пароль"} key={3}/>]

  return(
    <Form inputs={inputsArray} btnText={"Завершить регистрацию"} title={"Регистрация"}/>
  )
}

export default Registration