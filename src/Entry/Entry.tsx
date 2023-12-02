import Input from "../Input/Input";
import Form from "../Form/Form";
import FormsStore from "../store/formsStore";
import {FormNames, InputNames} from "../initializeForms";
import {observer} from "mobx-react-lite";

const Entry = observer(() => {
  const entryForm = FormsStore.getInstance().getForm(FormNames.ENTRY)!

  const inputsArray = [<Input placeholder={entryForm.getInput(InputNames.LOGIN)!.placeholder}
                              key={1} value={entryForm.getInput(InputNames.LOGIN)!.text}
                              edit={entryForm.getInput(InputNames.LOGIN)!}/>,
    <Input placeholder={entryForm.getInput(InputNames.PASSWORD)!.placeholder}
           key={2} value={entryForm.getInput(InputNames.PASSWORD)!.text}
           edit={entryForm.getInput(InputNames.PASSWORD)!}/>]

  return(
    <Form inputs={inputsArray} btnText={"Войти"} title={"Вход"}/>
  )
})

export default Entry