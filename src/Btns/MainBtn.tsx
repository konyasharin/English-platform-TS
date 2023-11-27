import "./MainBtn.css"

interface MainBtnProps{
  text: string
}
function MainBtn({text}: MainBtnProps){
  return(
      <button className="main-btn">{text}</button>
  )
}

export default MainBtn