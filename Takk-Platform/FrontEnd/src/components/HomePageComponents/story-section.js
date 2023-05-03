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
        Read the strong story about Elisabeth’s journey from a double hipfracture and being bound to be in a wheelchair to walks along the beach!  When Elisabeth experienced a double hip-fracture both her, her family, and the carers was sure she would be in a wheelchair the rest of her life. But thanks to the strong community near Abforth care home and more than 50 kind donors coming together, the home was able to support Elisabeth regaining her strength and balance. Support Elisabeth and the rest of the seniors getting active again and living fuller lives!
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
