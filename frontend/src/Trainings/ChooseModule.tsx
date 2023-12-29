import {createModuleComponents} from "../pages/ModulesPage/ModulesPage";
import CheckAuth, {openForm} from "../Auth/CheckAuth";
import {observer} from "mobx-react-lite";
import FormsStore from "../store/FormsStore";
import {FormNames} from "../initializeForms";
import {editForm} from "../Auth/OpenAuth";
import ModulesStore from "../store/ModulesStore";
import learnTraining from "../store/LearnTraining";

/**
 * Метод запускает настройку тренировки при выборе модуля
 * @param event event из JS
 * @param moduleName имя модуля, который был выбран для тренировки
 */
function onChooseModule(event: any, moduleName: string){
  ModulesStore.getInstance().currentModule = moduleName
  openForm()
  FormsStore.getInstance().changeStatus(FormNames.TRAINING_SETTING)
  editForm()
  learnTraining.getInstance().countOfWord = 1
}

/**
 * Компонент содержит страницу выбора модуля для тренировки
 */
const ChooseModule = observer(() => {
  CheckAuth()
  const modules = createModuleComponents(onChooseModule)

  return(
    <section className="choose-module container">
      <h2>Выберите модуль</h2>
      <div className="choose-module__modules">
        {modules}
      </div>
    </section>
  )
})
export default ChooseModule