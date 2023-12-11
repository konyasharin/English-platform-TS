// Данный компонент содержит кнопку, которая заполняет инпуты при нажатии на нее

import "./ChooseAutoFillBtn.css"
import InputAutoFill from "../store/InputAutoFill";
import axios from "../axios";
import {ChangeEvent} from "react";
import {WordInterface} from "../FoldersAndModules/CreateModule/CreateModule";


interface ChooseAutoFillBtnInterface{
  text: string,
  input: InputAutoFill,
  next?: InputAutoFill
}


// Функция для вытягивания перевода слова из базы данных
// event - event из pure JS
// input - экземпляр класса InputAutoFill который должен содеражть перевод слова
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

// Функция для вытягивания слова из базы данных по части слова и предложения вариантов для
// автозаполнения
// event - event из pure JS
// input - экземпляр класса InputAutoFill который мы будем заполнять
// next - экземпляр класса InputAutoFill, в котором должен содержаться перевод слова
function ChooseAutoFillBtn({text, input, next}: ChooseAutoFillBtnInterface){
  return(
    <button className={"autofill-btn"} onClick={
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