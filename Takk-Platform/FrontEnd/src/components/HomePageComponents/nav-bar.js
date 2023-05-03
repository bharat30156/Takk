import "./nav-bar.css";
import { Link } from "react-router-dom";
import React , { useState , useEffect} from 'react';
import {  ACCESS_TOKEN, USER_NAME } from '../../constants';

const NavBar = () => {  
  const [originalformData, setOriginalFormData] = useState({
    id:-1,
    nameofInitiative: "",
    descriptionOfInitiative: "",
    shortdescriptionOfInitiative: "",
    imagesAndVideo: "",
    country: "UK",
    region: "AVON",
    target: null,
    accountName: "",    
    accountNumber: null,
    sortCode: null,
    paypalID: ""
  });

  return (
    <div className="takk-logo-yellow-2-parent">
       <Link to="/" >
          <img
            className="takk-logo-yellow-2"
            alt=""
            src="../takk-logo--yellow-2@2x.png"
          />
        </Link>

      <div className="frame-wrapper">
        <div className="frame-div" />
      </div>
      
     
      
      <div className="get-fundraise-parent">
      <Link to ="/InitiativeCreateEdit" state = {{originalformData: originalformData}}><button className="get-fundraise">Fundraise</button></Link>
      <Link to ="/InitiativeList"><button className="donate">Donate</button></Link>
       <Link to ="/CommunityList"><button className="community">Communities</button></Link>
       
      </div>


      {  !localStorage.getItem(ACCESS_TOKEN) ? (
        <> 
          <button className="group-button">
            <button className="rectangle-button" />
          </button>
          <Link to ="/loginpage" ><button className="loginpage">LOGIN</button></Link>      
          <Link to ="/signup"><button className="sign-up">SIGN UP</button></Link>
        </>
      ) : (<>
      
        <div className="nameOfUser">{localStorage.getItem(USER_NAME)}</div>
        <Link to = '/PersonalDashBoard'>
              <img  
                className="communityPageEditAndCreChild"
                alt=""
                src="../ellipse-4@2x.png"
              />
              </Link>
              <div className="ellipseParent">
                <img className="groupChild" alt="" src="../ellipse-5.svg" />
                <div className="div">3</div>
              </div>
              
          <button className="log_out" onClick={handlelogout}>LOGOUT</button> 
        </>
      )} 

      <input className="frame-input" type="text" placeholder="Search" />
      <div className="image-6-wrapper">
        <img className="image-6-icon" alt="" src="../image-6@2x.png" />
      </div>

    </div>
  );

  function handlelogout(){
    localStorage.clear()
    window.location.href = "/"
  }

};

export default NavBar;
