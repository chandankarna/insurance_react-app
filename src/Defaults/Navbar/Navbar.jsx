import React from 'react';
import './Style.scss'
import MobileNav from './MobileNav';
// import Brand from '../../Assets/Logos/Algoquant.png'



var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light" id='navbar'>
      <div className="container-fluid topNav">
        <a className="navbar-brand" title='Policy India' href="/">
          {/* <img src={Brand} alt="Policy India" className="brand" width="200px" /> */}
          Policy India
        </a>
        <MobileNav />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 leftNav">
            <li className="nav-item dropdown">
              <a className="nav-link navName" title='General Insurance' href="#General-Insurance" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                General Insurance
                {" "}<i className="toggle-icon fas fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" title='Car Insurance' href="car-insurance">Car Insurance</a></li>
                <li><a className="dropdown-item" title='Motor Insurance' href="motor-insurance">Motor Insurance</a></li>
                <li><a className="dropdown-item" title='E Bike Insurance' href="ebike-insurance">E-Bike Insurance</a></li>
                <li><a className="dropdown-item" title='Health Insurance' href="health-insurance">Health Insurance</a></li>
                <li><a className="dropdown-item" title='Two Wheeler Insurance' href="two-wheeler-insurance">Two Wheeler Insurance</a></li>
                <li><a className="dropdown-item" title='Commercial Vehicle Insurance' href="commercial-vehicle-insurance">Commercial Vehicle Insurance</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link navName" title='Life Insurance' href="#Life-Insurance" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Life Insurance
                {" "}<i className="toggle-icon fas fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" title='Life Insurance' href="life-insurance">Life Insurance</a></li>
                <li><a className="dropdown-item" title='Pension Plans' href="pension-plans">Pension Plans</a></li>
                <li><a className="dropdown-item" title='Term Insurance' href="term-insurance">Term Insurance</a></li>
                <li><a className="dropdown-item" title='Whole Life Insurance' href="whole-life-insurance">Whole Life Insurance</a></li>
                <li><a className="dropdown-item" title='Unit Linked Insurance Plan' href="unit-linked-insurance-plan">Unit Linked Insurance Plan</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link navName" title='News Room' href="#News-Room" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
                {" "}<i className="toggle-icon fas fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" title='Career' href="career">Career</a>
                </li>
                <li>
                  <a className="dropdown-item" title='About' href="about">About Us</a>
                </li>
                <li>
                  <a className="dropdown-item" title='Contact Us' href="contact">Contact Us</a>
                </li>
                <li><a className="dropdown-item" title='Articles' href="articles">Our Articles</a></li>
                <li><a className="dropdown-item" title='Videos' href="videos">Watch Videos</a></li>
                {/* <li><a className="dropdown-item" title='Magzine' href="magzine">Magzine</a></li> */}
              </ul>
            </li>
          </ul>
          <ul className='rightNav'>
            <li className="nav-item navStyle">
              <a className="nav-link" title='Become a Sales Partner' href='epartner'>Become Partner</a>
            </li>
            <li className="nav-item navStyle">
              <a className="nav-link" title='Claim' href='claim'>Claim</a>
            </li>
            <li className="nav-item navStyle">
              <a className="nav-link" title='Policy India Assure' href='assure'>Assure</a>
            </li>
          </ul>
          <a className='navLogin' title='Login' href='login'>Login</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
