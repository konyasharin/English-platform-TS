import Input from "../../inputs/Input/Input";
import Form from "../Form/Form";
import FormsStore from "../../../store/FormsStore";
import {FormNames, InputNames} from "../../../initializeForms";
import {observer} from "mobx-react-lite";
import axios from "../../../axios";
import formsStore from "../../../store/FormsStore";
import {closeForm} from "../../CheckAuth/CheckAuth";

/**
 * Метод для завершения авторизации (устанавливаем токен для авторизации локально
 * у пользователя и закрываем форму(если авторизация прошла успешно))
 * @param login логин пользователя
 * @param password пароль пользователя
 */
async function endEntry(login: string, password: string){
  try {
    await axios.post("auth/login", {
      userName: login,
      password: password
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.data)
      .then(data => localStorage.setItem("token", data.token))
    //await tryGetUserData()
    closeForm()
  } catch (error: any){
    alert(error.response.data.message)
  }
}

/**
 * Компонент, содержащий окно входа (потом будет передано в форму),
 * а также метод для завершения авторизации
 */
const Entry = observer(() => {
  const entryForm = FormsStore.getInstance().getForm(FormNames.ENTRY)!

  const inputsArray = [<Input placeholder={entryForm.getInput(InputNames.LOGIN)!.placeholder}
                              key={1} value={entryForm.getInput(InputNames.LOGIN)!.text}
                              edit={entryForm.getInput(InputNames.LOGIN)!}/>,
    <Input placeholder={entryForm.getInput(InputNames.PASSWORD)!.placeholder}
           key={2} value={entryForm.getInput(InputNames.PASSWORD)!.text}
           edit={entryForm.getInput(InputNames.PASSWORD)!}/>]

  return(
    <Form inputs={inputsArray} btnText={"Войти"} title={"Вход"} onClick={() => {
      endEntry(formsStore.getInstance().getForm(FormNames.ENTRY)!.getInput(InputNames.LOGIN)!.text,
        formsStore.getInstance().getForm(FormNames.ENTRY)!.getInput(InputNames.PASSWORD)!.text)
    }}/>
  )
})

export default Entry