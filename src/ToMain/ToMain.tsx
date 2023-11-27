import {Link} from "react-router-dom";
import "./ToMain.css"
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