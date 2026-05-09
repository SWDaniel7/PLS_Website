import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import ParentPainSection from "@/components/ParentPainSection";
import ParentAnxietyInsightSection from "@/components/ParentAnxietyInsightSection";
import CoreProblemSection from "@/components/CoreProblemSection";
import CoreProblemDarkSection from "@/components/CoreProblemDarkSection";
import RIIEFrameworkSection from "@/components/RIIEFrameworkSection";
import RIIEMappingSection from "@/components/RIIEMappingSection";
import CaseStudySection from "@/components/CaseStudySection";
import PLSApproachSection from "@/components/PLSApproachSection";
import ClosingQuoteSection from "@/components/ClosingQuoteSection";
import FacultySection from "@/components/FacultySection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollReveal />
      <Header />
      <Hero />
      <ParentPainSection />
      <ParentAnxietyInsightSection />
      <CoreProblemSection />
      <CoreProblemDarkSection />
      <RIIEFrameworkSection />
      <RIIEMappingSection />
      <CaseStudySection />
      <PLSApproachSection />
      <ClosingQuoteSection />
      <FacultySection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
