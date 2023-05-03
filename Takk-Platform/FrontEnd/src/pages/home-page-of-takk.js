import AlertBar from "../components/HomePageComponents/alert-bar";
import NavBar from "../components/HomePageComponents/nav-bar";
import ImageVideo from "../components/HomePageComponents/image-video";
import CommunitySection from "../components/HomePageComponents/community-section";
import PartnersSection from "../components/HomePageComponents/partners-section";
import FooterScetion from "../components/HomePageComponents/footer-scetion";
import InitiativeSection from "../components/HomePageComponents/initiative-section";
import StorySection from "../components/HomePageComponents/story-section";
import "./home-page-of-takk.css";
import React from 'react';

const HomePageOfTakk = () => {
  return (
    <main className="home-page-of-takk" id="home-page">
      <AlertBar />
      <NavBar />
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
