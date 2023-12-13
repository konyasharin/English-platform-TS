// Компонент содержит главную страницу

import "./Main.css"
import MainBtn from "../Btns/MainBtn";
import LastModules from "./LastModules/LastModules";
import ElephantImg from "../assets/main/elephant.png"

function Main(){
  return (
    <main>
      <img id="elephant" src={ElephantImg} alt="elephant"/>
      <div className="container">
        <h1>Изучение<br/>
          английского языка</h1>
        <MainBtn text={"Начать тренировку"}/>
      </div>
      <LastModules />
    </main>
  )
}
export default Main