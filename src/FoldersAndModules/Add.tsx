import "./Folders.css"
interface AddProps{
  className: string,
  img: string,
  onClick?: () => void
}
function Add({className, img, onClick}: AddProps){
  return(
    <div className={className} onClick={onClick}>
      <img src={img} alt="plus"/>
    </div>
  )
}
export default Add