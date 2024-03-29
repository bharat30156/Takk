import "./alert-bar.css";
import React from 'react';
const AlertBar = () => {
  return (
    <div className="alert-message-parent">
      <b className="alert-message">New Feature Released - you can now trade your Takk points for insurance discounts</b>
      <button className="image-42-wrapper">
        <img className="image-42-icon" alt="" src="../image-42@2x.png" />
      </button>
    </div>
  );
};

export default AlertBar;
