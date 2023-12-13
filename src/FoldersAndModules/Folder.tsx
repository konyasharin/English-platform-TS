// Данный компонент содержит блок с папкой (или модулем -
// если передался синий цвет и другая картинка с синей папкой)

import "./Folders.css"

interface FolderProps{
  className: string,
  img: string,
  title: string,
  alt: string,
  onClick?: any
}
function Folder({className, img, title, alt, onClick}: FolderProps){
  return(
    <div className={className} onClick={(event) => {onClick(event, title)}}>
      <img src={img} alt={alt}/>
      <h3>{title}</h3>
    </div>
  )
}
export default Folder