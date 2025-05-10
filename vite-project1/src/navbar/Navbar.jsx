import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBrain} from '@fortawesome/free-solid-svg-icons';
export const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="container nav-container">
          <a href="/" className="logo">
            <FontAwesomeIcon icon={faBrain} style={{ color: 'var(--primary)', fontSize: '1.8rem' }} />
            <span className="logo-text">Deep Analysis</span>
          </a>

          <div className="nav-links">
            <a href="/products" className="nav-link">Products</a>
            <a href="/founders" className="nav-link">Founders</a>
          </div>

          <a href="/contactUs" className="contact-btn">Contact us</a>
        </div>
      </nav>
  )
}
