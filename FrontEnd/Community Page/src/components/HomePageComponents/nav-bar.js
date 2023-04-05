import "./nav-bar.css";
import { Link } from "react-router-dom";
import React from 'react';
const NavBar = () => {
  return (
    <div className="takk-logo-yellow-2-parent">
      <img
        className="takk-logo-yellow-2"
        alt=""
        src="../takk-logo--yellow-2@2x.png"
      />
      <div className="frame-wrapper">
        <div className="frame-div" />
      </div>
      <button className="group-button">
        <button className="rectangle-button" />
      </button>
      <button className="sign-up">SIGN UP</button>
      <div className="get-fundraise-parent">
        <button className="get-fundraise">Get Fundraise</button>
        <button className="donate">Donate</button>
        <Link to ="/CommunityList"><button className="community">Community</button></Link>
      </div>
      <button className="login">LOGIN</button>
      <input className="frame-input" type="text" placeholder="Search" />
      <div className="image-6-wrapper">
        <img className="image-6-icon" alt="" src="../image-6@2x.png" />
      </div>
    </div>
  );
};

export default NavBar;
