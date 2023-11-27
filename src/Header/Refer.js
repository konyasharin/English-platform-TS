import style from "./Refer.module.css"
import {Link} from "react-router-dom";
function Refer(props){
    return (
        <Link to={props.url} className={style.link}>
            <img src={props.img} alt={props.alt}/>
            <span>{props.text}</span>
        </Link>
    )
}

export default Refer