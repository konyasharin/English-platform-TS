// Компонент содержит последние созданные модули на главной странице

import "./LastModules.css"
import Block from "./Block";
import ABCImg from "../../assets/main/abc.png"

function LastModules(){
  return (
    <section className="last-modules container">
      <img src={ABCImg} alt="abc" className="wow flipInY"/>
      <h2>Последние<br/>
        созданные модули</h2>
      <div className="blocks">
        <Block/>
        <Block/>
        <Block/>
      </div>
    </section>
  )
}
export default LastModules