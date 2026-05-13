import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import ParentAnxietySection from "@/components/ParentAnxietySection";
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
  title: "재원생 사례 · 초등레테 · 게이트입시",
  description:
    "PLS영재교육(PLS프렙) 재원생의 에디센·피아이(PI) 합격 사례를 확인하세요. 초등레테·게이트입시·대치프렙·서초게이트 대비 원서수업과 에세이라이팅 전문 영재교육센터입니다.",
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
    "서초게이트",
    "대치게이트",
    "에디센",
    "에디센합격",
    "피아이",
    "피아이합격",
    "에세이라이팅",
    "7세에세이",
    "챕터북",
    "초등어학원",
  ],
  openGraph: {
    title: "재원생 사례 · 초등레테 · 게이트입시 | PLS영재교육",
    description:
      "PLS영재교육(PLS프렙) 재원생의 에디센·피아이 합격 사례를 확인하세요. 초등레테·게이트입시·대치프렙·서초게이트 대비 원서수업과 에세이라이팅 전문 영재교육센터입니다.",
    images: [
      {
        url: "/images/hero-students.png",
        width: 1200,
        height: 630,
        alt: "PLS영재교육 재원생 사례 및 수업 성과",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "재원생 사례 · 초등레테 · 게이트입시 | PLS영재교육",
    description:
      "PLS영재교육(PLS프렙) 재원생의 에디센·피아이 합격 사례를 확인하세요. 초등레테·게이트입시·대치프렙·서초게이트 대비 원서수업과 에세이라이팅 전문 영재교육센터입니다.",
    images: ["/images/hero-students.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "재원생 사례 · 초등레테 · 게이트입시 | PLS영재교육",
    description:
      "PLS영재교육 재원생 사례와 RIIE 기반 원서수업 성과를 확인하세요. 초등레테·게이트입시 대비를 위한 통합사고형 문해력 수업을 제공합니다.",
    url: absoluteUrl("/"),
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
      <ParentAnxietySection />
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
