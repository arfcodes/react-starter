/**
 * components/Header/index.js
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <NavLink to="/">My Site</NavLink>
    <div className="header__nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  </header>
);

export default Header;
