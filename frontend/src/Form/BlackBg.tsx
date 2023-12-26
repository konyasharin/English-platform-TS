import "./Form.css"
import React from "react";
import {closeForm} from "../Auth/CheckAuth";

/**
 * Данный компонент содержит текущую форму из следующих:
 * выбор регистрации или входа/регистрация/вход,
 * а также затемняет задний фон
 * @param ChosenForm компонент с выбранной формой
 */
function BlackBg({ChosenForm}: any){
  return(
    <div className="bg-black bg-black_disable" onClick={closeForm}>
      <ChosenForm />
    </div>
  )
}
export default BlackBg