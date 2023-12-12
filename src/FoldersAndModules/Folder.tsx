// Данный компонент содержит блок с папкой (или модулем -
// если передался синий цвет и другая картинка с синей папкой)

import "./Folders.css"
interface FolderProps{
  className: string,
  img: string,
  title: string,
  alt: string
}
function Folder({className, img, title, alt}: FolderProps){
  return(
    <div className={className}>
      <img src={img} alt={alt}/>
      <h3>{title}</h3>
    </div>
  )
}
export default Folder