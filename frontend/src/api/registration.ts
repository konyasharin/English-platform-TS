import {closeForm} from "../components/CheckAuth/CheckAuth";
import axios from "../axios";

/**
 * Метод для завершения регистрации
 * @param login логин пользователя
 * @param password пароль пользователя
 * @param repeatPassword повтор пароля
 */
async function registration(login: string, password: string, repeatPassword: string){
  if (password === repeatPassword){
    try {
      await axios.post("auth/registration", {
        userName: login,
        password: password
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      alert("Регистрация прошла успешна")
      closeForm()
    } catch (error: any){
      alert(error.response.data.message)
    }
  } else{
    alert("Пароли не совпадают!")
  }
}

export default registration