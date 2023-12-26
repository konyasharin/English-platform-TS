import style from "./MainPage.module.css"
import MainBtn from "../../Btns/MainBtn";
import LastModules from "../../components/LastModules/LastModules";
import ElephantImg from "../../assets/main/elephant.png"
import {Link} from "react-router-dom";
import Container from "../../components/Container/Container";

/**
 * Компонент содержит главную страницу
 */
function MainPage() {
    return (
        <>
            <img className={style.decorImg} src={ElephantImg} alt="elephant"/>
            <Container>
                <h1 className={style.title}>
                    Изучение<br/>
                    английского языка
                </h1>
                <Link to={"/trainings"}>
                    <MainBtn text={"Начать тренировку"}/>
                </Link>
            </Container>
            <LastModules/>
        </>
    )
}

export default MainPage;