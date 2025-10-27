import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link 
            to="home" 
            spy={true} 
            smooth={true} 
            duration={500} 
            offset={-100}
            className="nav-link"
            onClick={closeMenu}
          >
            LA Fitness
          </Link>
        </div>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="home" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500} 
                className="nav-link" 
                activeClass="active"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                className="nav-link" 
                activeClass="active"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="services" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                className="nav-link" 
                activeClass="active"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="transformations" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                className="nav-link" 
                activeClass="active"
                onClick={closeMenu}
              >
                Transformations
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="team" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                className="nav-link" 
                activeClass="active"
                onClick={closeMenu}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-80}
                duration={500} 
                className="nav-link" 
                activeClass="active"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="cta-buttons">
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-80}
              duration={500} 
              className="btn btn-primary"
              activeClass="active"
              onClick={closeMenu}
            >
              Join Now
            </Link>
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-80}
              duration={500} 
              className="btn btn-outline"
              activeClass="active"
              onClick={closeMenu}
            >
              Sign In
            </Link>
          </div>
        </nav>

        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;