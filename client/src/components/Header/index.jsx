import React, { useState } from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BorderLessButton } from '../../styles/buttons';
import logo from './logo.png';
import { checkObjProps } from '../../utils/helpers'
import './header.scss';

const Header = (props) => {
  const [showMobileMenu, setMobileMenu] = useState(false);
  const isUserLoggedIn =
    props.authentication.authenticated &&
    checkObjProps(props.authentication.tokens);
  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <img
              src={logo}
              decoding="async"
              loading="lazy"
              importance="high"
              alt="Logo"
            />
          </NavLink>
          <span
            role="button"
            aria-label="menu"
            aria-expanded="false"
            data-target="main-navbar"
            className={
              "navbar-burger burger " + (showMobileMenu ? "is-active" : "")
            }
            onClick={() => setMobileMenu(!showMobileMenu)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div
          id="main-navbar"
          className={"navbar-menu " + (showMobileMenu ? "is-active" : "")}
        >
          <div className="navbar-start">
            <div className="navbar-item">
              <NavLink className="button is-info is-light" to="/products">
                Products
              </NavLink>
            </div>
          </div>
          <div className="navbar-end">
            {!isUserLoggedIn ? (
              <div className="navbar-item">
                <NavLink to="/login" className={`button is-link`}>
                  <ion-icon name="log-in-outline"></ion-icon>&nbsp; Log In
                </NavLink>
              </div>
            ) : null}
            {isUserLoggedIn ? (
              <div className="navbar-item">
                <BorderLessButton>
                  <NavLink to="/cart" className={`button is-primary`}>
                    <ion-icon name="cart-outline"></ion-icon>&nbsp; My cart
                  </NavLink>
                </BorderLessButton>
              </div>
            ) : null}
            {isUserLoggedIn ? (
              <div className="navbar-item">
                <BorderLessButton>
                  <button className={`button is-danger`}>
                    <ion-icon name="log-out-outline"></ion-icon>
                    &nbsp; Log Out
                  </button>
                </BorderLessButton>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  const {authentication} = state;
  return {
    authentication,
  };
}

export default connect(mapStateToProps, null)(Header);
