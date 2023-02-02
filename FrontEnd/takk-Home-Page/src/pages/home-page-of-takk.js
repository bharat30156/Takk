import AlertBar from "../components/alert-bar";
import NavBar from "../components/nav-bar";
import ImageVideo from "../components/image-video";
import CommunitySection from "../components/community-section";
import PartnersSection from "../components/partners-section";
import FooterScetion from "../components/footer-scetion";
import InitiativeSection from "../components/initiative-section";
import StorySection from "../components/story-section";
import "./home-page-of-takk.css";

const HomePageOfTakk = () => {
  return (
    <main className="home-page-of-takk" id="home-page">
      <AlertBar />
      <NavBar />
      <ImageVideo />
      <div className="home-page-of-takk-inner">
        <div className="frame-parent">
          <div className="image-7-parent">
            <img className="image-7-icon" alt="" src="../image-7@2x.png" />
            <div className="overview-of-the-initiative-for-parent">
              <div className="overview-of-the">
                Overview of the Initiative for the users to get an idea
              </div>
              <img className="frame-child" alt="" />
              <div className="name-of-person">Name of Person</div>
              <div className="rectangle-wrapper">
                <div className="group-child" />
              </div>
              <div className="find-out-more">Find out more</div>
              <b className="title-of-the">Title of the Initiative</b>
            </div>
          </div>
          <div className="image-7-group">
            <img className="image-7-icon" alt="" src="../image-7@2x.png" />
            <div className="overview-of-the-initiative-for-group">
              <div className="overview-of-the">
                Overview of the Initiative for the users to get an idea
              </div>
              <img className="frame-child" alt="" />
              <div className="name-of-person">Name of Person</div>
              <div className="rectangle-wrapper">
                <button className="group-item" />
              </div>
              <div className="find-out-more">Find out more</div>
              <b className="title-of-the">Title of the Initiative</b>
            </div>
          </div>
          <div className="image-7-container">
            <img className="image-7-icon" alt="" src="../image-7@2x.png" />
            <div className="overview-of-the-initiative-for-parent">
              <div className="overview-of-the">
                Overview of the Initiative for the users to get an idea
              </div>
              <img className="frame-child" alt="" />
              <div className="name-of-person">Name of Person</div>
              <div className="rectangle-wrapper">
                <div className="group-child" />
              </div>
              <div className="find-out-more">Find out more</div>
              <b className="title-of-the">Title of the Initiative</b>
            </div>
          </div>
          <div className="see-more">See More</div>
        </div>
      </div>
      <CommunitySection />
      <PartnersSection />
      <FooterScetion />
      <InitiativeSection />
      <StorySection />
    </main>
  );
};

export default HomePageOfTakk;
