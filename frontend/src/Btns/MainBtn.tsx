import "./MainBtn.css"

interface MainBtnProps{
  text: string
}

/**
 * Данный компонент содержит главную кнопку (ее можно увидеть на главной странице)
 * @param text текст внутри кнопки
 */
function MainBtn({text}: MainBtnProps){
  return(
      <button className="main-btn">{text}</button>
  )
}

export default MainBtn