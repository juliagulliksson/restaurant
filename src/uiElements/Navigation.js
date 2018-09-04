import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="title">
        <h1>FINNE DINNE</h1>
        <ul className="navbar container">
          <li className="col-lg-4  col-md-12">
            <Link to="/">Home</Link>
          </li>
          <li className="col-lg-4  col-md-12">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="col-lg-4 col-md-12">
            <Link to="/admin">Admin Page</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
