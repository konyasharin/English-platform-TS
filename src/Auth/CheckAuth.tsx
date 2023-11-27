import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import User from "../store/user";
import ClientData from "../store/clientData";

const CheckAuth = () => {
  const user: User = User.getInstance()
  const navigate = useNavigate()
  useEffect(() => {
    if(user.login === ""){
      // @ts-ignore
      document.querySelector(".bg-black").classList.remove("bg-black_disable")
      ClientData.getInstance().formStatus = "choose"
      navigate("/")
    }
  })
}
export default CheckAuth