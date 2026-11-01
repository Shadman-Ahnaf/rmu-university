import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import AcademicSection from "../sections/AcademicSection";
import ResearchSection from "../sections/ResearchSection";
import AffiliatedSection from "../sections/AffiliatedSection";
import NewsSection from "../sections/NewsSection";

export default function HomePage() {
  return (
    <main id="home" className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <AcademicSection />
      <ResearchSection />
      <AffiliatedSection />
      <NewsSection />
    </main>
  );
}