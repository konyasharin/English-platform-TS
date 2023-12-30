import styles from "./WordAndTranslate.module.css"

interface WordAndTranslateInterface{
  word: any,
  translate: any
}

/**
 * Компонент содержит два инпута - слово и перевод, для каждого
 * из которых уже есть кнопки с автодополнением
 * @param word компонент AutoFillBlock с инпутом, куда вводится слово на английском языке
 * @param translate компонент AutoFillBlock с инпутом, куда вводится перевод
 * @constructor
 */
function WordAndTranslate({word, translate}: WordAndTranslateInterface){
  return(
    <div className={styles.wordAndTranslate}>
      {word}
      {translate}
    </div>
  )
}

export default WordAndTranslate