"use client";

import {
  Activity,
  BarChart3,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

interface ProcessCard {
  number: string;
  badge: string;
  icon: LucideIcon;
  title: string;
  body: string;
  keywords: string[];
}

const cards: ProcessCard[] = [
  {
    number: "01",
    badge: "Diagnostic",
    icon: Activity,
    title: "구조적 진단 — 아이의 사고 흐름을 '구조'로 읽습니다.",
    body: "상담 후 트라이얼 클래스를 통해 Recognition-Inference-Integration-Expression 네 영역별 사고 단계를 분석합니다. 단순 점수가 아닌, 어디서 사고가 멈추는지 명확히 파악합니다.",
    keywords: ["트라이얼 클래스", "RIIE 4영역 분석", "사고 단계 파악"],
  },
  {
    number: "02",
    badge: "Personalized Design",
    icon: Users,
    title: "맞춤 설계 — 아이의 발달 시점에 맞는 커리큘럼을 구성합니다.",
    body: "RIIE 진단 결과 기반으로 상황에 맞는 2인 혹은 4인 소규모 맞춤 그룹으로 아이별 성장 방향을 설계합니다. 인지 발달과 언어 발달의 균형을 고려한 통합 커리큘럼을 구성하며, 사고형 문해력의 누적 성장을 목표로 지도합니다.",
    keywords: ["2인/4인 소규모", "맞춤 설계", "통합 커리큘럼"],
  },
  {
    number: "03",
    badge: "Feedback Report",
    icon: BarChart3,
    title: "피드백 리포트 — RIIE 평가 구조에 맞춘 성장 리포트를 제공합니다.",
    body: "RIIE 프레임워크 기준으로 영역별 성장 및 변화 추이를 분석한 리포트를 제공합니다. 각 영역별 정량(점수) + 정성(사고 특성) 분석은 물론, 라이팅 피드백까지 함께 제공해 다음 학습 방향을 명확히 제시합니다.",
    keywords: ["피드백 리포트", "영역별 분석", "라이팅 피드백"],
  },
  {
    number: "04",
    badge: "Long-term Growth",
    icon: TrendingUp,
    title: "확장력 — 예비초 이후에도 사고형 문해력으로 성장합니다.",
    body: "예비초 어학원 대비를 넘어 초등 문해력·사고력 기반으로 자연스럽게 확장합니다. 읽기-이해-사고-표현의 유기적 연결을 통해 장기 학습의 토대를 형성합니다.",
    keywords: ["예비초 이후", "초등 문해력", "장기 학습 토대"],
  },
];

export default function PLSApproachSection() {
  return (
    <section
      id="approach"
      className="section-padding py-16 md:py-24 lg:py-[100px]"
      style={{ backgroundColor: "var(--bg-surface-soft)" }}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="section-kicker reveal-body mb-5">
            The PLS영재교육 Approach
          </span>
          <h2
            className="reveal-title text-[26px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--text-ink)] md:text-[44px]"
            style={{ wordBreak: "keep-all" }}
          >
            아이의 변화는 곧,
            <br />
            <span className="highlight highlight-light">
              부모의 불안이 사라지는 순간입니다.
            </span>
          </h2>
          <p
            className="reveal-body mx-auto mt-5 max-w-4xl text-base leading-relaxed text-[var(--text-slate)] md:text-lg"
            style={{ wordBreak: "keep-all" }}
          >
            PLS영재교육의 수업은 초등 어학원 반배치 결과와 언어 실력 향상은
            물론, 부모님이 가장 알고 싶었던 &quot;우리 아이의 현재 위치와 성장
            방향&quot;을 명확히 보여드립니다.
          </p>
        </div>

        <div className="reveal-body grid gap-5 md:gap-6 lg:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-7 pb-8 pt-9 shadow-[0_6px_18px_rgba(18,44,81,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent-gold)]/45 hover:shadow-[0_22px_50px_rgba(18,44,81,0.12)] md:px-10 md:pb-10 md:pt-11"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-0 right-0 top-0 h-[3px]"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent-gold) 0%, #E1C99A 55%, transparent 100%)",
                  }}
                />

                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(212,180,131,0.18) 0%, transparent 70%)",
                  }}
                />

                <div className="relative mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-[var(--text-steel)] uppercase">
                      <span
                        aria-hidden
                        className="inline-block h-px w-6"
                        style={{ background: "var(--accent-gold)" }}
                      />
                      Step {card.number} · {card.badge}
                    </p>
                    <span
                      className="block text-[40px] font-semibold leading-none tracking-tight text-[var(--accent-gold)] md:text-[48px]"
                      style={{ fontFeatureSettings: "'tnum'" }}
                    >
                      {card.number}
                    </span>
                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--bg-surface-soft)] ring-1 ring-[var(--border-hairline)] transition-all duration-500 group-hover:rotate-[6deg] group-hover:scale-110 group-hover:bg-[var(--primary-navy)] group-hover:ring-[var(--primary-navy)] md:h-14 md:w-14">
                    <Icon
                      className="h-5 w-5 text-[var(--primary-navy)] transition-colors duration-500 group-hover:text-[var(--accent-gold)] md:h-6 md:w-6"
                      strokeWidth={1.7}
                    />
                  </span>
                </div>

                <h3
                  className="relative mb-5 border-b border-[var(--border-hairline)] pb-5 text-[22px] font-semibold leading-[1.4] tracking-[-0.01em] text-[var(--text-ink)] md:text-[26px]"
                  style={{ wordBreak: "keep-all" }}
                >
                  {card.title}
                </h3>

                <p
                  className="relative mb-6 text-[15px] leading-[1.75] text-[var(--text-slate)] md:text-[16px]"
                  style={{ wordBreak: "keep-all" }}
                >
                  {card.body}
                </p>

                <div className="relative mt-auto flex flex-wrap gap-1.5">
                  {card.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full border border-[var(--border-hairline)] bg-[var(--bg-surface-soft)] px-2.5 py-1 text-[12px] font-medium text-[var(--text-slate)] transition-colors duration-300 group-hover:border-[var(--accent-gold)]/45 group-hover:bg-white group-hover:text-[var(--primary-navy)]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
