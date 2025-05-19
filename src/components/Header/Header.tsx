import './Header.scss'
import Nav from './Nav/Nav'
import logo from '../../assets/hompage/svg/Logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <Nav />
        <div className="header-btns">
            <button className="header-btns__btn button"><Link to="/signin">Sign In</Link></button>
            <button className="header-btns__btn button"><Link to="/signup">Sign Up</Link></button>
        </div>
    </header>
  )
}

export default Header