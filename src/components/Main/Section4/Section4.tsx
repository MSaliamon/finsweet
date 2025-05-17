import './Section4.scss'
import floya from '../../../assets/hompage/png/floya.png'
import Dianne from '../../../assets/hompage/png/Dianne.png'
import Jenny from '../../../assets/hompage/png/Jenny.png'
import leslie from '../../../assets/hompage/png/leslie.png'
import facebook from '../../../assets/hompage/svg/facebook.svg'
import twitter from '../../../assets/hompage/svg/twitter.svg'
import instagram from '../../../assets/hompage/svg/instagram.svg'
import linkedin from '../../../assets/hompage/svg/linkedin.svg'
import Logo1 from '../../../assets/hompage/svg/Logo1.svg'
import Logo2 from '../../../assets/hompage/svg/Logo2.svg'
import Logo3 from '../../../assets/hompage/svg/Logo3.svg'
import Logo4 from '../../../assets/hompage/svg/Logo4.svg'
import Logo5 from '../../../assets/hompage/svg/Logo5.svg'
function Section4() {
  return (
    <section className="section4">
        <h2 className="section4__title">List of Authors</h2>
        <div className="section4-wrap">
            <div className="section4-container1">
                <div className="section4-box">
                    <img src={floya} alt="floya" className="section4-box__img" />
                    <div className="section4-box__textbox">
                        <p className="section4-box__textbox-text1">Floyd Miles</p>
                        <p className="section4-box__textbox-text2">Content Writer @Company</p>
                    </div>
                    <div className="section4-box__socials">
                        <img src={facebook} alt="facebook" className="section4-box__socials-img" />
                        <img src={twitter} alt="twitter" className="section4-box__socials-img" />
                        <img src={instagram} alt="instagram" className="section4-box__socials-img" />
                        <img src={linkedin} alt="linkedin" className="section4-box__socials-img" />
                    </div>
                </div>
                <div className="section4-box">
                    <img src={Dianne} alt="Dianne" className="section4-box__img" />
                    <div className="section4-box__textbox">
                        <p className="section4-box__textbox-text1">Dianne Russell</p>
                        <p className="section4-box__textbox-text2">Content Writer @Company</p>
                    </div>
                    <div className="section4-box__socials">
                        <img src={facebook} alt="facebook" className="section4-box__socials-img" />
                        <img src={twitter} alt="twitter" className="section4-box__socials-img" />
                        <img src={instagram} alt="instagram" className="section4-box__socials-img" />
                        <img src={linkedin} alt="linkedin" className="section4-box__socials-img" />
                    </div>
                </div>
                <div className="section4-box">
                    <img src={Jenny} alt="Jenny" className="section4-box__img" />
                    <div className="section4-box__textbox">
                        <p className="section4-box__textbox-text1">Jenny Wilson</p>
                        <p className="section4-box__textbox-text2">Content Writer @Company</p>
                    </div>
                    <div className="section4-box__socials">
                        <img src={facebook} alt="facebook" className="section4-box__socials-img" />
                        <img src={twitter} alt="twitter" className="section4-box__socials-img" />
                        <img src={instagram} alt="instagram" className="section4-box__socials-img" />
                        <img src={linkedin} alt="linkedin" className="section4-box__socials-img" />
                    </div>
                </div>
                <div className="section4-box">
                    <img src={leslie} alt="leslie" className="section4-box__img" />
                    <div className="section4-box__textbox">
                        <p className="section4-box__textbox-text1">Leslie Alexander</p>
                        <p className="section4-box__textbox-text2">Content Writer @Company</p>
                    </div>
                    <div className="section4-box__socials">
                        <img src={facebook} alt="facebook" className="section4-box__socials-img" />
                        <img src={twitter} alt="twitter" className="section4-box__socials-img" />
                        <img src={instagram} alt="instagram" className="section4-box__socials-img" />
                        <img src={linkedin} alt="linkedin" className="section4-box__socials-img" />
                    </div>
                </div>
            </div>
            <div className="section4-container2">
                <img src={Logo1} alt="logo1" className="section4-container2__img" />
                <img src={Logo2} alt="logo2" className="section4-container2__img" />
                <img src={Logo3} alt="logo3" className="section4-container2__img" />
                <img src={Logo4} alt="logo4" className="section4-container2__img" />
                <img src={Logo5} alt="logo5" className="section4-container2__img" />
            </div>
        </div>
    </section>
  )
}
export default Section4