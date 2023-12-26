import {Link} from "react-router-dom";
import "./ToMain.css"

/**
 * Компонент содержит кнопку (блок) для возврата на главную страницу
 * (видно слева на всех страницах)
 */
function ToMain(){
  return(
    <div className="to-main">
      <Link to="/">
        <span>На главную</span>
      </Link>
    </div>
  )
}
export default ToMain