import "../../FoldersAndModules/Folders.module.css"
interface AddProps{
  className: string,
  img: string,
  onClick?: () => void
}

/**
 * Компонент содержит "кнопку" для добавления чего-либо
 * (ее можно увидеть на странице "модули" или когда вы создаете модуль
 * при добавлении слова)
 * @param className имя класса, который добавится на данную кнопку (для перекрашивания)
 * @param img картинка в середине кнопки (плюсик оранжевый или синий)
 * @param onClick функция, которая вызывается при клике
 */
function Add({className, img, onClick}: AddProps){
  return(
    <div className={className} onClick={onClick}>
      <img src={img} alt="plus"/>
    </div>
  )
}
export default Add