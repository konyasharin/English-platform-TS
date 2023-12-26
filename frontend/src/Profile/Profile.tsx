import Input from "../Input/Input";
import MainBtn from "../Btns/MainBtn";
import "./Profile.css"
import CheckAuth from "../Auth/CheckAuth";
import User from "../store/User";
import {observer} from "mobx-react-lite";

/**
 * Компонент содержит страницу профиля
 * @param img путь до аватара пользователя
 */
const Profile = observer((props: { img: string | undefined; }) =>{
  CheckAuth()
  return(
    <section className="container profile">
      <img src={props.img} alt="avatar"/>
      <div>
        <Input placeholder={"Ваш логин"} value={User.getInstance().login}/>
        <Input placeholder={"Ваш старый пароль"}/>
        <Input placeholder={"Ваш новый пароль"}/>
        <MainBtn text={"Изменить данные"}/>
      </div>
    </section>
  )
})

export default Profile