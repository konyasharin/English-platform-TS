import {Schema, model} from "mongoose";

const schema = new Schema({
    word: {type: String, required: true},
    translates: {type: Array, required: true}
})

export default model("Word", schema)
