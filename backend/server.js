/**
 * Модуль для создания запросов (get и post запросы) к базе данных
 * а основе созданных моделей из папки models и контроллеров из папки controllers
 */

import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import checkAuth from "./middleWares/checkAuth.js";
import * as UserController from "./controllers/UserController.js"
import cors from "cors"
import * as WordController from "./controllers/WordContoller.js"
import * as ModuleController from "./controllers/ModuleController.js"
import * as FolderController from "./controllers/FolderController.js"

/**
 * Функция создает строку для подключения к mongodb (возникла необходимость создания данной функции
 * из-за того, что нужно применять encodeURIComponent только к паролю)
 * @param {string} login логин для подключения к базе данных
 * @param {string} password пароль для подключения к базе данных
 * @param {string} string строка для подключения к базе данных, здесь места для логина и пароля обязательно содержат
 * <login> и <password> соответственно
 * @return {string} строка с заменой полей <login> и <password> на логин и пароль для подключение к базе данных
 * (пароль сформирован через encodeURIComponent)
 */
function createConnectionString(login, password, string){
  const loginReplace = "<login>"
  const passwordReplace = "<password>"
  string = string.substring(0, string.indexOf(loginReplace)) + login + ":" +
    encodeURIComponent(password) + string.substring(string.indexOf(passwordReplace) + passwordReplace.length)
  return string
}


dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
const CONNECTION_STRING = createConnectionString(process.env.LOGIN, process.env.PASSWORD, process.env.DB_CONNECT)

app.use(express.json())
app.use(cors())

mongoose
  .connect(CONNECTION_STRING)
  .then(() => console.log("connect successfull"))
app.listen(PORT, () => {
  console.log("successfully run")
})

app.post("/auth/registration", UserController.registration)

app.post("/auth/login", UserController.login)

app.get("/auth/me", checkAuth, UserController.getMe)

app.get("/library/:partWord", WordController.getWord)

app.post("/modules/create", ModuleController.createModule)

app.post("/folders/create", FolderController.createFolder)
