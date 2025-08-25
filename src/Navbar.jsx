import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let scrollY = window.scrollY;

    sections.forEach((sec) => {
      const top = sec.offsetTop - 100;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        setActive(sec.getAttribute('id'));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
  behavior: 'smooth',
  block: 'start'
});

      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar" id="home">
      <div className="navbar-logo" onClick={() => scrollToSection('welcome')}>
        Susmitha<span>.</span>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {['home', 'skill','learnings','Education','projects',  'certificates'].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(id);
            }}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <a href="/assets/hireme1.pdf"  className="hire-button">
          Resume
        </a>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
