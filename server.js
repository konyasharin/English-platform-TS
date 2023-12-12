// Модуль для создания запросов (get и post запросы) к базе данных
// на основе созданных моделей из папки models и контроллеров из папки controllers

import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import checkAuth from "./backend/middleWares/checkAuth.js";
import * as UserController from "./backend/controllers/UserController.js"
import cors from "cors"
import * as WordController from "./backend/controllers/WordContoller.js"
import * as ModuleController from "./backend/controllers/ModuleController.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
const CONNECTION_STRING = `mongodb+srv://admin:${encodeURIComponent(process.env.PASSWORD)}@cluster0.r5frqga.mongodb.net/EnglishPlatform?retryWrites=true&w=majority`

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