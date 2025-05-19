import './Footer.scss'
import Logo from '../../assets/hompage/svg/Logo.svg'
import Nav from '../Header/Nav/Nav'
import Facebook from '../../assets/hompage/svg/Facebook2.svg'
import Twitter from '../../assets/hompage/svg/Twitter2.svg'
import Instagram from '../../assets/hompage/svg/Instagram2.svg'
import Linkedin from '../../assets/hompage/svg/Linkedin2.svg'
function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container1">
            <img src={Logo} alt="logo" className="logo" />
            <Nav />
        </div>
        <div className="footer-container2">
            <h2 className="footer-container2__title">Subscribe to our news letter to get latest updates and news</h2>
            <div className="footer-container2__box">
                <input type="text" className="footer-container2__box-email" placeholder='Enter your email' />
                <button className="footer-container2__box-btn button">Subscribe</button>
            </div>
        </div>
        <div className="footer-container3">
            <div className="footer-box1">
                <p className="footer-box1__text1">Finstreet 118 2561 Fintown</p>
                <p className="footer-box1__text2">Hello@finsweet.com  020 7993 2905</p>
            </div>
            <div className="footer-box2">
                <img src={Facebook} alt="Facebook" className="footer-box2__img" />
                <img src={Twitter} alt="Twitter" className="footer-box2__img" />
                <img src={Instagram} alt="Instagram" className="footer-box2__img" />
                <img src={Linkedin} alt="Linkedin" className="footer-box2__img" />
            </div>
        </div>
    </footer>
  )
}

export default Footer