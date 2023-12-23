// Компонент содержит последние созданные модули на главной странице

import style from "./LastModules.module.css"
import ABCImg from "../../assets/main/abc.png"
import Container from "../Container/Container";
import Card from "./Card/Card";

function LastModules(){
  return (
    <section className={style.lastModules}>
        <Container>
            <img src={ABCImg} alt="abc" className="wow flipInY"/>
            <h2>Последние<br/>
                созданные модули</h2>
            <div className={style.cards}>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </Container>
    </section>
  )
}
export default LastModules