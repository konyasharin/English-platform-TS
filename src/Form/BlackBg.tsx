import "./Form.css"
import React from "react";
import {closeForm} from "../Auth/CheckAuth";

function BlackBg({ChosenForm}: any){
  return(
    <div className="bg-black bg-black_disable" onClick={closeForm}>
      <ChosenForm />
    </div>
  )
}
export default BlackBg