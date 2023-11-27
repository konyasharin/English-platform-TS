import "./Main.css"
import MainBtn from "../Btns/MainBtn";
import LastModules from "./LastModules/LastModules";
function Main(){
  return (
    <main>
      <img id="elephant" src="main/elephant.png" alt="elephant"/>
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