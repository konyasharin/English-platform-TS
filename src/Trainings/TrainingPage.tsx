import Card from "./Card";
import Btn from "../Btns/Btn";
import LearnTraining from "../store/LearnTraining";
import ModulesStore from "../store/ModulesStore";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";


const training = LearnTraining.getInstance() as LearnTraining
let i: number = 0

const TrainingPage = observer(() => {
  const navigate = useNavigate()
  useEffect(() => {
    if(ModulesStore.getInstance().currentModule === ""){
      navigate("/trainings/learn/chooseModule")
    } else if(!training.isInit){
      training.initializeTraining()
    }
  })
  return(
    <section className="container training-page">
      <h2>Попытайтесь<br/>запомнить слова</h2>
      <div className="cards">
        <Card text={training.currentWord ? training.currentWord.word : ""}/>
        <Card text={training.currentWord ? training.currentWord.translate : ""}/>
      </div>
      {
        /*
        Здесь важно передавать метод как стрелочную функцию, в противном случае не будет ссылки на
        объект (this = undefined, связано это с тем, что если мы используем не стрелочную функцию, то
        передается сам метод класса без привязки к объекту)
         */
      }
      <Btn backgroundColor={"#4D4DFF"} text={"продолжить"} color={"#ffffff"} onClick={() => {
        if(i < training.countOfWord - 1){
          if(training.nextWord() === undefined){

          }
          i += 1
        } else{
          alert("Кончились слова вообще")
        }
      }}/>
    </section>
  )
})

export default TrainingPage