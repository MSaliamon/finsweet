import { Link } from 'react-router-dom'
import './Nav.scss'
function Nav() {
  return (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <Link to="/" className="nav__link">Home</Link>
            </li>
            <li className="nav__item">
                <Link to="/blog" className="nav__link">Blog</Link>
            </li>
            <li className="nav__item">
                <Link to="/about" className="nav__link">About Us</Link>
            </li>
            <li className="nav__item">
                <Link to="/contact" className="nav__link">Contact us</Link>
            </li>
        </ul>
    </nav>
  )
}
export default Nav