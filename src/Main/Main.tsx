// Компонент содержит главную страницу

import "./Main.css"
import MainBtn from "../Btns/MainBtn";
import LastModules from "./LastModules/LastModules";
import ElephantImg from "../assets/main/elephant.png"
import {Link} from "react-router-dom";

function Main(){
  return (
    <main>
      <img id="elephant" src={ElephantImg} alt="elephant"/>
      <div className="container">
        <h1>Изучение<br/>
          английского языка</h1>
        <Link to={"/trainings"}>
          <MainBtn text={"Начать тренировку"}/>
        </Link>
      </div>
      <LastModules />
    </main>
  )
}
export default Main