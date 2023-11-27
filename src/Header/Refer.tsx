import style from "./Refer.module.css"
import {Link} from "react-router-dom";

interface ReferProps{
  url: string,
  img: string,
  text: string,
  alt: string
}
function Refer({url, img, text, alt}: ReferProps){
    return (
        <Link to={url} className={style.link}>
            <img src={img} alt={alt}/>
            <span>{text}</span>
        </Link>
    )
}

export default Refer