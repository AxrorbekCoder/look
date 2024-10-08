import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import icons from react-icons
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { TransitionGroup, CSSTransition } from "react-transition-group"; // Import transition components
import './style.css';
import logo from './imges/logo.png';
import Footer from './Footer';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

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

      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade" // Class name for the fade animation
          timeout={300} // Duration of the animation
        >
          <Outlet />
        </CSSTransition>
      </TransitionGroup>
      
      <Footer />
    </>
  );
};

export default Layout;
