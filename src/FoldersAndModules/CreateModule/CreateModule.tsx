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


interface WordInterface{
  _id: string,
  word: string,
  translate: string
}


function addWord(parent1: ClassInputAutoFill, parent2: ClassInputAutoFill){
  const newWord = parent1.clone()
  newWord.name = `Word ${Math.ceil((FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.getAllInputsAutoFill().length + 1) / 2)}`
  FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.addInputAutoFill(newWord)

  const newTranslate = parent2.clone()
  newTranslate.name = `Translate ${Math.ceil((FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.getAllInputsAutoFill().length + 1) / 2)}`
  FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.addInputAutoFill(newTranslate)
}


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
          console.log(input)
        })
    } catch (error){
      console.log(error)
    }
  }
}


const createModuleForm = FormsStore.getInstance().addForm(FormNames.CREATE_MODULE)
const nameModule = createModuleForm.addInput(new ClassInput(InputNames.MODULE_NAME, "", "Название модуля"))

const firstWordInput = createModuleForm.addInputAutoFill(
  new ClassInputAutoFill(`Word ${Math.ceil((createModuleForm.getAllInputsAutoFill().length + 1) / 2)}`, "", "Слово на английском языке")
)

const firstTranslateInput = createModuleForm.addInputAutoFill(
  new ClassInputAutoFill(`Translate ${Math.ceil((createModuleForm.getAllInputsAutoFill().length + 1) / 2)}`, "", "Перевод")
)


const CreateModule = observer(() => {

  const inputs = createModuleForm.getAllInputsAutoFill().map((data, i) => {
    return <InputAutoFill placeholder={data.placeholder} value={data.text} edit={data} key={i}
                  onChange={(event: ChangeEvent<HTMLInputElement>, input: ClassInputAutoFill) => editWord(event, input)}/>
  })

  let i: number
  let j: number
  let autoFillBlocks = []
  let blocks = []

  for (i = 0; i < createModuleForm.getAllInputsAutoFill().length; i += 1){
    j = 0
    let autoFills = []

    for (j = 0; j < createModuleForm.getAllInputsAutoFill()[i].autoFills.length; j++){
      autoFills.push(
        <ChooseAutoFillBtn text={createModuleForm.getAllInputsAutoFill()[i].autoFills[j].text} key={j}/>
      )
    }

    autoFillBlocks.push(
      <AutoFillBlock input={inputs[i]} autoFills={autoFills}/>
    )
  }

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
      <Btn text={"Создать модуль"} backgroundColor={"#4D4DFF"} color={"#ffffff"}/>
    </section>
  )
})
export default CreateModule