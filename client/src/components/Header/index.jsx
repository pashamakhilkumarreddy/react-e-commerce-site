import React, { useState, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { BorderLessButton } from '../../styles/buttons';
import logo from './logo.png';
import './header.scss';

const Header = () => {
  const [showMobileMenu, setMobileMenu] = useState(false);
  return (
    <header>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <NavLink to='/' className='navbar-item'>
            <img
              src={logo}
              decoding='async'
              loading='lazy'
              importance='high'
              alt='Logo'
            />
          </NavLink>
          <span
            role='button'
            aria-label='menu'
            aria-expanded='false'
            data-target='main-navbar'
            className={
              'navbar-burger burger ' + (showMobileMenu ? 'is-active' : '')
            }
            onClick={() => setMobileMenu(!showMobileMenu)}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </span>
        </div>
        <div
          id='main-navbar'
          className={'navbar-menu ' + (showMobileMenu ? 'is-active' : '')}>
          <div className='navbar-start'>
            <NavLink className='navbar-item' to='/products'>
              Products
            </NavLink>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <NavLink to='/login' className={`button is-link`}>
                Log In
              </NavLink>
            </div>
            <div className='navbar-item'>
              <NavLink to='/register' className={`button is-light`}>
                Register
              </NavLink>
            </div>
            <div className='navbar-item'>
              <BorderLessButton>
                <NavLink to='/cart' className={`button is-primary`}>
                  <ion-icon name='cart-outline'></ion-icon>&nbsp; My cart
                </NavLink>
              </BorderLessButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
