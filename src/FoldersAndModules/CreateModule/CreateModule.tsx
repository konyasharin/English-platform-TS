import Input from "../../Input/Input";
import FormsStore from "../../store/FormsStore";
import ClassInput from "../../store/Input"
import Add from "../Add";
import {observer} from "mobx-react-lite";
import {FormNames, InputNames} from "../../initializeForms";
import WordAndTranslate from "./WordAndTranslate";
import "./CreateModule.css"
import Btn from "../../Btns/Btn";
import InputAutoFill from "../../store/InputAutoFill";

function addWord(parent1: ClassInput, parent2: ClassInput){
  const newWord = parent1.clone()
  newWord.name = `Word ${Math.ceil(FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.getAllInputs().length / 2)}`
  FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.addInput(newWord)

  const newTranslate = parent2.clone()
  newTranslate.name = `Translate ${Math.ceil(FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.getAllInputs().length / 2)}`
  FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.addInput(newTranslate)
}

const createModuleForm = FormsStore.getInstance().addForm(FormNames.CREATE_MODULE)
const nameModule = createModuleForm.addInput(new ClassInput(InputNames.MODULE_NAME, "", "Название модуля"))

const firstWordInput = createModuleForm.addInput(
  new ClassInput(`Word ${Math.ceil(createModuleForm.getAllInputs().length / 2)}`, "", "Слово на английском языке")
)

const firstTranslateInput = createModuleForm.addInput(
  new ClassInput(`Translate ${Math.ceil(createModuleForm.getAllInputs().length / 2)}`, "", "Перевод")
)

const test = createModuleForm.addInput(new InputAutoFill("1--", "", "---"))

const CreateModule = observer(() => {
  const inputsWithoutModuleName = createModuleForm.getAllInputs().filter(data => data.name !== InputNames.MODULE_NAME)

  const inputs = inputsWithoutModuleName.map((data, i) => {
    return <Input placeholder={data.placeholder} value={data.text} edit={data} key={i}/>
  })

  let i: number
  let blocks = []
  for (i = 0; i < inputs.length; i += 2){
    blocks.push(
      <WordAndTranslate word={inputs[i]} translate={inputs[i + 1]}/>
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