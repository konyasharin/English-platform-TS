import Input from "../../components/inputs/Input/Input";
import FormsStore from "../../store/FormsStore";
import ClassInput from "../../store/Input"
import Add from "../../components/Add/Add";
import {observer} from "mobx-react-lite";
import {FormNames, InputNames} from "../../initializeForms";
import WordAndTranslate from "../../components/WordAndTranslate/WordAndTranslate";
import Btn from "../../components/btns/Btn/Btn";
import ClassInputAutoFill from "../../store/InputAutoFill";
import {ChangeEvent} from "react";
import InputAutoFill from "../../components/inputs/InputAutoFill/InputAutoFill";
import AutoFillBlock from "../../components/AutoFillBlock/AutoFillBlock";
import ChooseAutoFillBtn from "../../components/btns/ChooseAutoFillBtn/ChooseAutoFillBtn";
import PlusBlueImg from "../../assets/icons/plus-blue.png"
import Container from "../../components/Container/Container";
import styles from "./CreateModulePage.module.css"
import createModule from "../../api/createModule";
import editAutoFillWord from "../../api/editAutoFillWord";
import CheckAuth from "../../components/CheckAuth/CheckAuth";

export interface Word{
  word: string,
  translate: string
}

/**
 * Метод для создания инпутов для ввода нового слова и перевода для него
 * @param parent1 экземпляр класса InputAutoFill, от которого мы будем создавать копию инпута для ввода слова
 * @param parent2 экземпляр класса InputAutoFill, от которого мы будем создавать копию инпута для ввода перевода
 */
function addWord(parent1: ClassInputAutoFill, parent2: ClassInputAutoFill){
  const newWord = parent1.clone()
  newWord.name = `Word ${Math.ceil((FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.getAllInputsAutoFill().length + 1) / 2)}`
  FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.addInputAutoFill(newWord)

  const newTranslate = parent2.clone()
  newTranslate.name = `Translate ${Math.ceil((FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.getAllInputsAutoFill().length + 1) / 2)}`
  FormsStore.getInstance().getForm(FormNames.CREATE_MODULE)!.addInputAutoFill(newTranslate)
}

async function editTranslate(event: ChangeEvent<HTMLInputElement>, input: ClassInputAutoFill, prev: ClassInputAutoFill | undefined): Promise<void>{

}

/**
 * Создание формы для создания модуля и первого блока слово - перевод
 */

const createModuleForm = FormsStore.getInstance().addForm(FormNames.CREATE_MODULE)
const nameModule = createModuleForm.addInput(new ClassInput(InputNames.MODULE_NAME, "", "Название модуля"))

const firstWordInput = createModuleForm.addInputAutoFill(
  new ClassInputAutoFill(`Word ${Math.ceil((createModuleForm.getAllInputsAutoFill().length + 1) / 2)}`, "", "Слово на английском языке")
)

const firstTranslateInput = createModuleForm.addInputAutoFill(
  new ClassInputAutoFill(`Translate ${Math.ceil((createModuleForm.getAllInputsAutoFill().length + 1) / 2)}`, "", "Перевод")
)

/**
 * Данный компонент содержит страницу для создания модуля
 */
const CreateModulePage = observer(() => {
  CheckAuth()
  /**
   * Вытаскиваем из формы все инпуты (не экземпляры класса Input!!! а экземпляры класса InputAutoFill)
   * и на основе данных в этих экземплярах создаем уже функциональные реакт-кмпоненты InputAutoFill
   * и храним их в массиве inputs. В зависимости от индекса в массиве компонент хранит разные инпуты.
   * Если индекс четный, то это слово. Если нечетный - перевод.
   */

  const inputs = createModuleForm.getAllInputsAutoFill().map((data, i) => {
    if (i % 2 === 0){
      return <InputAutoFill placeholder={data.placeholder} value={data.text} edit={data} key={i}
                            onChange={editAutoFillWord}/>
    } else{
      return <InputAutoFill placeholder={data.placeholder} value={data.text} edit={data} key={i}
                            onChange={editTranslate}
                            prev={createModuleForm.getAllInputsAutoFill()[i - 1]}/>
    }
  })

  /**
   * Если в экземпляре класса InputAutoFill есть в поле autoFills
   * какие-то значения для автозаполнения, то мы берем эти значения и
   * создаем компоненты ChooseAutoFillBtn (кнопка для выбора автодополнения)
   * и храним их в массиве
   */

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

    /**
     * Уже сформированные ранее инпут и автодополнения для него передаем через
     * пропсы в компонент AutoFillBlock и храним каждый такой блок в массиве autoFillBlocks
     */

    autoFillBlocks.push(
      <AutoFillBlock input={inputs[i]} autoFills={autoFills}/>
    )
  }

  /**
   * Теперь в компоненте WorkAndTranslate создаем пары из компонентов
   * AutoFillBlock (слово и перевод - и для каждого сразу есть кнопки для
   * автодополнения)
   */

  for (i = 0; i < createModuleForm.getAllInputsAutoFill().length; i += 2){
    blocks.push(
      <WordAndTranslate word={autoFillBlocks[i]} translate={autoFillBlocks[i + 1]} key={i}/>
    )
  }

  return (
    <Container>
      <section className={styles.createModule}>
        <Input placeholder={"Название модуля"} value={nameModule.text} edit={nameModule} className={styles.createModuleInput}/>
        {blocks}
        <Add className={styles.moduleAdd} img={PlusBlueImg} onClick={() => {addWord(firstWordInput, firstTranslateInput)}}/>
        <Btn text={"Создать модуль"} backgroundColor={"#4D4DFF"} color={"#ffffff"} onClick={() => createModule(createModuleForm)} className={styles.btn}/>
      </section>
    </Container>
  )
})
export default CreateModulePage