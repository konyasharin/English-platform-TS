import FormsStore from "./store/formsStore";

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

  registrationForm.addInput(InputNames.LOGIN, "", "Ваш логин")
  registrationForm.addInput(InputNames.PASSWORD, "", "Ваш пароль")
  registrationForm.addInput(InputNames.REPEAT_PASSWORD, "", "Повторите пароль")

  const entryForm = formStore.addForm(FormNames.ENTRY)

  entryForm.addInput(InputNames.LOGIN, "", "Ваш логин")
  entryForm.addInput(InputNames.PASSWORD, "", "Ваш пароль")
}

export default initializeForms