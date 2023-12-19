/*
Компонент содержит блок с двумя инпутами (слово и перевод)
с кнопками, которые предлагают варианты для автозаполнения
*/

interface AutoFillBlockInterface{
  input: any,
  autoFills: any
}


function AutoFillBlock({input, autoFills}: AutoFillBlockInterface){
  return(
    <div className="autofill-block">
      {input}
      {autoFills}
    </div>
  )
}

export default AutoFillBlock