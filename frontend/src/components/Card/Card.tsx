import styles from "./Card.module.css"

interface CardInterface{
  text: string
}

/**
 * Модуль содержит компонент Card (карточка, на которой показываются перевод и само слово)
 * @param text текст в карточке
 */
function Card({text}: CardInterface){
  return(
    <div className={styles.card}>
      {text}
    </div>
  )
}

export default Card