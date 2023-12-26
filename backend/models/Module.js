/**
 * Модуль содержит схему модуля в базе данных
 */

import {Schema, model} from "mongoose";
import WordModuleModel from "./WordModule.js";

const schema = new Schema({
    name: {type: String, required: true},
    words: [ WordModuleModel ]
})


export default model("Module", schema)