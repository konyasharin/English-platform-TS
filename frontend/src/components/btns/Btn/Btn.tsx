import styles from "./Btn.module.css"

interface BtnProps{
  backgroundColor: string,
  color: string,
  text: string,
  onClick?: any
  className?: string
}

/**
 * Данный компонент содержит кнопку (не главную)
 * @param backgroundColor цвет заднего фона кнопки
 * @param color цвет текста в кнопке
 * @param text текст в кнопке
 * @param onClick функция которая вызывается при нажатии на кнопку
 * @param className класс который дополнительно накладывается на данный компонент
 */
function Btn({backgroundColor, color, text, onClick, className}: BtnProps){
  let autoStyles = {
    btn: {
      backgroundColor: backgroundColor,
      color: color
    }
  }
  return(
    <button style={autoStyles.btn} className={`${styles.btn} ${className}`} onClick={onClick}>{text}</button>
  )
}

export default Btn