// Модуль содержит схему пользователя в базе данных

import {Schema, model} from "mongoose"

const schema = new Schema({
  userName: {type: String, required: true, unique: true},
  passwordHash: {type: String, required: true},
  modules: {type: Array, required: true}
})

export default model("User", schema)