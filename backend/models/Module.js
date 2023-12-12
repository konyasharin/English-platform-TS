// Модуль содержит схему модуля в базе данных

import {Schema, model} from "mongoose";
import WordModel from "./Word.js";

const schema = new Schema({
    name: {type: String, required: true},
    words: [ WordModel.schema ]
})


export default model("Module", schema)