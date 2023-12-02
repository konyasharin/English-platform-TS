import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import User from "../store/user";
import FormsStore from "../store/formsStore"
import {FormNames} from "../initializeForms";

const CheckAuth = () => {
  const user: User = User.getInstance()
  const navigate = useNavigate()
  useEffect(() => {
    if(user.login === ""){
      // @ts-ignore
      document.querySelector(".bg-black").classList.remove("bg-black_disable")
      FormsStore.getInstance().changeStatus(FormNames.CHOOSE)
      navigate("/")
    }
  })
}
export default CheckAuth