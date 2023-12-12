// Компонент содержит один блок тренировки из меню выбора тренировок (страница тренировки)

import Btn from "../Btns/Btn";

interface TrainingProps{
  backgroundColor: string,
  title: string,
  text: string,
  btnColor: string
}
function Training({backgroundColor, title, text, btnColor}: TrainingProps){
  let styles = {
    block: {
      backgroundColor: backgroundColor
    }
  }
  return(
    <div className="training-block" style={styles.block}>
      <h3>{title}</h3>
      <span>{text}</span>
      <Btn text={"Начать тренировку"} backgroundColor={btnColor} color={"#000000"}/>
    </div>
  )
}

export default Training