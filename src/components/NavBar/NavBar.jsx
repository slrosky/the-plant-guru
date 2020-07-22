import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  let nav = props.user ? (
    <div>
      <span className="NavBar-welcome">Welcome, {props.user.name}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="" onClick={props.handleLogout} className="NavBar-link">
        Log Out
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/plantmatches" className="NavPage-AccountLink">
        My Account
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  ) : (
    <div>
      <Link to="/login" className="NavBar-link">
        Log In
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link">
        Sign Up
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  );

  return (
    <div className="NavBar">
      <Link to="/" className="NavBar-link">
        <img src="https://i.imgur.com/dk24m4H.png"></img>
      </Link>
      {nav}
    </div>
  );
};

export default NavBar;
