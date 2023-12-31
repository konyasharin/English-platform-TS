import Card from "../../../components/Card/Card";
import Btn from "../../../components/btns/Btn/Btn";
import LearnTraining, {TrainingStatuses} from "../../../store/LearnTraining";
import ModulesStore from "../../../store/ModulesStore";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import Input from "../../../components/inputs/Input/Input";
import InputClass from "../../../store/Input"
import {InputNames} from "../../../initializeForms";
import styles from "./TrainingLearnPage.module.css"
import Container from "../../../components/Container/Container";
import CheckAuth from "../../../components/CheckAuth/CheckAuth";

const training = LearnTraining.getInstance() as LearnTraining
let i: number = 0
let j: number = 0
const answersInput = new InputClass(InputNames.ANSWER, "", "Перевод")

/**
 * Данный компонент содержит страницу с уже запущенной тренировкой-заучиванием
 */
const TrainingLearnPage = observer(() => {
  CheckAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if(ModulesStore.getInstance().currentModule === ""){
      navigate("/trainings/learn/chooseModule")
    } else if(!training.isInit){
      training.initializeTraining()
    }
  })
  let secondBlock
  let title
  let firstBlock

  switch (training.currentStatus){
    case TrainingStatuses.SHOW_WORDS:
      firstBlock = <Card text={training.currentWord ? training.currentWord.word : ""}/>
      secondBlock = <Card text={training.currentWord ? training.currentWord.translate : ""}/>
      title = <h2>Попытайтесь<br/>запомнить слова</h2>
      break
    case TrainingStatuses.WRITE_ANSWERS:
      firstBlock = <Card text={training.currentWord ? training.currentWord.word : ""}/>
      secondBlock = <Input placeholder={answersInput.placeholder} value={answersInput.text} edit={answersInput}/>
      title = <h2>Попытайтесь ввести<br/>перевод слов</h2>
      break
    case TrainingStatuses.RESULTS:
      firstBlock = <></>
      secondBlock = <div>{training.correctAnswers} / {training.countOfWord}</div>
      title = <h2>Результаты:</h2>
  }

  return(
    <Container>
      <section className={styles.trainingLearnPage}>
        {title}
        <div className={styles.cards}>
          {firstBlock}
          {secondBlock}
        </div>
        {
          /**
           * Здесь важно передавать метод nextWord как стрелочную функцию, в противном случае не будет ссылки на
           * объект (this = undefined, связано это с тем, что если мы используем не стрелочную функцию, то
           * передается сам метод класса без привязки к объекту)
           */
        }
        <Btn backgroundColor={"#4D4DFF"} text={"продолжить"} color={"#ffffff"} onClick={() => {
          if(training.currentStatus === TrainingStatuses.SHOW_WORDS){
            if(i < training.countOfWord - 1){
              training.nextWord()
              i += 1
            } else{
              training.toggleToTrainingGroup()
            }
          } else if(training.currentStatus === TrainingStatuses.WRITE_ANSWERS){
            training.checkAnswer(answersInput.text)
            answersInput.onChange("")
            if(j < training.countOfWord - 1){
              training.nextWord()
              j += 1
            } else{
              training.setFinishStatus()
              i = 0
              j = 0
            }
          } else if(training.currentStatus === TrainingStatuses.RESULTS){
            training.resetTraining()
            navigate("/trainings")
          }
        }}/>
      </section>
    </Container>
  )
})

export default TrainingLearnPage