import Input from "../Input/Input";
import Form from "../Form/Form";

function Entry(){
  const inputsArray = [<Input placeholder={"Ваш логин"} key={1}/>,
    <Input placeholder={"Ваш пароль"} key={2}/>]

  return(
    <Form inputs={inputsArray} btnText={"Войти"} title={"Вход"}/>
  )
}

export default Entry