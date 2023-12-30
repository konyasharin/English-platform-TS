import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import User from "../store/User";
import FormsStore from "../store/FormsStore"
import {FormNames} from "../initializeForms";
import axios from "../axios";
import {ModuleInterface} from "../pages/CreateModulePage/CreateModulePage";
import ModulesStore from "../store/ModulesStore";
import Module from "../store/Module";
import Word from "../store/Word";

/**
 * Метод для вытягивания информации о пользователе (если присутствует токен авторизации)
 */
export async function tryGetUserData(){
  try {
    await axios.get("auth/me", {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.data)
      .then(data => {
        if (User.getInstance().login === ""){ // чтобы не обновлять компоненты лишний раз делаем проверку
          User.getInstance().login = data.userName
          data.modules.forEach((module: ModuleInterface) => {
            let words: Array<Word> = []
            module.words.forEach(word => {
              words.push(new Word(word.word, word.translate))
            })
            ModulesStore.getInstance().addModule(new Module(module.name, words))
          })
        }
      })
  }catch (error){
    console.log(error)
  }
}

/**
 * Метод для открытия формы авторизации
 */
export function openForm(){
  // @ts-ignore
  document.querySelector(".bg-black").classList.remove("bg-black_disable")
  FormsStore.getInstance().changeStatus(FormNames.CHOOSE)
}

/**
 * Метод для закрытия формы авторизации
 * @param event event из JS
 */
export function closeForm(event?: any){
  if(event){
    if(event.target.classList.contains("bg-black")){
      event.target.classList.add("bg-black_disable")
    }
  }else{
    // @ts-ignore
    document.querySelector(".bg-black").classList.add("bg-black_disable")
    FormsStore.getInstance().changeStatus(FormNames.CHOOSE)
  }
}

/**
 * Данный компонент проверяет авторизован ли пользователь, если не авторизован,
 * то у нас не будет получена информация о пользователе и открыта форма после перенаправления на главную страницу
 * иначе мы получим всю информацию о пользователе
 */
const CheckAuth = () => {
  const navigate = useNavigate()
  useEffect( () => {
    async function getUserData(){
      await tryGetUserData()
      if(User.getInstance().login === ""){
        openForm()
        navigate("/")
      }
    }
    void getUserData()
  })
}
export default CheckAuth