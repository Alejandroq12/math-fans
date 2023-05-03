import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-name">Math Fans</h1>
      <ul className="navbar-links">
        <li><NavLink to="/" activeClassName="active-link" exact>Home</NavLink></li>
        <li><NavLink to="/calculator" activeClassName="active-link">Calculator</NavLink></li>
        <li><NavLink to="/quote" activeClassName="active-link">Quote</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
