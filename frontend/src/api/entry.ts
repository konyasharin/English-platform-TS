import axios from "../axios";
import closeForm from "../utils/closeForm";
import getUserData from "./getUserData";

/**
 * Метод для завершения авторизации (устанавливаем токен для авторизации локально
 * у пользователя и закрываем форму(если авторизация прошла успешно))
 * @param login логин пользователя
 * @param password пароль пользователя
 */
async function entry(login: string, password: string){
  try {
    await axios.post("auth/login", {
      userName: login,
      password: password
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.data)
      .then(data => localStorage.setItem("token", data.token))
    await getUserData()
    closeForm()
  } catch (error: any){
    alert(error.response.data.message)
  }
}

export default entry