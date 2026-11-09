import { BrowserRouter, Routes, Route } from "react-router-dom";
import MedicineOverview from "./pages/departments/MedicineOverview";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import UniversityOverview from "./pages/UniversityOverview";
import NewsPage from "./pages/NewsPage";
import EventsPage from "./pages/EventsPage";
import ResearchOverview from "./pages/ResearchOverview";
import FacultyPage from "./pages/FacultyPage";
import FacultyProfilePage from "./pages/FacultyProfilePage";
function App() {
  return (
    <BrowserRouter>
      <SiteHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/university-overview" element={<UniversityOverview />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/faculty/:id" element={<FacultyProfilePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/research" element={<ResearchOverview />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/mission-vision" element={<main className="min-h-screen pt-32">Mission & Vision</main>} />
        <Route
  path="/departments/medicine"
  element={<MedicineOverview />}
/>
<Route path="/history" element={<main className="min-h-screen pt-32">History & Background</main>} />
<Route path="/campus-facilities" element={<main className="min-h-screen pt-32">Campus & Facilities</main>} />

      </Routes>

      <SiteFooter />
    </BrowserRouter>
  );
}

export default App;