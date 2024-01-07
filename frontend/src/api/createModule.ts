import Form from "../store/Form";
import {InputNames} from "../initializeForms";
import axios from "../axios";
import User from "../store/User";
import Word from "../store/Word";
import ModulesStore from "../store/ModulesStore";
import Module from "../store/Module";
import ClassInputAutoFill from "../store/InputAutoFill";

export interface ModuleInterface{
  name: string,
  words: Array<Word>,
  _id: string,
  __v: number
}

/**
 * Метод для проверки формы по созданию модуля на введенные значения и создание модуля в базе данных
 */
async function createModule(form: Form){
  if(form.checkRepeatAutoFillInputs()){
    alert("Ошибка! Есть повторяющиеся поля")
  } else if(form.getAllInputsAutoFill().length < 2) {
    alert("Ошибка! Нужно создать хотя бы одно слово")
  } else if(form.checkEmptyAutoFillInputs()){
    alert("Ошибка! Есть незаполненные поля")
  } else if(form.getInput(InputNames.MODULE_NAME)!.text === ""){
    alert("Ошибка! Введите название модуля")
  } else{
    let i: number
    let words: Array<object> = []

    for(i = 0; i < form.getAllInputsAutoFill().length; i += 2){
      words.push({
        word: form.getAllInputsAutoFill()[i].text,
        translate: form.getAllInputsAutoFill()[i + 1].text
      })
    }

    try{
      await axios.post(`modules/create`, {
        userName: User.getInstance().login,
        name: form.getInput(InputNames.MODULE_NAME)!.text,
        words: words
      })
        .then(response => response.data)
        .then((data: ModuleInterface)  => {
          // Добавляем созданный модуль в стор ко всем модулям пользователя
          let words: Array<Word> = []
          data.words.forEach(word => {
            words.push(new Word(word.word, word.translate))
          })
          ModulesStore.getInstance().addModule(new Module(data.name, words))

          form.cleanAllForm()
          form.deleteAllAutoFillInputs()
          form.addInputAutoFill(new ClassInputAutoFill(`Word ${Math.ceil((form.getAllInputsAutoFill().length + 1) / 2)}`, "", "Слово на английском языке"))
          form.addInputAutoFill(new ClassInputAutoFill(`Translate ${Math.ceil((form.getAllInputsAutoFill().length + 1) / 2)}`, "", "Перевод"))
          alert("Модуль успешно создан!")
        })
    } catch (error){
      console.log(error)
    }
  }
}

export default createModule