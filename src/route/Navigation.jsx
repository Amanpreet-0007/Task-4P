import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ searchTerm, onSearchChange }) {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* DEV@Deakin Brand Link linking to Home */}
        <Link to="/" className="navbar-brand">
          DEV@Deakin
        </Link>

        {/* Search Bar in Navbar */}
        <div className="navbar-search">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm || ''}
            onChange={onSearchChange}
            className="navbar-search-input"
          />
        </div>

        {/* Navigation Links */}
        <nav className="navbar-links">
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>
          <NavLink 
            to="/post" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Post
          </NavLink>
          <NavLink 
            to="/login" 
            className={({ isActive }) => (isActive ? 'nav-link active login-nav-link' : 'nav-link login-nav-link')}
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;