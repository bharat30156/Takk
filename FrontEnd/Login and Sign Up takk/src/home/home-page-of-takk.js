import AlertBar from "../components/alert-bar";
import NavBar from "../components/nav-bar";
import ImageVideo from "../components/image-video";
import CommunitySection from "../components/community-section";
import PartnersSection from "../components/partners-section";
import FooterScetion from "../components/footer-scetion";
import InitiativeSection from "../components/initiative-section";
import StorySection from "../components/story-section";
import "./home-page-of-takk.css";
import React from 'react';

const HomePageOfTakk = () => {
  return (
    <main className="home-page-of-takk" id="home-page">
      <ImageVideo />
      <CommunitySection />
      <PartnersSection />
      <FooterScetion />
      <InitiativeSection />
      <StorySection />
    </main>
  );
};

export default HomePageOfTakk;
