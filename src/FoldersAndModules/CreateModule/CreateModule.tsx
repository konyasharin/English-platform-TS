import Input from "../../Input/Input";
import FormsStore from "../../store/formsStore";
import ClassInput from "../../store/input"
import Add from "../Add";
import {observer} from "mobx-react-lite";

function addWord(parent: ClassInput){
  console.log("test")
  const newInput = parent.clone()
  newInput.name = `Word 2313`
  FormsStore.getInstance().getForm("CreateModule")!.addInput(newInput)
}


const createModuleForm = FormsStore.getInstance().addForm("CreateModule")
const nameModule = createModuleForm.addInput(new ClassInput("ModuleName", "", "Название модуля"))
const firstWordInput = createModuleForm.addInput(
  new ClassInput(`Word ${createModuleForm.getAllInputs().length}`, "", "Слово на английском языке")
)
const CreateModule = observer(() => {

  const inputsForWords = createModuleForm.getAllInputs().filter(data => data.name !== "ModuleName")

  const inputs = inputsForWords.map((data, i) => {
    return <Input placeholder={data.placeholder} value={data.text} edit={data} key={i}/>
  })

  return (
    <section className="container create-modules">
      <Input placeholder={"Название модуля"} value={""} edit={nameModule}/>
      {inputs}
      <Add className={"module-add"} img={"icons/plus-blue.png"} onClick={() => {addWord(firstWordInput)}}/>
    </section>
  )
})
export default CreateModule