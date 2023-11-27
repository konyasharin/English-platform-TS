import "./Btn.css"

interface BtnProps{
  backgroundColor: string | undefined,
  color: string | undefined,
  text: string | undefined,
  onClick?: any
}

function Btn({backgroundColor, color, text, onClick}: BtnProps){
  let styles = {
    btn: {
      backgroundColor: backgroundColor,
      color: color
    }
  }
  return(
    <button style={styles.btn} className="btn" onClick={onClick}>{text}</button>
  )
}

export default Btn