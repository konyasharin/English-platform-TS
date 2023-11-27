import Training from "./Training";
import "./Trainings.css"
import CheckAuth from "../Auth/CheckAuth";
function Trainings(){
  CheckAuth()
  return(
    <section className="container trainings">
      <Training backgroundColor={"#FFB84D"} title={"Заучивание"} text={"test"} btnColor={"#B38136"}/>
      <Training backgroundColor={"#4D4DFF"} title={"Повторение"} text={"test"} btnColor={"#6A36B3"}/>
      <Training backgroundColor={"#C9C7C5"} title={"Скоро..."} text={"test"} btnColor={"#737373"}/>
    </section>
  )
}
export default Trainings