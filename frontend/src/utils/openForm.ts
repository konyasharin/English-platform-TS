import {FormNames} from "../initializeForms";
import FormsStore from "../store/FormsStore";

/**
 * Метод для открытия формы авторизации
 */
export function openForm(){
  FormsStore.getInstance().activateBlackBg()
  FormsStore.getInstance().changeStatus(FormNames.CHOOSE)
}

export default openForm