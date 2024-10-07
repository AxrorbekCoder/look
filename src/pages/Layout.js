import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import './style.css';
import logo from './imges/logo.png';
import Footer from './Footer';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <div className="logo-nav">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" className="logo"/>
            <h3>Coders</h3>
          </Link>
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <HiMiniBars3BottomRight size={24} />}
          </div>
        </div>
        <ul className={isOpen ? 'active' : ''}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>Services</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
