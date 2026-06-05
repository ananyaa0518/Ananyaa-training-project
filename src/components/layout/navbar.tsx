import { Link } from 'react-router-dom';
function Navbar() {
  return (
   <nav className="navbar">
      <div className="logo">
        <Link to="/">JR.POS</Link>
      </div>
      <div className="nav-links">
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div>
        <Link to="/login" className="login-btn">
          Login
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;