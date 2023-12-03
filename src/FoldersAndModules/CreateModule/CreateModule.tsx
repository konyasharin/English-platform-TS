import Input from "../../Input/Input";
import FormsStore from "../../store/formsStore";
import ClassInput from "../../store/input"
import Add from "../Add";
import {observer} from "mobx-react-lite";
import {FormNames, InputNames} from "../../initializeForms";
import WordAndTranslate from "./WordAndTranslate";

function addWord(parent: ClassInput){
  const newInput = parent.clone()
  newInput.name = `Word ${FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.getAllInputs().length}`
  FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.addInput(newInput)
}

const createModuleForm = FormsStore.getInstance().addForm(FormNames.CREATE_MODULE)
const nameModule = createModuleForm.addInput(new ClassInput(InputNames.MODULE_NAME, "", "Название модуля"))
const firstWordInput = createModuleForm.addInput(
  new ClassInput(`Word ${createModuleForm.getAllInputs().length}`, "", "Слово на английском языке")
)

const CreateModule = observer(() => {

  const inputsForWords = createModuleForm.getAllInputs().filter(data => data.name !== InputNames.MODULE_NAME)

  const inputs = inputsForWords.map((data, i) => {
    return <Input placeholder={data.placeholder} value={data.text} edit={data} key={i}/>
  })

  const blocks = [
    <WordAndTranslate word={<Input placeholder={"123"}/>}/>
  ]


  return (
    <section className="container create-modules">
      <Input placeholder={"Название модуля"} value={""} edit={nameModule}/>
      {inputs}
      ...
      {blocks}
      <Add className={"module-add"} img={"icons/plus-blue.png"} onClick={() => {addWord(firstWordInput)}}/>
    </section>
  )
})
export default CreateModule