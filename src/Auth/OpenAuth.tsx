// Данный компонент меняет состояние формы(выбор регистрации или входа/регистрация/вход)
// и передает форму через пропсы в компонент BlackBg

import ChooseEntry from "../Entry/ChooseEntry";
import BlackBg from "../Form/BlackBg";
import Registration from "../Entry/Registration";
import Entry from "../Entry/Entry";
import FormsStore from "../store/FormsStore";
import {observer} from "mobx-react-lite";
import {FormNames} from "../initializeForms";
import TrainingSetting from "../Trainings/TrainingSetting";


// Метод для изменения состояния формы авторизации
export function editForm() {
  switch (FormsStore.getInstance().formStatus) {
    case FormNames.CHOOSE:
      return ChooseEntry
    case FormNames.REGISTRATION:
      return Registration
    case FormNames.ENTRY:
      return  Entry
    case FormNames.TRAINING_SETTING:
      return TrainingSetting
    default:
      return ChooseEntry
  }
}

const OpenAuth = observer(() => {
  return(
    <BlackBg ChosenForm={editForm()}/>
  )
})

export default OpenAuth