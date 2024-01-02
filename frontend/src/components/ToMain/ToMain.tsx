import {Link} from "react-router-dom";
import styles from "./ToMain.module.css"

/**
 * Компонент содержит кнопку (блок) для возврата на главную страницу
 * (видно слева на всех страницах)
 */
function ToMain(){
  return(
    <Link to="/" className={styles.link}>
      <div className={styles.toMain}>
        <span>На главную</span>
      </div>
    </Link>
  )
}
export default ToMain