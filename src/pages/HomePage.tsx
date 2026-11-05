
import HeroSection from "../sections/HeroSection";
import UpdatesSection from "../sections/UpdatesSection";
import AcademicSection from "../sections/AcademicSection";
import ResearchSection from "../sections/ResearchSection";
import AffiliatedSection from "../sections/AffiliatedSection";

export default function HomePage() {
  return (
    <main id="home" className="min-h-screen bg-white">
      <HeroSection />
      <UpdatesSection />
      <AcademicSection />
      <ResearchSection />
      <AffiliatedSection />
    </main>
  );
}
