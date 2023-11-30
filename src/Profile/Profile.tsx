import Input from "../Input/Input";
import MainBtn from "../Btns/MainBtn";
import "./Profile.css"
import CheckAuth from "../Auth/CheckAuth";
import User from "../store/user";

function Profile(props: { img: string | undefined; }){
  const user: User = User.getInstance()
  CheckAuth()
  return(
    <section className="container profile">
      <img src={props.img} alt="avatar"/>
      <div>
        <Input placeholder={"Ваш логин"} value={user.login}/>
        <Input placeholder={"Ваш старый пароль"}/>
        <Input placeholder={"Ваш новый пароль"}/>
        <MainBtn text={"Изменить данные"}/>
      </div>
    </section>
  )
}

export default Profile