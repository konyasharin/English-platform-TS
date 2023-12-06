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

function addWord(parent1: InputAutoFill, parent2: InputAutoFill){
  const newWord = parent1.clone()
  newWord.name = `Word ${Math.ceil((FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.getAllInputsAutoFill().length + 1) / 2)}`
  FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.addInputAutoFill(newWord)

  const newTranslate = parent2.clone()
  newTranslate.name = `Translate ${Math.ceil((FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.getAllInputsAutoFill().length + 1) / 2)}`
  FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.addInputAutoFill(newTranslate)
}

const createModuleForm = FormsStore.getInstance().addForm(FormNames.CREATE_MODULE)
const nameModule = createModuleForm.addInput(new ClassInput(InputNames.MODULE_NAME, "", "Название модуля"))

const firstWordInput = createModuleForm.addInputAutoFill(
  new InputAutoFill(`Word ${Math.ceil((createModuleForm.getAllInputsAutoFill().length + 1) / 2)}`, "", "Слово на английском языке")
)

const firstTranslateInput = createModuleForm.addInputAutoFill(
  new InputAutoFill(`Translate ${Math.ceil((createModuleForm.getAllInputsAutoFill().length + 1) / 2)}`, "", "Перевод")
)


const CreateModule = observer(() => {

  const inputs = createModuleForm.getAllInputsAutoFill().map((data, i) => {
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