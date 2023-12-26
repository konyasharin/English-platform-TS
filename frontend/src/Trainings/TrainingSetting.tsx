import Form from "../Form/Form";
import Btn from "../Btns/Btn";
import Minus from "../assets/icons/minus.png"
import Plus from "../assets/icons/plus.png"
import {useNavigate} from "react-router-dom";
import {closeForm} from "../Auth/CheckAuth";
import {observer} from "mobx-react-lite";
import ModulesStore from "../store/ModulesStore";
import LearnTraining from "../store/LearnTraining";

const training: LearnTraining = LearnTraining.getInstance() as LearnTraining

/**
 * Компонент содержит форму с настройкой тренировки
 */
const TrainingSetting = observer(() => {
  training.maxCountOfWord = ModulesStore.getInstance().getModule(ModulesStore.getInstance().currentModule)!.words.length
  const navigate = useNavigate()
  const content = (
    <div className="count-words">
      <h4>Количество слов</h4>
      <div className="change-count">
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