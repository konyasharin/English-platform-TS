import "./CreateModule.css"
interface WorkAndTranslateInterface{
  word: any,
  translate: any
}

function WordAndTranslate({word, translate}: WorkAndTranslateInterface){
  return(
    <div className="word-and-translate">
      {word}
      {translate}
    </div>
  )
}

export default WordAndTranslate