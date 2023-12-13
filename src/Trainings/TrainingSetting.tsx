import Form from "../Form/Form";
import Btn from "../Btns/Btn";
import Minus from "../assets/icons/minus.png"
import Plus from "../assets/icons/plus.png"
import {useState} from "react";

function TrainingSetting(){
  const [countWords, setCountWords] = useState(1)

  const increment = () => {
    setCountWords(countWords + 1)
  }

  const decrement = () => {
    if(countWords > 1){
      setCountWords(countWords - 1)
    }
  }

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
    <Form title={"Настройка тренировки"} inputs={content} btnText={"Начать тренировку"} onClick={() => console.log("start")}/>
  )
}

export default TrainingSetting