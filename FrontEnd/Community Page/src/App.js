import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home-page-of-takk"
import MacBookPro161 from "./pages/mac-book-pro161";
import { useEffect } from "react";
import ListCommunityPage from "./pages/ListCommunityPage";
import ViewCommunityPage from "./pages/ViewCommunityPage";
import DataProvider from "./context/DataContext";

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
    <DataProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CreateEditCommunity" element={<MacBookPro161 />} />
        <Route path="/CommunityList" element={<ListCommunityPage />} />
        <Route path="/CommunityPage" element={<ViewCommunityPage />} />
      </Routes>
    </DataProvider>
  );
}
export default App;
