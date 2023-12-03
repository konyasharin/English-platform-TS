import FormsStore from "./store/formsStore";
import Input from "./store/input";

export enum InputNames{
  LOGIN = "LOGIN",
  PASSWORD = "PASSWORD",
  REPEAT_PASSWORD = "REPEAT_PASSWORD"
}

export enum FormNames{
  REGISTRATION = "REGISTRATION",
  ENTRY = "ENTRY",
  CHOOSE = "CHOOSE"
}

function initializeForms(formStore: FormsStore){
  const registrationForm = formStore.addForm(FormNames.REGISTRATION)

  registrationForm.addInput(new Input(InputNames.LOGIN, "", "Ваш логин"))
  registrationForm.addInput(new Input(InputNames.PASSWORD, "", "Ваш пароль"))
  registrationForm.addInput(new Input(InputNames.REPEAT_PASSWORD, "", "Повторите пароль"))

  const entryForm = formStore.addForm(FormNames.ENTRY)

  entryForm.addInput(new Input(InputNames.LOGIN, "", "Ваш логин"))
  entryForm.addInput(new Input(InputNames.PASSWORD, "", "Ваш пароль"))
}

export default initializeForms