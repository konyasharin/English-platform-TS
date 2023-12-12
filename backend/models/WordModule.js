// Модуль сожержит схему слова из модуля (то есть у нас только один перевод) в базе данных

import {Schema} from "mongoose";

const schema = new Schema({
  word: {type: String, required: true},
  translate: {type: String, required: true}
})

export default schema