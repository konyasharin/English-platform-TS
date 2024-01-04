/**
 * Модуль содержит схему пользователя в базе данных
 */

import {Schema, model} from "mongoose"
import ModuleSchema from "./Module.js"
import FolderSchema from "./Folder.js"

const schema = new Schema({
  userName: {type: String, required: true, unique: true},
  passwordHash: {type: String, required: true},
  modules: [ ModuleSchema.schema ],
  folders: [ FolderSchema.schema ]
})

export default model("User", schema)