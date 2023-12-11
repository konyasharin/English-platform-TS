// Данный компонент содержит кнопку (не главную)

import "./Btn.css"

interface BtnProps{
  backgroundColor: string | undefined,
  color: string | undefined,
  text: string | undefined,
  onClick?: any
}

// backgroundColor - цвет заднего фона кнопки
// color - цвет текста в кнопке
// text - текст в кнопке
// onClick - функция которая вызывается при нажатии на кнопку
function Btn({backgroundColor, color, text, onClick}: BtnProps){
  let styles = {
    btn: {
      backgroundColor: backgroundColor,
      color: color
    }
  }
  return(
    <button style={styles.btn} className="btn" onClick={onClick}>{text}</button>
  )
}

export default Btn