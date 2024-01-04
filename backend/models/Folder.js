import {model, Schema} from "mongoose";

const schema = new Schema({
  name: {type: String, required: true},
  modules: {type: Array, required: true}
})

export default model("Folder", schema)