import express from "express"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import UserModel from "./models/User.js"
import bcrypt from "bcrypt";
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
const CONNECTION_STRING = `mongodb+srv://admin:${encodeURIComponent(process.env.PASSWORD)}@cluster0.r5frqga.mongodb.net/Users?retryWrites=true&w=majority`

app.use(express.json())
// app.use("/api/auth", require("./routes/auth.route"))

mongoose
  .connect(CONNECTION_STRING)
  .then(() => console.log("connect successfull"))
app.listen(PORT, () => {
  console.log("successfully run")
})

const testUser = {
  userName: "Alex",
  password: "1234"
}
app.get("/auth/registration", async (request, response) => {
  const salt = await bcrypt.genSalt(10),
    passwordHash = await bcrypt.hash(request.body.password, salt)
  const doc = new UserModel({
    userName: request.body.userName,
    passwordHash: passwordHash
  })
  const user = await doc.save()
  response.json(user)
})
/*
app.get('/test', (request, response) => {
  UserModel.create(response.body)
    .then(users => response.json(users))
})
 */
