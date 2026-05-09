import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "PLS영재교육 | 재원생 사례 · 초등레테 · 게이트입시",
  description:
    "PLS영재교육 재원생 사례와 RIIE 기반 원서수업 성과를 확인하세요. 초등레테·게이트입시 대비를 위한 통합사고형 문해력 수업을 제공합니다.",
  keywords: [
    "PLS영재교육",
    "피엘에스영재교육",
    "PLS프렙",
    "피엘에스프렙",
    "재원생 사례",
    "게이트입시",
    "초등레테",
    "원서수업",
    "레벨테스트",
    "대치프렙",
  ],
  openGraph: {
    title: "PLS영재교육 | 재원생 사례 · 초등레테 · 게이트입시",
    description:
      "PLS영재교육 재원생 사례와 RIIE 기반 원서수업 성과를 확인하세요. 초등레테·게이트입시 대비를 위한 통합사고형 문해력 수업을 제공합니다.",
    images: [
      {
        url: "/images/hero-students.png",
        alt: "PLS영재교육 재원생 사례 및 수업 성과",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PLS영재교육 | 재원생 사례 · 초등레테 · 게이트입시",
    description:
      "PLS영재교육 재원생 사례와 RIIE 기반 원서수업 성과를 확인하세요. 초등레테·게이트입시 대비를 위한 통합사고형 문해력 수업을 제공합니다.",
    images: ["/images/hero-students.png"],
  },
};

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "PLS영재교육 | 재원생 사례 · 초등레테 · 게이트입시",
    description:
      "PLS영재교육 재원생 사례와 RIIE 기반 원서수업 성과를 확인하세요. 초등레테·게이트입시 대비를 위한 통합사고형 문해력 수업을 제공합니다.",
    url: "https://pls-website-iota.vercel.app/",
    inLanguage: "ko-KR",
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
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
