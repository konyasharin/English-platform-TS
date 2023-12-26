import "./CreateModule.css"
interface WorkAndTranslateInterface{
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
function WordAndTranslate({word, translate}: WorkAndTranslateInterface){
  return(
    <div className="word-and-translate">
      {word}
      {translate}
    </div>
  )
}

export default WordAndTranslate