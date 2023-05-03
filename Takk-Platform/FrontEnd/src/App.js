import {
  Routes,
  Route,
  useNavigationType,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import HomePage from "./pages/home-page-of-takk"
import Login from './user/login/Login';
import Signup from './user/signup/Signup';
import QuestionsAfterSignUp from './user/signup/QuestionsAfterSignUp';

import PersonalDashBoard from './user/profile/PersonalDashBoard';

import CommunityCreateEdit from "./pages/CommunityCreateEditPage";
import CommunityListPage from "./pages/CommunityListPage";
import CommunityViewPage from "./pages/CommunityViewPage";


import InitiativeCreateEdit from "./pages/InitiativeCreateEditPage";
import InitiativeList from "./pages/InitiativeListPage";
import InitiativeView from "./pages/InitiativeViewPage";

import DataProvider from "./context/DataContext";

import NavBar from "./components/HomePageComponents/nav-bar";

import { Link } from "react-router-dom";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
    <NavBar />

    <DataProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<Login />} />
        <Route path="/signup"    element={<Signup />} />
        <Route path="/questionsaftersignup" element={<QuestionsAfterSignUp />} />

        <Route path="/PersonalDashBoard" element={<PersonalDashBoard />} />
         

        <Route path="/CommunityCreateEdit" element={<CommunityCreateEdit />} />
        <Route path="/CommunityList" element={<CommunityListPage />} />
        <Route path="/CommunityView" element={<CommunityViewPage />} />

        <Route path="/InitiativeCreateEdit" element={<InitiativeCreateEdit />} />
        <Route path="/InitiativeList" element={<InitiativeList />} />
        <Route path="/InitiativeView" element={<InitiativeView />} />
      
      </Routes>
    </DataProvider>
    </>
  );
}
export default App;
