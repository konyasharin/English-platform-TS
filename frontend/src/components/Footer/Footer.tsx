import style from './Footer.module.css'
import FooterImg from "../../assets/footer/footer-bg.png"
import Container from "../Container/Container";

/**
 * Компонент содержит "футер"
 */
function Footer(){
  return(
    <footer className={style.footer}>
      <img className={style.footerImg} src={FooterImg} alt="footer"/>
        <Container>
            <div className={style.footerWrapper}>
                <span >© 2023 Nikolay Malyshev</span>
            </div>
        </Container>
    </footer>
  )
}
export default Footer