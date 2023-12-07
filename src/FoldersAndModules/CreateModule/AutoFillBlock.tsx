
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