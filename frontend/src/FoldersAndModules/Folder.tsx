import "./Folders.css"

interface FolderProps{
  className: string,
  img: string,
  title: string,
  alt: string,
  onClick?: any
}

/**
 * Данный компонент содержит блок с папкой (или модулем -
 * если передался синий цвет и другая картинка с синей папкой)
 * @param className имя класса, который применится к компоненту (окрашивание)
 * @param img картинка папки или модуля
 * @param title название папки или модуля
 * @param alt alt для картинки
 * @param onClick функция, которая вызывается при клике
 */
function Folder({className, img, title, alt, onClick}: FolderProps){
  return(
    <div className={className} onClick={(event) => {onClick(event, title)}}>
      <img src={img} alt={alt}/>
      <h3>{title}</h3>
    </div>
  )
}
export default Folder