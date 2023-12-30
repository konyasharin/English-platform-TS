import Form from "../Form/Form";
import Input from "../../inputs/Input/Input";
import {observer} from "mobx-react-lite";
import FormsStore from "../../../store/FormsStore";
import {FormNames, InputNames} from "../../../initializeForms";
import formsStore from "../../../store/FormsStore";
import axios from "../../../axios";
import {closeForm} from "../../CheckAuth/CheckAuth";

/**
 * Метод для завершения регистрации
 * @param login логин пользователя
 * @param password пароль пользователя
 * @param repeatPassword повтор пароля
 */
async function endRegistration(login: string, password: string, repeatPassword: string){
  if (password === repeatPassword){
    try {
      await axios.post("auth/registration", {
        userName: login,
        password: password
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      alert("Регистрация прошла успешна")
      closeForm()
    } catch (error: any){
      alert(error.response.data.message)
    }
  } else{
    alert("Пароли не совпадают!")
  }
}

/**
 * Компонент содержит окно регистрации (потом будет передан в форму) и метод для
 * завершения решистрации
 */
const Registration = observer(() => {
  const registrationForm = FormsStore.getInstance().getForm(FormNames.REGISTRATION)!

  const inputsArray = [<Input placeholder={registrationForm.getInput(InputNames.LOGIN)!.placeholder}
                              key={1} value={registrationForm.getInput(InputNames.LOGIN)!.text}
                              edit={registrationForm.getInput(InputNames.LOGIN)!}/>,
    <Input placeholder={registrationForm.getInput(InputNames.PASSWORD)!.placeholder}
           key={2} value={registrationForm.getInput(InputNames.PASSWORD)!.text}
           edit={registrationForm.getInput(InputNames.PASSWORD)!}/>,
    <Input placeholder={registrationForm.getInput(InputNames.REPEAT_PASSWORD)!.placeholder}
           key={3} value={registrationForm.getInput(InputNames.REPEAT_PASSWORD)!.text}
           edit={registrationForm.getInput(InputNames.REPEAT_PASSWORD)!}/>]

  return(
    <Form inputs={inputsArray} btnText={"Завершить регистрацию"} title={"Регистрация"} onClick={() => {
      endRegistration(formsStore.getInstance().getForm(FormNames.REGISTRATION)!.getInput(InputNames.LOGIN)!.text,
        formsStore.getInstance().getForm(FormNames.REGISTRATION)!.getInput(InputNames.PASSWORD)!.text,
        formsStore.getInstance().getForm(FormNames.REGISTRATION)!.getInput(InputNames.REPEAT_PASSWORD)!.text)
    }}/>
  )
})

export default Registration