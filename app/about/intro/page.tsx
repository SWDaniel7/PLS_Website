import type { Metadata } from "next";
import Image from "next/image";
import { absoluteUrl } from "@/lib/site-url";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "기관소개 | 설립이념 · 교육철학",
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
    title: "기관소개 | 설립이념 · 교육철학 | PLS영재교육",
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
    title: "기관소개 | 설립이념 · 교육철학 | PLS영재교육",
    description:
      "PLS영재교육 기관소개 페이지입니다. 설립이념과 교육철학, 원서 기반 통합사고형 문해력 수업 구조를 확인할 수 있습니다.",
    images: ["/images/hero-main-campus.png"],
  },
  alternates: {
    canonical: "/about/intro",
  },
};

const literacyFlow = [
  { label: "읽기", value: 82 },
  { label: "이해", value: 76 },
  { label: "추론", value: 79 },
  { label: "표현", value: 74 },
];

function SectionVisualCard({
  variant,
}: {
  variant: "philosophy" | "role";
}) {
  if (variant === "philosophy") {
    return (
      <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--border-hairline)] bg-white p-5 shadow-[0_10px_30px_rgba(18,44,81,0.08)] md:mt-12 md:p-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="mb-0 text-[11px] font-semibold tracking-[0.18em] text-[var(--text-steel)] uppercase">
            Core Literacy Design
          </p>
          <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[var(--accent-gold)]">
            RIIE
          </span>
        </div>
        <div className="mb-5 grid grid-cols-4 gap-2">
          {literacyFlow.map((item, idx) => (
            <div
              key={item.label}
              className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface-soft)] p-2.5 text-center"
            >
              <p className="mb-1 text-[10px] font-medium text-[var(--text-steel)]">
                {item.label}
              </p>
              <p className="mb-0 text-[16px] font-semibold text-[var(--primary-navy)]">
                {item.value}
              </p>
              <div
                className="mx-auto mt-2 h-1 w-9 rounded-full"
                style={{
                  background:
                    idx % 2 === 0
                      ? "linear-gradient(90deg,#1B3056,#294A83)"
                      : "linear-gradient(90deg,#D4B483,#C39A62)",
                }}
              />
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface-soft)] p-4">
          <p className="mb-2 text-[12px] font-semibold text-[var(--text-ink)]">
            발달 단계별 수업 설계
          </p>
          <div className="space-y-2.5">
            {[
              "5~6세 · 언어 구조 토대 설계",
              "7세 · 겉읽기에서 이해 기반 읽기로 전환",
              "8세+ · 추론·논리 구성·자기표현 확장",
            ].map((line) => (
              <div key={line} className="flex items-center gap-2.5">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "var(--accent-gold)" }}
                />
                <p className="mb-0 text-[12.5px] text-[var(--text-charcoal)]">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--border-hairline)] bg-white p-5 shadow-[0_10px_30px_rgba(18,44,81,0.08)] md:mt-12 md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="mb-0 text-[11px] font-semibold tracking-[0.18em] text-[var(--text-steel)] uppercase">
          Learning Growth Snapshot
        </p>
        <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[var(--accent-gold)]">
          Live
        </span>
      </div>
      <div className="mb-5 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface-soft)] p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="mb-0 text-[12px] font-semibold text-[var(--text-ink)]">
            레테 핵심 역량 점검
          </p>
          <p className="mb-0 text-[10px] text-[var(--text-steel)]">최근 12주</p>
        </div>
        <div className="h-16 w-full">
          <svg viewBox="0 0 240 64" className="h-full w-full" aria-hidden>
            <defs>
              <linearGradient id="introGrowthFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1B3056" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#1B3056" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 58 L0 50 L40 48 L80 45 L120 43 L160 38 L200 35 L240 32 L240 58 Z"
              fill="url(#introGrowthFill)"
            />
            <polyline
              points="0,50 40,48 80,45 120,43 160,38 200,35 240,32"
              fill="none"
              stroke="var(--primary-navy)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="240" cy="32" r="2.8" fill="var(--accent-gold)" />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "문해력", value: "+18%" },
          { label: "추론력", value: "+14%" },
          { label: "표현력", value: "+21%" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface-soft)] px-3 py-2.5 text-center"
          >
            <p className="mb-1 text-[10px] text-[var(--text-steel)]">{kpi.label}</p>
            <p className="mb-0 text-[14px] font-semibold text-[var(--primary-navy)]">
              {kpi.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function IntroPage() {
  const introSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "기관소개 | 설립이념 · 교육철학 | PLS영재교육",
        description:
          "PLS영재교육 기관소개 페이지입니다. 설립이념과 교육철학, 원서 기반 통합사고형 문해력 수업 구조를 확인할 수 있습니다.",
        url: absoluteUrl("/about/intro"),
        inLanguage: "ko-KR",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "홈",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "기관소개",
            item: absoluteUrl("/about/intro"),
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

      <section className="relative overflow-hidden pt-32 md:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/about-intro-hero-bg.png"
            alt=""
            fill
            className="object-cover"
            priority
            aria-hidden
          />
          
        </div>
        <div className="relative mx-auto max-w-[1200px] px-6 pb-28 text-center md:px-8 md:pb-32">
          <div className="mx-auto inline-block rounded-2xl border border-white/70 bg-white/72 px-6 py-5 backdrop-blur-[1.5px]">
          <p className="mb-3 text-[12px] font-semibold tracking-[0.22em] text-[var(--primary-navy)]/70 uppercase">
            About PLS
          </p>
          <h1
            className="mx-auto max-w-4xl text-[44px] font-semibold leading-[1.15] tracking-[-0.03em] text-[var(--primary-navy)] md:text-[72px]"
            style={{ wordBreak: "keep-all" }}
          >
            기관소개
          </h1>
          <p className="mt-4 text-[14px] text-[var(--primary-navy)]/65 md:text-[15px]">
            Phillips Academy of Little Scholars
          </p>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-16 md:pt-10 md:pb-24">
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

            <div className="relative overflow-hidden text-[17px] leading-[1.7] text-[var(--text-charcoal)] md:text-[18px]">
              <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 h-[62%] w-[84%] -translate-x-1/2 -translate-y-1/2 opacity-[0.045]">
                  <Image
                    src="/images/faculty-bg-logo.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="relative z-[1]">
                <p className="mb-8 text-[20px] leading-[1.7] font-semibold tracking-[-0.01em] text-[var(--primary-navy)] md:text-[20px]">
                  PLS(Phillips Academy of Little Scholars)영재교육은 북미·영미권에서 가장 효과적인 언어 발달 방식으로 인정받는 원서 기반 문해력 교육(Novel-based Literacy)을 한국 아동의 발달 단계와 학습 환경에 맞게 재구성한 국내 유일 &apos;통합사고형 원서수업&apos; 전문기관입니다.
                </p>
                <p className="mb-8">
                  북미·영미권에서는 한 권의 원서를 깊이 읽고, 이야기 구조를 이해하며, 감정·의도·상황을 추론하고, 그 이해를 말과 글로 표현하는 과정이 어린이 문해력 교육의 핵심으로 자리 잡아 있습니다. PLS영재교육은 이 교육 철학을 기반으로, 5세부터 초등 저학년까지 각 발달 단계에 맞는 사고 구조를 설계합니다. 단순한 영어 학습을 넘어 사고력·표현력·배경지식이 함께 자라는 구조를 만드는 것이 목표입니다.
                </p>
                <p className="mb-8">
                  아이의 언어 발달에는 놓치면 안 되는 시기가 있습니다. 5세 후반~6세는 언어 구조의 토대를 설계하는 결정적 시기이고, 7세는 겉읽기에서 이해 기반 읽기로 전환되는 분기점입니다. 초등 입학 이후(8세 이후)에는 단순 독해를 넘어 추론·논리 구성·자기표현 역량이 본격적으로 요구됩니다. PLS영재교육은 이 각각의 시기에 맞는 원서 선택과 수업 설계로, 아이의 사고가 단계적으로 확장될 수 있도록 지원합니다.
                </p>
                <p className="mb-8">
                  이를 위해 PLS영재교육은 읽기 → 이해 → 사고 → 표현으로 이어지는 언어·사고 흐름을 통합적으로 설계하고, 자체 개발한 RIIE 프레임워크(Recognition-Inference-Integration-Expression)로 아이의 사고 흐름을 정밀하게 진단합니다. 아이가 어디에서 막히는지, 이해가 어느 단계에서 끊어지는지 정확하게 파악하고, 그 지점을 기반으로 <strong className="font-semibold text-[var(--primary-navy)]">원서 선택·질문 전략·사고 확장·라이팅 피드백까지 모두 맞춤 설계</strong>합니다. 이러한 과정은 단순한 문제풀이로는 도달할 수 없는, 구조적 성장의 기반을 마련합니다.
                </p>
                <p className="mb-8">
                  PLS영재교육이 추구하는 방식은 많은 선택지 중 하나의 방법이 아닙니다. 초등 어학원 레테가 실제로 평가하는 것은 단순한 영어 실력이 아니라 문해력·추론력·사고 연결력·표현력이며, 초등 입학 이후 내신과 수능 영어 역시 같은 방향으로 설계되고 있습니다. 이 능력들은 문제풀이 중심 학습만으로는 형성되지 않습니다. 아이의 사고 구조를 바꿔주는 원서 기반 문해력 훈련을 통해서만 자연스럽게 계단식으로 성장하며, 그 토대는 빠를수록 단단해집니다. PLS영재교육의 접근법이 레테 준비의 가장 효과적인 방법인 동시에, 초등 이후까지 이어지는 장기 학습의 출발점이 되는 이유입니다.
                </p>
                <p className="mb-0">
                  PLS영재교육의 모든 교사진은 유아·아동 언어 발달, 영어 교수법, 원서 기반 문해 교육 전문가들로 구성되어 있으며, 수천 건의 학습 데이터와 영어권 문해교육 연구를 기반으로 아이의 성장 경로를 정교하게 모델링합니다. 이를 통해 지금 아이에게 가장 적합한 원서, 가장 효과적인 사고 유도 질문, 가장 효율적인 표현 전략을 도출해 수업에 반영합니다.
                </p>
                <SectionVisualCard variant="philosophy" />
              </div>
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

            <div className="relative overflow-hidden text-[17px] leading-[1.7] text-[var(--text-charcoal)] md:text-[18px]">
              <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 h-[62%] w-[84%] -translate-x-1/2 -translate-y-1/2 opacity-[0.045]">
                  <Image
                    src="/images/faculty-bg-logo.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="relative z-[1]">
                <p className="mb-8 text-[20px] leading-[1.7] font-semibold tracking-[-0.01em] text-[var(--primary-navy)] md:text-[20px]">
                  PLS영재교육은 유아(5세, 6세 7세)부터 초등 저학년(8세 이후)까지, 레테(예비초 레벨테스트)와 이후 초등 영어 학습에서 요구되는 문해력·추론력·사고력·표현력의 기초 구조를 완성하도록 돕는 전문 기관입니다. 단순한 영어 수업이 아니라, 아이가 읽고 이해하고 사고를 확장하며 자신의 언어로 표현하는 능력을 키우는 데 핵심적인 역할을 수행합니다.
                </p>
                <p className="mb-8">
                  우리는 진도를 보조하는 보습형 기관이 아니라, 아이의 언어·사고 구조를 설계하는 곳입니다. 문제풀이만으로는 채워지지 않는 사고의 빈칸을 원서 기반의 통합사고형 접근으로 메우며, 이 과정이 실제 레테 성취와 장기적 학습 능력의 기반이 됩니다.
                </p>
                <p className="mb-8">
                  또한 PLS영재교육은 학부모가 아이의 현재 수준과 성장 방향을 명확히 확인할 수 있도록 전문적인 진단과 개별 가이드를 제공합니다. 이는 단순 입시 정보가 아닌, 아이가 어떤 방식으로 배우고 사고하는지 이해하고 올바른 방향성을 잡도록 돕는 중요한 과정입니다.
                </p>
                <p className="mb-0">
                  PLS영재교육은 레테 대비를 부담이 아닌 아이 성장의 기회로 전환하며, 아이의 학습 능력이 본질에서부터 단단해지도록 돕는 가장 신뢰할 수 있는 교육 파트너입니다.
                </p>
                <SectionVisualCard variant="role" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
