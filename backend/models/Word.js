import {Schema, model} from "mongoose";

const schema = new Schema({
    word: {type: String, required: true},
    translate: {type: String, required: true}
})

export default model("Word", schema)
