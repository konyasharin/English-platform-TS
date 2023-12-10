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