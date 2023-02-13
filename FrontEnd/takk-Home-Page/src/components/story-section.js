import "./story-section.css";
import React from 'react';
const StorySection = () => {
  return (
    <div className="frame-parent5">
      <div className="image-8-parent">
        <img className="image-8-icon" alt="" src="../image-8@2x.png" />
        <div className="group-div">
          <button className="group-child6" />
        </div>
        <div className="elizabeths-story">
          <p className="elizabeths-story1">Elizabeth’s Story</p>
        </div>
        <button className="read-more">Read More</button>
        <div className="donate1">Donate</div>
        <div className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
          similique eaque delectus unde commodi assumenda, rerum, et doloribus
          nobis qui eius voluptatum vitae suscipit quos quod? Earum accusantium
          inventore, corrupti ea iure deleniti totam quia officiis suscipit
          possimus vel asperiores
        </div>
        <button className="donate-wrapper">
          <div className="donate2">Donate</div>
        </button>
      </div>
      <div className="story-of-the-day-wrapper">
        <div className="story-of-the">Story of the Day</div>
      </div>
    </div>
  );
};

export default StorySection;
