import styles from "./MainBtn.module.css"

interface MainBtnProps{
  text: string
}

/**
 * Данный компонент содержит главную кнопку (ее можно увидеть на главной странице)
 * @param text текст внутри кнопки
 */
function MainBtn({text}: MainBtnProps){
  return(
      <button className={styles.mainBtn}>{text}</button>
  )
}

export default MainBtn