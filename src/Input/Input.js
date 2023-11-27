import "./Input.css"
function Input(props){
  return(
    <input type="text" placeholder={props.placeholder} value={props.value} onChange={props.edit}/>
  )
}
export default Input