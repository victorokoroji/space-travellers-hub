import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul className="navlist">
      <li>
        <NavLink to="/" className={(navlist) => (navlist.isActive ? 'active' : 'none')}>
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink to="/missions" className={(navlist) => (navlist.isActive ? 'active' : 'none')}>
          Missions
        </NavLink>
      </li>
      |
      <li>
        <NavLink to="/profile" className={(navlist) => (navlist.isActive ? 'active' : 'none')}>
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
