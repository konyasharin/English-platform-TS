import Form from "../Form/Form";
import Btn from "../../btns/Btn/Btn";
import Minus from "../../../assets/icons/minus.png"
import Plus from "../../../assets/icons/plus.png"
import {useNavigate} from "react-router-dom";
import {closeForm} from "../../CheckAuth/CheckAuth";
import {observer} from "mobx-react-lite";
import ModulesStore from "../../../store/ModulesStore";
import LearnTraining from "../../../store/LearnTraining";
import styles from "./TrainingSetting.module.css"

const training: LearnTraining = LearnTraining.getInstance() as LearnTraining

/**
 * Компонент содержит форму с настройкой тренировки
 */
const TrainingSetting = observer(() => {
  training.maxCountOfWord = ModulesStore.getInstance().getModule(ModulesStore.getInstance().currentModule)!.words.length
  const navigate = useNavigate()
  const content = (
    <div className={styles.countWords}>
      <h4>Количество слов</h4>
      <div className={styles.changeCount}>
        <img src={Minus} alt="minus" onClick={() => training.decrementCountOfWord()}/>
        <Btn backgroundColor={"#4D4DFF"} color={"#ffffff"} text={`${training.countOfWord}`}/>
        <img src={Plus} alt="plus" onClick={() => training.incrementCountOfWord()}/>
      </div>
    </div>
  )

  return(
    <Form title={"Настройка тренировки"} inputs={content} btnText={"Начать тренировку"} onClick={() => {
      LearnTraining.getInstance().resetTraining()
      closeForm()
      navigate("/trainings/learn/training")
    }}/>
  )
})

export default TrainingSetting