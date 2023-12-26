interface AutoFillBlockInterface{
  input: any,
  autoFills: any
}

/**
 * Компонент содержит блок с двумя инпутами (слово и перевод)
 * с кнопками, которые предлагают варианты для автозаполнения
 * @param input инпут для которого будут предлагаться варианты для автозаполнения
 * @param autoFills варианты для автозаполнения
 */
function AutoFillBlock({input, autoFills}: AutoFillBlockInterface){
  return(
    <div className="autofill-block">
      {input}
      {autoFills}
    </div>
  )
}

export default AutoFillBlock