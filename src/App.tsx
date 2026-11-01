import { BrowserRouter, Routes, Route } from "react-router-dom";

import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

import HomePage from "./pages/HomePage";
import UniversityOverview from "./pages/UniversityOverview";
import NewsPage from "./pages/NewsPage";
import EventsPage from "./pages/EventsPage";
import ResearchOverview from "./pages/ResearchOverview";

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/university-overview" element={<UniversityOverview />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/research" element={<ResearchOverview />} />
        <Route path="/mission-vision" element={<main className="min-h-screen pt-32">Mission & Vision</main>} />
<Route path="/history" element={<main className="min-h-screen pt-32">History & Background</main>} />
<Route path="/campus-facilities" element={<main className="min-h-screen pt-32">Campus & Facilities</main>} />
      </Routes>

      <SiteFooter />
    </BrowserRouter>
  );
}

export default App;