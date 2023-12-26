import style from "./Refer.module.css"
import {Link} from "react-router-dom";

interface ReferProps{
  url: string,
  img: string,
  text: string,
  alt: string
}

/**
 * Компонент содержит ссылку из "хедера" (ссылку на другую страницу вверху всех страниц)
 * @param url url куда идет перенаправление
 * @param img картинка около пункта в хэдере
 * @param text текст для данного пункта
 * @param alt alt для картинки
 * @constructor
 */
function Refer({url, img, text, alt}: ReferProps){
    return (
        <Link to={url} className={style.link}>
            <img src={img} alt={alt}/>
            <span>{text}</span>
        </Link>
    )
}

export default Refer