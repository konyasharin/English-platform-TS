import styles from "./BlackBg.module.css"
import {observer} from "mobx-react-lite";
import FormsStore from "../../store/FormsStore";
import closeForm from "../../utils/closeForm";

/**
 * Данный компонент содержит текущую форму из следующих:
 * выбор регистрации или входа/регистрация/вход,
 * а также затемняет задний фон
 * @param ChosenForm компонент с выбранной формой
 */
const BlackBg = observer(({ChosenForm}: any) => {
  let currentClassName: string
  if(FormsStore.getInstance().blackBgStatus){
    currentClassName = styles.active
  } else{
    currentClassName = styles.disable
  }

  return(
    <div className={`${styles.bgBlack} ${currentClassName}`} onClick={closeForm}>
      <ChosenForm />
    </div>
  )
})
export default BlackBg