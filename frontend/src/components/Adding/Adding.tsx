import plusImg from "../../assets/icons/plus.png"
import minusImg from "../../assets/icons/minus.png"
import {ReactNode} from "react";
import styles from "./Adding.module.css"

interface addingInterface{
  isAdd: boolean
  className: string
}

function Adding({isAdd, className}: addingInterface){
  let img: ReactNode = isAdd ? <img src={minusImg} alt={"minus"} className={styles.adding}/> :
    <img src={plusImg} alt={"plus"} className={styles.adding}/>

  return(
    <div className={className}>
      {img}
    </div>
  )
}

export default Adding