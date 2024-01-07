import Input from "../../components/inputs/Input/Input";
import MainBtn from "../../components/btns/MainBtn/MainBtn";
import style from "./ProfilePage.module.css"
import User from "../../store/User";
import {observer} from "mobx-react-lite";
import Container from "../../components/Container/Container";
import CheckAuth from "../../components/CheckAuth/CheckAuth";

interface IProfilePageProps{
  img?: string
}

/**
 * Компонент содержит страницу профиля
 * @param img путь до аватара пользователя
 */
const ProfilePage = observer((props: IProfilePageProps) =>{
  CheckAuth()
  return(
    <section className={style.profile}>
      <Container>
        <div className={style.wrapper}>
          <img className={style.img} src={props.img} alt="avatar"/>
          <div>
            <Input placeholder={"Ваш логин"} value={User.getInstance().login}/>
            <Input placeholder={"Ваш старый пароль"}/>
            <Input placeholder={"Ваш новый пароль"}/>
            <MainBtn text={"Изменить данные"}/>
          </div>
        </div>
      </Container>
    </section>
  )
})

export default ProfilePage