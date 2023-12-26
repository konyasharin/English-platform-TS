import "./Btn.css"

interface BtnProps{
  backgroundColor: string | undefined,
  color: string | undefined,
  text: string | undefined,
  onClick?: any
}

/**
 * Данный компонент содержит кнопку (не главную)
 * @param backgroundColor цвет заднего фона кнопки
 * @param color цвет текста в кнопке
 * @param text текст в кнопке
 * @param onClick функция которая вызывается при нажатии на кнопку
 */
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