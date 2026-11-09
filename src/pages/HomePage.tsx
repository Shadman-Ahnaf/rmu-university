
import HeroSection from "../sections/HeroSection";
import UpdatesSection from "../sections/UpdatesSection";
import AcademicSection from "../sections/AcademicSection";
import CampusLifeSection from "../sections/CampusLifeSection";
import GallerySection from "../sections/GallerySection";
import AtGlanceSection from "../sections/AtGlanceSection";
import ResearchSection from "../sections/ResearchSection";
import AnnualPerformanceSection from "../sections/AnnualPerformanceSection";
import CampusSection from "../sections/CampusSection";
import LeadershipSection from "../sections/LeadershipSection";
export default function HomePage() {
  return (
    <main id="home" className="min-h-screen bg-white">
      <HeroSection />
      <CampusSection />
      <LeadershipSection />
      <UpdatesSection />
      <CampusLifeSection />
      <GallerySection />
      <ResearchSection />
      <AtGlanceSection />
      <AnnualPerformanceSection />
      
    </main>
  );
}
