import User from "../../store/User";
import openForm from "../../utils/openForm";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

/**
 * Данный компонент проверяет авторизован ли пользователь, если не авторизован,
 * то у нас не будет получена информация о пользователе и открыта форма после перенаправления на главную страницу
 * иначе ничего не происходит
 */
function CheckAuth() {
  const navigate = useNavigate()
  useEffect(() => {
    if(!User.getInstance().isLoading && User.getInstance().login === ""){
      openForm()
      navigate("/")
    }
  })
}
export default CheckAuth