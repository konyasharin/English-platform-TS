// Компонент содержит "футер"

import "./Footer.css"
import FooterImg from "../assets/footer/footer-bg.png"

function Footer(){
  return(
    <footer>
      <img src={FooterImg} alt="footer"/>
      <div className="container">
        <span >© 2023 Nikolay Malyshev</span>
      </div>
    </footer>
  )
}
export default Footer