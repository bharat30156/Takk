import "./image-video.css";
import React from 'react';
import { Link } from 'react-router-dom'

const ImageVideo = () => {
  return (
    <section className="frame-group" id="video">
    {/*  <button className="start-fundraising-wrapper">
        <div className="start-fundraising">Start Fundraising</div>
      </button>
  */}
      <img className="line" alt="" src="../homepagesection1img.png"/>

      <button className="start-fundraising-container">
        <div className="start-fundraising"><Link to ="/InitiativeCreateEdit"> Start Fundraising</Link></div>
      </button>
      <div className="support-the-elderly-people-in-parent">
        <div className="support-the-elderly-container">
          <p className="support-the-elderly">{`Support the Elderly people `}</p>
          <p className="in-your-community">{`in your community `}</p>
        </div>
        <div className="start-a-fundraising">
          Start a fundraising initiative now to help elderly people local to you
          this Christmas
        </div>
</div>
    </section>
  );
};

export default ImageVideo;
