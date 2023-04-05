import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ProfilePage1 from "./pages/ProfilePage1";
import ProfilePage3 from "./pages/ProfilePage3";
import ProfilePage2 from "./pages/ProfilePage2";
import { useEffect } from "react";

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
      case "/32-profile-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/32-profile-page-2":
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
    <Routes>
      <Route path="/" element={<ProfilePage1 />} />
      <Route path="/32-profile-page-3" element={<ProfilePage3 />} />
      <Route path="/32-profile-page-2" element={<ProfilePage2 />} />
    </Routes>
  );
}
export default App;
