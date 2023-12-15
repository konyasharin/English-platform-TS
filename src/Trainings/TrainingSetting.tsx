import Form from "../Form/Form";
import Btn from "../Btns/Btn";
import Minus from "../assets/icons/minus.png"
import Plus from "../assets/icons/plus.png"
import {useState} from "react";
import ModulesStore from "../store/ModulesStore";
import { useNavigate} from "react-router-dom";
import {closeForm} from "../Auth/CheckAuth";

function TrainingSetting(){
  const [countWords, setCountWords] = useState(1)
  const maxCount = ModulesStore.getInstance().getModule(ModulesStore.getInstance().currentModule)!.words.length

  const increment = () => {
    if(countWords < maxCount){
      setCountWords(countWords + 1)
    }
  }

  const decrement = () => {
    if(countWords > 1){
      setCountWords(countWords - 1)
    }
  }

  const navigate = useNavigate()

  const content = (
    <div className="count-words">
      <h4>Количество слов</h4>
      <div className="change-count">
        <img src={Minus} alt="minus" onClick={decrement}/>
        <Btn backgroundColor={"#4D4DFF"} color={"#ffffff"} text={`${countWords}`}/>
        <img src={Plus} alt="plus" onClick={increment}/>
      </div>
    </div>
  )

  return(
    <Form title={"Настройка тренировки"} inputs={content} btnText={"Начать тренировку"} onClick={() => {
      closeForm()
      navigate("/trainings/learn/training")
    }}/>
  )
}

export default TrainingSetting