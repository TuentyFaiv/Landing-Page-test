import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import '@styles/components/header.scss';

import logo from '@images/logo.png';
import langIcon from '@icons/globe-alt.png';
import burgerIcon from '@icons/icon-burger.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__section-left">
        <Link to="/">
          <img src={logo} alt="Logo Company Name" className="header__logo" />
        </Link>
        <nav className="header__navigation">
          <ul>
            <li>
              <NavLink exact to="/academy">Academia</NavLink>
            </li>
            <li>
              <NavLink exact to="/platform">Plataforma</NavLink>
            </li>
            <li>
              <NavLink exact to="/about">Acerca de</NavLink>
            </li>
            <li>
              <NavLink exact to="/suport">Soporte</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__section-right">
        <Link to="/signin" className="header__signin">Iniciar sesión</Link>
        <Link to="/signup" className="header__signup">Registrate</Link>
        <img src={langIcon} alt="Chose Language" className="header__language-icon" />
      </div>
      <img src={burgerIcon} alt="Menu" className="header__menu" />
    </header>
  );
};

export default Header;
