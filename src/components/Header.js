import React from 'react';
import logo from '../Images/Logo-1.png';
import Navbar from './Navbar';

const Header = () => (
  <header>
    <div className="logo">
      <img src={logo} alt="logo" />
      <h1>Space Traveller`&apos;`s Hub</h1>
    </div>
    <Navbar />
  </header>
);

export default Header;
