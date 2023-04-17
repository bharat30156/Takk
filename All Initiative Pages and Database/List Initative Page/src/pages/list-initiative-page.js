import AlertBar from "../components/alert-bar";
import NavBar from "../components/nav-bar";
import ImageVideo from "../components/image-video";
import CommunitySection from "../components/community-section";
import FooterScetion from "../components/footer-scetion";
import InitiativeSection from "../components/initiative-section";
import StorySection from "../components/story-section";
import MyTags from "../components/myTags"
import "./list-initiative-page.css";
import React from 'react';

const ListInitiativePage = () => {
  return (
    <main className="list-initiative-page" id="list-initiative-page">
      <AlertBar />
      <NavBar />
      <ImageVideo />
      <InitiativeSection />
      <MyTags />
      <CommunitySection />
      <StorySection />
      <FooterScetion />
    </main>
  );
};

export default ListInitiativePage;
