import React from 'react';
import logo from '../Images/Logo-1.png';
import Navbar from './Navbar';
import '../css/header.css';

export default function Header() {
  return (
    <header>
      <div className="branding">
        <img src={logo} alt="" />
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <Navbar />
    </header>
  );
}
