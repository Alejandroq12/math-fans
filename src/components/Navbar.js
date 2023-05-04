import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-name">Math Fans</h1>
      <ul className="navbar-links">
        <li><NavLink to="/" activeclassname="active-link" exact={true.toString()}>Home</NavLink></li>
        <li><NavLink to="/calculator" activeclassname="active-link">Calculator</NavLink></li>
        <li><NavLink to="/quote" activeclassname="active-link">Quote</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
