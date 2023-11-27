import "./Folders.css"
interface AddProps{
  className: string,
  img: string
}
function Add({className, img}: AddProps){
  return(
    <div className={className}>
      <img src={img} alt="plus"/>
    </div>
  )
}
export default Add