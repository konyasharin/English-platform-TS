import React, {ReactNode} from "react";
import styles from "./Folder.module.css"

interface FolderProps{
  className: string,
  img: string,
  title: string,
  alt: string,
  children?: ReactNode,
  onClick?: (event: React.MouseEvent, title: string) => void
}

/**
 * Данный компонент содержит блок с папкой (или модулем -
 * если передался синий цвет и другая картинка с синей папкой)
 * @param className имя класса, который применится к компоненту (окрашивание)
 * @param img картинка папки или модуля
 * @param title название папки или модуля
 * @param alt alt для картинки
 * @param onClick функция, которая вызывается при клике
 * @param children компоненты, которые передаются в данный компонент (например значок добавления модуля в папку)
 */
function Folder({className, img, title, alt, children, onClick}: FolderProps){
  return(
    <div className={className}
         onClick={onClick ? (event) => {onClick(event, title)} : undefined}>
      <img src={img} alt={alt} className={styles.folderImg}/>
      <h3>{title}</h3>
      {children}
    </div>
  )
}
export default Folder