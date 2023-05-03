import "./initiative-section.css";
import React from 'react';
import InitiativeCard from '../initiativeCard';
import { useState , useEffect} from 'react';
import { Link } from "react-router-dom";

const InitiativeSection = () => {
  const [initiativelist, setInitiativelist] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/initiativeUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          window.alert("Could not get initiatives");
          console.log("Error");
        }
      })
      .then((data) => {
        setInitiativelist(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const slicedArray = initiativelist.slice(0, 3);
console.log(111,slicedArray)
  return (
    <div className="frame-parent3">

      <div className="donate-to-one-of-these-great-i-wrapper">
        <div className="donate-to-one">
          Donate to one of these great Initiatives today
        </div>
      </div>
            
      <div className="frame-parent4">
        <InitiativeCard initiativelist={slicedArray} />

{/*
        <div className="image-7-parent4">
          <img className="image-7-icon6" alt="" src="../image-76@2x.png" />
          <div className="overview-of-the-initiative-for-parent1">
            <div className="overview-of-the6">
              Overview of the Initiative for the users to get an idea
            </div>
            <img className="ellipse-icon" alt="" src="../ellipse-6.svg" />
            <div className="name-of-person3">Name of Person</div>
            <button className="rectangle-wrapper4">
              <div className="group-child3" />
            </button>
            <button className="find-out-more6">Find out more</button>
            <b className="title-of-the6">Title of the Initiative</b>
          </div>
        </div>
        <div className="image-7-parent5">
          <img className="image-7-icon7" alt="" src="../image-77@2x.png" />
          <div className="overview-of-the-initiative-for-parent2">
            <div className="overview-of-the6">
              Overview of the Initiative for the users to get an idea
            </div>
            <img className="ellipse-icon" alt="" src="../ellipse-6.svg" />
            <div className="name-of-person3">Name of Person</div>
            <button className="rectangle-wrapper4">
              <div className="group-child3" />
            </button>
            <button className="find-out-more6">Find out more</button>
            <b className="title-of-the6">Title of the Initiative</b>
          </div>
        </div>
        <div className="image-7-parent6">
          <img className="image-7-icon7" alt="" src="../image-78@2x.png" />
          <div className="overview-of-the-initiative-for-parent3">
            <div className="overview-of-the6">
              Overview of the Initiative for the users to get an idea
            </div>
            <img className="ellipse-icon" alt="" src="../ellipse-62.svg" />
            <div className="name-of-person3">Name of Person</div>
            <button className="rectangle-wrapper4">
              <div className="group-child3" />
            </button>
            <button className="find-out-more6">Find out more</button>
            <b className="title-of-the6">Title of the Initiative</b>
          </div>
        </div>*/}
        <Link to ="/InitiativeList" ><button className="see-more2">See More</button></Link>
      </div>
    </div>
  );
};

export default InitiativeSection;
