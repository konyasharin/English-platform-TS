import {FormNames} from "../initializeForms";
import FormsStore from "../store/FormsStore";
import blackBgStyles from "../components/BlackBg/BlackBg.module.css"

/**
 * Метод для закрытия формы авторизации
 * @param event event из JS
 */
export function closeForm(event?: any){
  if(event){
    if(event.target.classList.contains(blackBgStyles.bgBlack)){
      FormsStore.getInstance().deactivateBlackBg()
    }
  }else{
    FormsStore.getInstance().deactivateBlackBg()
    FormsStore.getInstance().changeStatus(FormNames.CHOOSE)
  }
}

export default closeForm