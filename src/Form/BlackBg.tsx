import "./Form.css"
import React from "react";
const closeForm = (event: any) => {
  if(event.target.classList.contains("bg-black")){
    event.target.classList.toggle("bg-black_disable")
  }
}

function BlackBg({ChosenForm}: any){
  return(
    <div className="bg-black bg-black_disable" onClick={closeForm}>
      <ChosenForm />
    </div>
  )
}
export default BlackBg