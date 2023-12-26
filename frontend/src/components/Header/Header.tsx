import style from "./Header.module.css"
import TrainingsImg from "../../assets/header/trainings.png";
import FoldersImg from "../../assets/header/folders.png";
import ModulesImg from "../../assets/header/modules.png";
import ProfileImg from "../../assets/header/profile.png";
import Refer from "../Refer/Refer";
import Container from "../Container/Container";

/**
 * Компонент содержит "хедер" сайта
 */
function Header(){
    return (
        <header>
            <Container>
                <div className={style.headerWrapper}>
                    <Refer text={"Тренировки"} img={TrainingsImg} alt={"trainings"} url={"trainings"} />
                    <Refer text={"Папки"} img={FoldersImg} alt={"folders"} url={"folders"} />
                    <Refer text={"Модули"} img={ModulesImg} alt={"modules"} url={"modules"} />
                    <Refer text={"Профиль"} img={ProfileImg} alt={"profile"} url={"profile"} />
                </div>
            </Container>
        </header>
    )
}

export default Header