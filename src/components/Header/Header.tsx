import './Header.scss'
import Nav from './Nav/Nav'
import logo from '../../assets/hompage/svg/Logo.svg';

function Header() {
  return (
    <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <Nav />
    </header>
  )
}

export default Header