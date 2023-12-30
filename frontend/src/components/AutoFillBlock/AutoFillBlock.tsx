import styles from "./AutoFillBlock.module.css"
interface AutoFillBlockInterface{
  input: any,
  autoFills: any
}

/**
 * Компонент содержит инпут
 * с кнопками, которые предлагают варианты для автозаполнения
 * @param input инпут для которого будут предлагаться варианты для автозаполнения
 * @param autoFills варианты для автозаполнения
 */
function AutoFillBlock({input, autoFills}: AutoFillBlockInterface){
  return(
    <div className={styles.autoFillBlock}>
      {input}
      {autoFills}
    </div>
  )
}

export default AutoFillBlock