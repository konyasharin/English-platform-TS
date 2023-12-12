// Данный компонент содержит страницу для создания модуля
// а также методы, необходимые для этого (добавление слов(блоков слов) - addWord,
// предлагание автозаполнения при вводе слов - editWord, проверка на правильность и
// добавление модуля в базу данных - onCreateModule

import Input from "../../Input/Input";
import FormsStore from "../../store/FormsStore";
import ClassInput from "../../store/Input"
import Add from "../Add";
import {observer} from "mobx-react-lite";
import {FormNames, InputNames} from "../../initializeForms";
import WordAndTranslate from "./WordAndTranslate";
import "./CreateModule.css"
import Btn from "../../Btns/Btn";
import ClassInputAutoFill from "../../store/InputAutoFill";
import {ChangeEvent} from "react";
import axios from "../../axios";
import InputAutoFill from "../../Input/InputAutoFill";
import AutoFillBlock from "./AutoFillBlock";
import ChooseAutoFillBtn from "../../Btns/ChooseAutoFillBtn";
import User from "../../store/User";
import CheckAuth from "../../Auth/CheckAuth";


export interface WordInterface{
  _id: string,
  word: string,
  translates: Array<string>
}


// Метод для создания инпутов для ввода нового слова и перевода для него
// parent1 - экземпляр класса InputAutoFill, от которого мы будем создавать копию инпута для ввода слова
// parent2 - экземпляр класса InputAutoFill, от которого мы будем создавать копию инпута для ввода перевода
function addWord(parent1: ClassInputAutoFill, parent2: ClassInputAutoFill){
  const newWord = parent1.clone()
  newWord.name = `Word ${Math.ceil((FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.getAllInputsAutoFill().length + 1) / 2)}`
  FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.addInputAutoFill(newWord)

  const newTranslate = parent2.clone()
  newTranslate.name = `Translate ${Math.ceil((FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.getAllInputsAutoFill().length + 1) / 2)}`
  FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.addInputAutoFill(newTranslate)
}

// Метод для вытаскивания предполагаемо вводимого слова из базы данных
// и предлагания этих переводов пользователю (добавление к экземпляру класса
// InputAutoFill в поле autoFills всех предполагаемых слов)
// event - event из JS
// input - экземпляр класса InputAutoFill, в который мы будем передавать предполагаемые слова
async function editWord(event: ChangeEvent<HTMLInputElement>, input: ClassInputAutoFill){
  if (event.target.value !== ""){
    try {
      await axios.get(`/library/${event.target.value}`, {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.data)
        .then(data => {
          input.cleanAutoFills()
          data.words.forEach((word: WordInterface) => {
            input.addAutoFill(word.word)
          })
        })
    } catch (error){
      console.log(error)
    }
  } else{
    input.cleanAutoFills()
  }
}

async function editTranslate(event: ChangeEvent<HTMLInputElement>, input: ClassInputAutoFill, prev: ClassInputAutoFill){

}

// Метод для проверки формы по созданию модуля на введенные значения и создание модуля в базе данных
async function onCreateModule(){
  if(createModuleForm.checkRepeatAutoFillInputs()){
    alert("Ошибка! Есть повторяющиеся поля")
  } else if(createModuleForm.getAllInputsAutoFill().length < 2) {
    alert("Ошибка! Нужно создать хотя бы одно слово")
  } else if(createModuleForm.checkEmptyAutoFillInputs()){
    alert("Ошибка! Есть незаполненные поля")
  } else if(createModuleForm.getInput(InputNames.MODULE_NAME)!.text === ""){
    alert("Ошибка! Введите название модуля")
  } else{
    let i: number
    let words: Array<object> = []

    for(i = 0; i < createModuleForm.getAllInputsAutoFill().length; i += 2){
      words.push({
        word: createModuleForm.getAllInputsAutoFill()[i].text,
        translate: createModuleForm.getAllInputsAutoFill()[i + 1].text
      })
    }

    try{
      await axios.post(`modules/create`, {
        userName: User.getInstance().login,
        name: createModuleForm.getInput(InputNames.MODULE_NAME)!.text,
        words: words
      })
        .then(response => response.data)
        .then(data => {
          User.getInstance().modules = [
            ...User.getInstance().modules,
            data
          ]
        })
    } catch (error){
      console.log(error)
    }
  }
}

// Создание формы для создания модуля и первого блока слово - перевод
const createModuleForm = FormsStore.getInstance().addForm(FormNames.CREATE_MODULE)
const nameModule = createModuleForm.addInput(new ClassInput(InputNames.MODULE_NAME, "", "Название модуля"))

const firstWordInput = createModuleForm.addInputAutoFill(
  new ClassInputAutoFill(`Word ${Math.ceil((createModuleForm.getAllInputsAutoFill().length + 1) / 2)}`, "", "Слово на английском языке")
)

const firstTranslateInput = createModuleForm.addInputAutoFill(
  new ClassInputAutoFill(`Translate ${Math.ceil((createModuleForm.getAllInputsAutoFill().length + 1) / 2)}`, "", "Перевод")
)


const CreateModule = observer(() => {
  CheckAuth()
  // Вытаскиваем из формы все инпуты (не экземпляры класса Input!!! а экземпляры класса InputAutoFill)
  // и на основе данных в этих экземплярах создаем уже функциональные реакт-кмпоненты InputAutoFill
  // и храним их в массиве inputs. В зависимости от индекса в массиве компонент хранит разные инпуты.
  // Если индекс четный, то это слово. Если нечетный - перевод.
  const inputs = createModuleForm.getAllInputsAutoFill().map((data, i) => {
    if (i % 2 === 0){
      return <InputAutoFill placeholder={data.placeholder} value={data.text} edit={data} key={i}
                            onChange={(event: ChangeEvent<HTMLInputElement>, input: ClassInputAutoFill) => editWord(event, input)}/>
    } else{
      return <InputAutoFill placeholder={data.placeholder} value={data.text} edit={data} key={i}
                            onChange={(event: ChangeEvent<HTMLInputElement>, input: ClassInputAutoFill, prev: ClassInputAutoFill) => editTranslate(event, input, prev)}
                            prev={createModuleForm.getAllInputsAutoFill()[i - 1]}/>
    }
  })

  // Если в экземпляре класса InputAutoFill есть в поле autoFills
  // какие-то значения для автодополнения, то мы берем эти значения и
  // создаем компоненты ChooseAutoFillBtn (кнопка для выбора автодополнения)
  // и храним их в массиве
  let i: number
  let j: number
  let autoFillBlocks = []
  let blocks = []

  for (i = 0; i < createModuleForm.getAllInputsAutoFill().length; i += 1){
    j = 0
    let autoFills = []

    for (j = 0; j < createModuleForm.getAllInputsAutoFill()[i].autoFills.length; j++){
      if(i % 2 === 0){
        autoFills.push(
          <ChooseAutoFillBtn text={createModuleForm.getAllInputsAutoFill()[i].autoFills[j].text} key={j}
                             input={createModuleForm.getAllInputsAutoFill()[i]}
                             next={createModuleForm.getAllInputsAutoFill()[i + 1]}/>
        )
      } else{
        autoFills.push(
          <ChooseAutoFillBtn text={createModuleForm.getAllInputsAutoFill()[i].autoFills[j].text} key={j}
                             input={createModuleForm.getAllInputsAutoFill()[i]}/>
        )
      }
    }

    // Уже сформированные ранее инут и автодополнения для него передаем через
    // пропсы в компонент AutoFillBlock и храним каждый такой блок в массиве autoFillBlocks
    autoFillBlocks.push(
      <AutoFillBlock input={inputs[i]} autoFills={autoFills}/>
    )
  }

  // Теперь в компоненте WorkAndTranslate создаем пары из компонентов
  // AutoFillBlock (слово и перевод - и для каждого сразу есть кнопки для
  // автодополнения)
  for (i = 0; i < createModuleForm.getAllInputsAutoFill().length; i += 2){
    blocks.push(
      <WordAndTranslate word={autoFillBlocks[i]} translate={autoFillBlocks[i + 1]} key={i}/>
    )
  }

  return (
    <section className="container create-modules">
      <Input placeholder={"Название модуля"} value={nameModule.text} edit={nameModule}/>
      {blocks}
      <Add className={"module-add"} img={"icons/plus-blue.png"} onClick={() => {addWord(firstWordInput, firstTranslateInput)}}/>
      <Btn text={"Создать модуль"} backgroundColor={"#4D4DFF"} color={"#ffffff"} onClick={onCreateModule}/>
    </section>
  )
})
export default CreateModule