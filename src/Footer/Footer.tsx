// Компонент содержит "футер"

import "./Footer.css"
function Footer(){
  return(
    <footer>
      <img src="Footer/footer-bg.png" alt="footer"/>
      <div className="container">
        <span >© 2023 Nikolay Malyshev</span>
      </div>
    </footer>
  )
}
export default Footer