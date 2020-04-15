import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';
import { BorderLessButton } from '../styles/buttons';

const Header = () => {
  const [showMobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = (e) => {
    e.preventDefault();
    console.log(e.target.dataset.target);
    setMobileMenu(!showMobileMenu);
  }
  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={Logo} width="112" height="28" alt="Logo" />
          </Link>
          <div className="navbar-item">
            <Link to="/products" className="">
              Products
            </Link>
          </div>
          <a role="button" className={'navbar-burger burger ' + (showMobileMenu ? 'is-active' : '')} aria-label="menu" aria-expanded="false" data-target="main-navbar" onClick={toggleMobileMenu}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="main-navbar" className={'navbar-menu ' + (showMobileMenu ? 'is-active' : '')}>
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to='/login' className={`button is-link`}>Log In</Link>
            </div>
            <div className="navbar-item">
              <Link to='/register' className={`button is-light`}>Register</Link>
            </div>
            <div className="navbar-item">
              <BorderLessButton>
                <Link to='/cart' className={`button is-primary`}>
                  <i className="fas fa-shopping-cart"></i>&nbsp;
                  My cart
                </Link>
              </BorderLessButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;