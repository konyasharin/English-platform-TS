import {createModuleComponents} from "../FoldersAndModules/Modules";
import CheckAuth, {openForm} from "../Auth/CheckAuth";
import {observer} from "mobx-react-lite";
import FormsStore from "../store/FormsStore";
import {FormNames} from "../initializeForms";
import {editForm} from "../Auth/OpenAuth";

function onChooseModule(event: any, moduleName: string){
  openForm()
  FormsStore.getInstance().changeStatus(FormNames.TRAINING_SETTING)
  editForm()
}


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