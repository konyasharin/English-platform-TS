/*
Компонент содержит "кнопку" для добавления чего-либо
(ее можно увидеть на странице "модули" или когда вы создаете модуль
при добавлении слова)
*/

import "./Folders.css"
interface AddProps{
  className: string,
  img: string,
  onClick?: () => void
}
function Add({className, img, onClick}: AddProps){
  return(
    <div className={className} onClick={onClick}>
      <img src={img} alt="plus"/>
    </div>
  )
}
export default Add