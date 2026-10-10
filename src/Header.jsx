import { Link } from 'react-router-dom';
import './Header.css';

function Header({ searchTerm, onSearchChange }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="brand-logo">DEV@Deakin</Link>
      </div>
      
      <div className="navbar-center">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm || ''}
          onChange={onSearchChange}
          className="search-input"
        />
      </div>

      <div className="navbar-right">
        <Link to="/post" className="nav-link">Post</Link>
        <Link to="/login" className="nav-link login-btn">Login</Link>
      </div>
    </header>
  );
}

export default Header;