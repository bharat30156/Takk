import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PersonalDashBoard from "./pages/PersonalDashBoard";
import MyCommunities from "./pages/MyCommunities";
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
      <Route path="/" element={<PersonalDashBoard />} />
      <Route path="/MyCommunities" element={<MyCommunities />} />
    </Routes>
  );
}
export default App;
