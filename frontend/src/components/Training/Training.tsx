import Btn from "../btns/Btn/Btn";
import {Link} from "react-router-dom";
import styles from "./Training.module.css"

interface TrainingProps{
  backgroundColor: string,
  title: string,
  text: string,
  btnColor: string,
  to?: string
}

/**
 * Компонент содержит один блок тренировки из меню выбора тренировок (страница тренировки)
 * @param backgroundColor задний фон блока
 * @param title название тренировки
 * @param text описание тренировки
 * @param btnColor задний фон кнопки для начала тренировки
 * @param to url куда идет перенаправление после нажатия на кнопку
 */
function Training({backgroundColor, title, text, btnColor, to}: TrainingProps){
  let autoStyles = {
    block: {
      backgroundColor: backgroundColor
    }
  }

  let btn
  if (to){
    btn = <Link to={to} className={styles.btn}>
            <Btn text={"Начать тренировку"} backgroundColor={btnColor} color={"#000000"}/>
          </Link>
  } else{
    btn = <Btn text={"Начать тренировку"} backgroundColor={btnColor} color={"#000000"} className={styles.btn}/>
  }

  return(
    <div className={styles.trainingBlock} style={autoStyles.block}>
      <h3>{title}</h3>
      <span>{text}</span>
      {btn}
    </div>
  )
}

export default Training