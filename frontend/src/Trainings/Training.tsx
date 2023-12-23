// Компонент содержит один блок тренировки из меню выбора тренировок (страница тренировки)

import Btn from "../Btns/Btn";
import {Link} from "react-router-dom";

interface TrainingProps{
  backgroundColor: string,
  title: string,
  text: string,
  btnColor: string,
  to?: string
}

function Training({backgroundColor, title, text, btnColor, to}: TrainingProps){
  let styles = {
    block: {
      backgroundColor: backgroundColor
    }
  }

  let btn
  if (to){
    btn = <Link to={to}>
            <Btn text={"Начать тренировку"} backgroundColor={btnColor} color={"#000000"}/>
          </Link>
  } else{
    btn = <Btn text={"Начать тренировку"} backgroundColor={btnColor} color={"#000000"}/>
  }

  return(
    <div className="training-block" style={styles.block}>
      <h3>{title}</h3>
      <span>{text}</span>
      {btn}
    </div>
  )
}

export default Training