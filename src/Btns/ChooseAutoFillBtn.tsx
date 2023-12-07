import "./ChooseAutoFillBtn.css"


interface ChooseAutoFillBtnInterface{
  text: string
}

function ChooseAutoFillBtn({text}: ChooseAutoFillBtnInterface){
  return(
    <button className={"autofill-btn"}>
      {text}
    </button>
  )
}

export default ChooseAutoFillBtn