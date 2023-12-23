// Данный компонент содержит главную кнопку (ее можно увидеть на главной странице)

import "./MainBtn.css"

interface MainBtnProps{
  text: string
}

// text - текст внутри кнопки
function MainBtn({text}: MainBtnProps){
  return(
      <button className="main-btn">{text}</button>
  )
}

export default MainBtn