import "./Folders.css"
function Folder(props){
  return(
    <div className={props.class}>
      <img src={props.img} alt={props.alt}/>
      <h3>{props.title}</h3>
    </div>
  )
}
export default Folder