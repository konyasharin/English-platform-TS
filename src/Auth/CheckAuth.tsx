import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import User from "../store/user";
import Main from "../store/main";

const CheckAuth = () => {
  const user: User = User.getInstance()
  const navigate = useNavigate()
  useEffect(() => {
    if(user.login === ""){
      // @ts-ignore
      document.querySelector(".bg-black").classList.remove("bg-black_disable")
      Main.getInstance().formStatus = "choose"
      navigate("/")
    }
  })
}
export default CheckAuth