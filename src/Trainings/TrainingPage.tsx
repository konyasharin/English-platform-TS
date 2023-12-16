import Card from "./Card";
import Btn from "../Btns/Btn";

function TrainingPage(){
  return(
    <section className="container training-page">
      <h2>Попытайтесь<br/>запомнить слова</h2>
      <div className="cards">
        <Card text={"123"}/>
        <Card text={"22wfwef23e343443rf34f34f3f3erreferfefe edsf sd fsdf sdfs d"}/>
      </div>
      <Btn backgroundColor={"#4D4DFF"} text={"продолжить"} color={"#ffffff"}/>
    </section>
  )
}

export default TrainingPage