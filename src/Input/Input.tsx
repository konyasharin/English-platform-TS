import "./Input.css"

interface InputProps{
  placeholder?: string,
  value?: string,
  edit?: any
}
function Input({placeholder, value, edit}: InputProps){
  return(
    <input type="text" placeholder={placeholder} value={value} onChange={(event) => edit(event)}/>
  )
}
export default Input