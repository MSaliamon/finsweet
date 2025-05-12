import './Header.scss'
import Nav from './Nav/Nav'
import logo from '../../assets/hompage/svg/Logo.svg';

function Header() {
  return (
    <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <Nav />
        <div className="header-btns">
            <button className="header-btns__btn button">Sign In</button>
            <button className="header-btns__btn button">Sign Up</button>
        </div>
    </header>
  )
}

export default Header