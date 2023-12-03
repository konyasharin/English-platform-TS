import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import User from "../store/user";
import FormsStore from "../store/formsStore"
import {FormNames} from "../initializeForms";
import axios from "../axios";

export async function tryGetUserData(){
  try {
    await axios.get("auth/me", {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.data)
      .then(data => User.getInstance().login = data.userName)
  }catch (error){
    console.log(error)
  }
}

export function openForm(){
  // @ts-ignore
  document.querySelector(".bg-black").classList.remove("bg-black_disable")
  FormsStore.getInstance().changeStatus(FormNames.CHOOSE)
}

export function closeForm(event?: any){
  if(event){
    if(event.target.classList.contains("bg-black")){
      event.target.classList.add("bg-black_disable")
    }
  }else{
    // @ts-ignore
    document.querySelector(".bg-black").classList.add("bg-black_disable")
    FormsStore.getInstance().changeStatus(FormNames.CHOOSE)
  }
}

const CheckAuth = () => {
  const navigate = useNavigate()
  useEffect( () => {
    async function getUserData(){
      await tryGetUserData()
      if(User.getInstance().login === ""){
        openForm()
        navigate("/")
      }
    }
    void getUserData()
  })
}
export default CheckAuth