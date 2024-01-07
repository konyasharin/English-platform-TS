import {ChangeEvent} from "react";
import InputAutoFill from "../store/InputAutoFill";
import axios from "../axios";

export interface WordInterface{
  _id: string,
  word: string,
  translates: Array<string>
}

/**
 * Метод для вытаскивания предполагаемо вводимого слова из базы данных
 * и предлагания этих переводов пользователю (добавление к экземпляру класса
 * InputAutoFill в поле autoFills всех предполагаемых слов)
 * @param event event из JS
 * @param input экземпляр класса InputAutoFill, в который мы будем передавать предполагаемые слова
 */
async function editAutoFillWord(event: ChangeEvent<HTMLInputElement>, input: InputAutoFill): Promise<void>{
  if (event.target.value !== ""){
    try {
      await axios.get(`/library/${event.target.value}`, {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.data)
        .then(data => {
          input.cleanAutoFills()
          data.words.forEach((word: WordInterface) => {
            input.addAutoFill(word.word)
          })
        })
    } catch (error){
      console.log(error)
    }
  } else{
    input.cleanAutoFills()
  }
}

export default editAutoFillWord