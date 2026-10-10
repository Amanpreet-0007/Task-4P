import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <Link to="/about">About Deakin</Link>
      </div>
      <div className="footer-center">
        <Link to="/connect">Connect with us</Link>
      </div>
      <div className="footer-right">
        <a href="https://www.facebook.com/ChitkaraU/" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://x.com/ChitkaraU" target="_blank" rel="noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/chitkarau/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;