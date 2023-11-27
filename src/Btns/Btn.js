import "./Btn.css"
function Btn(props){
  let styles = {
    btn: {
      backgroundColor: props.backgroundColor,
      color: props.color
    }
  }
  return(
    <button style={styles.btn} className="btn" onClick={props.onClick}>{props.text}</button>
  )
}

export default Btn