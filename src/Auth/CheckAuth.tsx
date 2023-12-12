// Данный компонент проверяет авторизован ли пользователь, если не авторизован,
// то у нас не будет получена информация о пользователе,
// иначе мы получим всю информацию о пользователе

import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import User from "../store/User";
import FormsStore from "../store/FormsStore"
import {FormNames} from "../initializeForms";
import axios from "../axios";

// Метод для вытягивания информации о пользователе (если присутствует токен авторизации)
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
          User.getInstance().modules = data.modules
        }
      })
  }catch (error){
    console.log(error)
  }
}

// Метод для открытия формы авторизации
export function openForm(){
  // @ts-ignore
  document.querySelector(".bg-black").classList.remove("bg-black_disable")
  FormsStore.getInstance().changeStatus(FormNames.CHOOSE)
}

// Метод для закрытия формы авторизации
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

// Метод для проверки авторизовались ли мы успешно, и если нет, то открывается форма
// для авторизации
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