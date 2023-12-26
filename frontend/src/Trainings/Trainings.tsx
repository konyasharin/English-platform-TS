//

import Training from "./Training";
import "./Trainings.css"
import CheckAuth from "../Auth/CheckAuth";

/**
 * Компонент содержит страницу "тренировки"
 */
function Trainings(){
  CheckAuth()
  return(
    <section className="container trainings">
      <Training backgroundColor={"#FFB84D"} title={"Заучивание"}
                text={"В данной тренировке вы сначала увидите несколько слов, которые вы должны запомнить, " +
                  "потому что дальше вам придется писать перевод для этих же слов"}
                btnColor={"#B38136"} to={"/trainings/learn/chooseModule"}/>
      {/*<Training backgroundColor={"#4D4DFF"} title={"Повторение"} text={"test"} btnColor={"#6A36B3"}*/}
      {/*          to={"/trainings/repeat/chooseModule"}/>*/}
      <Training backgroundColor={"#C9C7C5"} title={"Скоро..."} text={"Здесь скоро появятся новый тренировки"} btnColor={"#737373"}/>
    </section>
  )
}
export default Trainings