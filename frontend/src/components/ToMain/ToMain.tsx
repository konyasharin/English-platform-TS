import {Link} from "react-router-dom";
import style from "./ToMain.module.css"

/**
 * Компонент содержит кнопку (блок) для возврата на главную страницу
 * (видно слева на всех страницах)
 */
function ToMain(){
  return(
    <div className={style.toMain}>
      <Link to="/">
        <span>На главную</span>
      </Link>
    </div>
  )
}
export default ToMain