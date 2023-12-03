import Input from "../Input/Input";
import Form from "../Form/Form";
import FormsStore from "../store/formsStore";
import {FormNames, InputNames} from "../initializeForms";
import {observer} from "mobx-react-lite";
import axios from "../axios";
import formsStore from "../store/formsStore";
import {closeForm, tryGetUserData} from "../Auth/CheckAuth";

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
    console.log(error)
  }
}

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