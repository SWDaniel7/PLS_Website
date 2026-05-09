import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PLS영재교육 기관소개 | 설립이념 · 교육철학",
  description:
    "PLS영재교육 기관소개 페이지입니다. 설립이념과 교육철학, 원서 기반 통합사고형 문해력 수업 구조를 확인할 수 있습니다.",
  keywords: [
    "PLS영재교육",
    "피엘에스영재교육",
    "기관소개",
    "PLS프렙",
    "원서수업",
    "초등레테",
    "대치동영어",
  ],
  openGraph: {
    title: "PLS영재교육 기관소개 | 설립이념 · 교육철학",
    description:
      "PLS영재교육 기관소개 페이지입니다. 설립이념과 교육철학, 원서 기반 통합사고형 문해력 수업 구조를 확인할 수 있습니다.",
    images: [
      {
        url: "/images/hero-main-campus.png",
        alt: "PLS영재교육 기관소개",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PLS영재교육 기관소개 | 설립이념 · 교육철학",
    description:
      "PLS영재교육 기관소개 페이지입니다. 설립이념과 교육철학, 원서 기반 통합사고형 문해력 수업 구조를 확인할 수 있습니다.",
    images: ["/images/hero-main-campus.png"],
  },
};

export default function IntroPage() {
  const introSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "PLS영재교육 기관소개 | 설립이념 · 교육철학",
        description:
          "PLS영재교육 기관소개 페이지입니다. 설립이념과 교육철학, 원서 기반 통합사고형 문해력 수업 구조를 확인할 수 있습니다.",
        url: "https://pls-website-iota.vercel.app/about/intro",
        inLanguage: "ko-KR",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "홈",
            item: "https://pls-website-iota.vercel.app/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "기관소개",
            item: "https://pls-website-iota.vercel.app/about/intro",
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--bg-canvas)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(introSchema) }}
      />
      <Header />

      <section className="pt-32 md:pt-36">
        <div className="mx-auto max-w-[1200px] px-6 pb-20 text-center md:px-8 md:pb-24">
          <p className="mb-3 text-[12px] font-semibold tracking-[0.22em] text-[var(--text-steel)] uppercase">
            About PLS
          </p>
          <h1
            className="mx-auto max-w-4xl text-[44px] font-semibold leading-[1.15] tracking-[-0.03em] text-[var(--text-ink)] md:text-[72px]"
            style={{ wordBreak: "keep-all" }}
          >
            기관소개
          </h1>
          <p className="mt-4 text-[14px] text-[var(--text-steel)] md:text-[15px]">
            Phillips Academy of Little Scholars
          </p>
        </div>
        <div className="mx-auto mb-16 max-w-[1280px] px-6 md:mb-20 md:px-8">
          <div className="relative overflow-hidden rounded-[28px] ring-1 ring-[var(--border-hairline)]">
            <Image
              src="/images/hero-main-campus.png"
              alt="PLS 캠퍼스 전경"
              width={1800}
              height={980}
              className="h-[280px] w-full object-cover md:h-[420px]"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11,28,57,0.18) 0%, rgba(11,28,57,0.04) 48%, rgba(11,28,57,0.32) 100%)",
              }}
            />
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(240px,30%)_minmax(0,70%)] lg:gap-14">
            <aside className="lg:sticky lg:top-[120px] lg:self-start">
              <p className="text-[13px] font-semibold tracking-[0.18em] text-[var(--text-steel)] uppercase">
                Section 01
              </p>
              <h2
                className="mt-3 text-[30px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--text-ink)] md:text-[40px]"
                style={{ wordBreak: "keep-all" }}
              >
                PLS영재교육 설립이념
              </h2>
            </aside>

            <div className="text-[17px] leading-[1.7] text-[var(--text-charcoal)] md:text-[18px]">
              <p className="mb-8 text-[20px] leading-[1.7] font-semibold tracking-[-0.01em] text-[var(--primary-navy)] md:text-[20px]">
                PLS(Phillips Academy of Little Scholars)영재교육은 북미·영미권에서 가장 효과적인 언어 발달 방식으로 인정받는 원서 기반 문해력 교육(Novel-based Literacy)을 한국 아동의 발달 단계와 학습 환경에 맞게 재구성한 국내 유일 &apos;통합사고형 원서수업&apos; 전문기관입니다.
              </p>
              <p className="mb-8">
                북미·영미권에서는 한 권의 원서를 깊이 읽고, 이야기 구조를 이해하며, 감정·의도·상황을 추론하고, 그 이해를 말과 글로 표현하는 과정이 어린이 문해력 교육의 핵심으로 자리 잡아 있습니다. PLS는 이 교육 철학을 기반으로 아이들이 단순한 영어 학습을 넘어 사고력·표현력·배경지식까지 함께 성장할 수 있는 구조를 만듭니다.
              </p>
              <p className="mb-8">
                이를 위해 PLS영재교육은 읽기 → 이해 → 사고 → 표현으로 이어지는 언어·사고 흐름을 통합적으로 설계하고, 자체 개발한 RIIE 프레임워크(Recognition-Inference-Integration-Expression)로 아이의 사고 흐름을 정밀하게 진단합니다. 아이가 어디에서 막히는지, 이해가 어느 단계에서 끊어지는지 정확하게 파악하고 그 지점을 기반으로 <strong className="font-semibold text-[var(--primary-navy)]">원서 선택, 질문 전략, 사고 확장, 라이팅 피드백까지 모두 맞춤 설계</strong>합니다. 이러한 과정은 단순한 문제풀이로는 도달할 수 없는, 구조적 성장의 기반을 마련합니다.
              </p>
              <p className="mb-8">
                PLS영재교육이 추구하는 방식은 많은 선택지 중 하나의 방법이 아닙니다. 레테가 실제로 평가하는 것은 단순한 영어 실력이 아니라, 문해력·추론력·사고 연결력·표현력이기 때문입니다. 이 능력들은 문제풀이 중심 학습만으로는 형성되지 않으며, 아이의 사고 구조를 바꿔주는 <strong className="font-semibold text-[var(--primary-navy)]">원서 기반 문해력 훈련을 통해서만 자연스럽게 계단식으로 성장</strong>합니다. 그래서 PLS영재교육의 접근법은 7세 레테를 준비하는 가장 효과적인 지름길이자, 실제 성적 향상으로 이어지는 거의 유일한 구조적 방법이라는 점이 수년간의 데이터로 검증되었습니다.
              </p>
              <p className="mb-0">
                PLS영재교육의 모든 교사진은 유아·아동 언어 발달, 영어 교수법, 원서 기반 문해 교육 전문가들로 구성되어 있으며, 수천 건의 학습 데이터와 영어권 문해교육 연구를 기반으로 아이의 성장 경로를 정교하게 모델링합니다. 이를 통해 지금 아이에게 가장 적합한 원서, 가장 효과적인 사고 유도 질문, 가장 효율적인 표현 전략을 도출해 수업에 반영합니다.
              </p>
            </div>
          </div>

          <hr
            style={{
              border: 0,
              height: "1px",
              backgroundColor: "var(--border-hairline)",
              margin: "80px 0",
            }}
          />

          <div className="grid gap-10 lg:grid-cols-[minmax(240px,30%)_minmax(0,70%)] lg:gap-14">
            <aside className="lg:sticky lg:top-[120px] lg:self-start">
              <p className="text-[13px] font-semibold tracking-[0.18em] text-[var(--text-steel)] uppercase">
                Section 02
              </p>
              <h2
                className="mt-3 text-[30px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--text-ink)] md:text-[40px]"
                style={{ wordBreak: "keep-all" }}
              >
                PLS영재교육의 역할
              </h2>
            </aside>

            <div className="text-[17px] leading-[1.7] text-[var(--text-charcoal)] md:text-[18px]">
              <p className="mb-8 text-[20px] leading-[1.7] font-semibold tracking-[-0.01em] text-[var(--primary-navy)] md:text-[20px]">
                PLS영재교육은 6-7세 아이들이 레테(예비초 레벨테스트)와 이후 초등 영어 학습에서 요구되는 문해력·추론력·사고력·표현력의 기초 구조를 완성하도록 돕는 전문 기관입니다. 단순한 영어 수업이 아니라, 아이가 읽고 이해하고 사고를 확장하며 자신의 언어로 표현하는 능력을 키우는 데 핵심적인 역할을 수행합니다.
              </p>
              <p className="mb-8">
                우리는 진도를 보조하는 보습형 기관이 아니라, 아이의 언어·사고 구조를 설계하는 곳입니다. 문제풀이만으로는 채워지지 않는 사고의 빈칸을 원서 기반의 통합사고형 접근으로 메우며, 이 과정이 실제 레테 성취와 장기적 학습 능력의 기반이 됩니다.
              </p>
              <p className="mb-8">
                또한 PLS영재교육은 학부모가 아이의 현재 수준과 성장 방향을 명확히 확인할 수 있도록 전문적인 진단과 개별 가이드를 제공합니다. 이는 단순 입시 정보가 아닌, 아이가 어떤 방식으로 배우고 사고하는지 이해하고 올바른 방향성을 잡도록 돕는 중요한 과정입니다.
              </p>
              <p className="mb-0">
                <strong className="font-semibold text-[var(--primary-navy)]">PLS영재교육은 레테 대비를 부담이 아닌 아이 성장의 기회로 전환</strong>하며, 아이의 학습 능력이 본질에서부터 단단해지도록 돕는 가장 신뢰할 수 있는 교육 파트너입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
