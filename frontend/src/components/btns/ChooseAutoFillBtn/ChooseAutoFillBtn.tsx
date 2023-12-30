import styles from "./ChooseAutoFillBtn.module.css"
import InputAutoFill from "../../../store/InputAutoFill";
import axios from "../../../axios";
import {ChangeEvent} from "react";
import {WordInterface} from "../../../pages/CreateModulePage/CreateModulePage";

interface ChooseAutoFillBtnInterface{
  text: string,
  input: InputAutoFill,
  next?: InputAutoFill
}

/**
 * Функция для вытягивания перевода слова из базы данных
 * @param event event из JS
 * @param input экземпляр класса InputAutoFill который должен содеражть перевод слова
 */
async function autoFillTranslate(event: ChangeEvent<HTMLInputElement>, input: InputAutoFill){
  try{
    await axios.get(`/library/${event.target.innerText.toLowerCase()}`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.data)
      .then(data => {
        input.cleanAutoFills()
        data.words.forEach((word: WordInterface) => {
          word.translates.forEach((translate) => {
            input.addAutoFill(translate)
          })
        })
      })
  } catch (error){
    console.log(error)
  }
}

/**
 * Данный компонент содержит кнопку, которая заполняет инпуты при нажатии на нее
 * @param text текст в кнопке (вариант автозаполнения)
 * @param input экземпляр класса InputAutoFill который мы будем заполнять
 * @param next экземпляр класса InputAutoFill, в котором должен содержаться перевод слова
 * @constructor
 */
function ChooseAutoFillBtn({text, input, next}: ChooseAutoFillBtnInterface){
  return(
    <button className={styles.autofillBtn} onClick={
      (event) => {
        if(next){
          input.chooseAutoFill(event, next, autoFillTranslate)
        } else{
          input.chooseAutoFill(event)
        }
      }
    }>
      {text}
    </button>
  )
}

export default ChooseAutoFillBtn