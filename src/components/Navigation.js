import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/bookatable">Book a table</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact us</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin">Admin Page</Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;
