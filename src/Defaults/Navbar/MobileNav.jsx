import React, { useState } from 'react';
import './Style.scss';

function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div className='mobileNav-container'>
      <button className="mobile-navBtn" onClick={toggleNav}>
        <i className={`fas ${isNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      <div className={`overlay${isNavOpen ? ' open' : ''}`}>
        <div className="overlay-content">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
