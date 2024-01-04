/**
 * Данный модуль инициализирует начальные формы (регистрация, вход)
 */

import FormsStore from "./store/FormsStore";
import Input from "./store/Input";

export enum InputNames{
  LOGIN = "LOGIN",
  PASSWORD = "PASSWORD",
  REPEAT_PASSWORD = "REPEAT_PASSWORD",
  MODULE_NAME = "MODULE_NAME",
  ANSWER = "ANSWER",
  FOLDER_NAME = "FOLDER_NAME"
}

export enum FormNames{
  REGISTRATION = "REGISTRATION",
  ENTRY = "ENTRY",
  CHOOSE = "CHOOSE",
  CREATE_MODULE = "CREATE_MODULE",
  TRAINING_SETTING = "TRAINING_SETTING",
  CREATE_FOLDER = "CREATE_FOLDER"
}

/**
 * метод для инициализации начальных форм
 * @param formStore экземпляр класса formsStore
 */
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