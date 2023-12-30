import {createModuleComponents} from "../ModulesPage/ModulesPage";
import CheckAuth, {openForm} from "../../components/CheckAuth/CheckAuth";
import {observer} from "mobx-react-lite";
import FormsStore from "../../store/FormsStore";
import {FormNames} from "../../initializeForms";
import {editForm} from "../../components/OpenAuth/OpenAuth";
import ModulesStore from "../../store/ModulesStore";
import learnTraining from "../../store/LearnTraining";
import styles from "./ChooseModulePage.module.css"
import Container from "../../components/Container/Container";

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
const ChooseModulePage = observer(() => {
  CheckAuth()
  const modules = createModuleComponents(onChooseModule)

  return(
    <Container>
      <section className={styles.chooseModule}>
        <h2>Выберите модуль</h2>
        <div className={styles.modules}>
          {modules}
        </div>
      </section>
    </Container>
  )
})
export default ChooseModulePage