import React from 'react';
import logo from '../Images/Logo-1.png';
import '../css/Header.css';

export default function Header() {
  return (
    <header>
      <div className="branding">
        <img src={logo} alt="" />
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/" className="menu-item">Rockets</a>
          </li>
          <li>
            <a href="/" className="menu-item">Missions</a>
          </li>
          <li>
            <a href="/" className="menu-item">My Profile</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
