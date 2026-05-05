"use client";

interface ProcessCard {
  number: string;
  title: string;
  body: string;
}

const cards: ProcessCard[] = [
  {
    number: "01",
    title: "구조적 진단 — 아이의 사고 흐름을 '구조'로 읽습니다.",
    body: "상담 후 트라이얼 클래스를 통해 Reading-Inference-Integration-Expression 네 영역별 사고 단계를 분석합니다. 단순 점수가 아닌, 어디서 사고가 멈추는지 명확히 파악합니다.",
  },
  {
    number: "02",
    title: "맞춤 설계 — 아이의 발달 시점에 맞는 커리큘럼을 구성합니다.",
    body: "RIIE 진단 결과 기반으로 1:2 소규모 맞춤 그룹으로 아이별 성장 방향을 설계합니다. 인지 발달과 언어 발달의 균형을 고려한 통합 커리큘럼 설계합니다. 사고형 문해력의 누적 성장을 목표로 지도합니다.",
  },
  {
    number: "03",
    title: "월간 리포트 — RIIE 평가 구조에 맞춘 성장 리포트를 제공합니다.",
    body: "매월 RIIE 프레임워크 기준으로 영역별 성장 및 변화 추적을 분석합니다. 각 영역별 정량(점수) + 정성(사고 특성) 분석을 함께 제공합니다.",
  },
  {
    number: "04",
    title: "확장력 — 예비초 이후에도 사고형 문해력으로 성장합니다.",
    body: "예비초 어학원 대비를 넘어 초등 문해력·사고력 기반으로 자연스럽게 확장합니다. 읽기-이해-사고-표현의 유기적 연결을 통해 장기 학습의 토대를 형성합니다.",
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
          <span className="section-kicker reveal-body mb-5">The PLS영재교육 Approach</span>
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
            PLS영재교육의 수업은 초등 어학원 반배치 결과와 언어 실력 향상은 물론, 부모님이 가장 알고 싶었던
            "우리 아이의 현재 위치와 성장 방향"을 명확히 보여드립니다.
          </p>
        </div>

        <div className="reveal-body grid gap-5 md:gap-6 lg:grid-cols-2">
          {cards.map((card) => {
            return (
              <article
                key={card.number}
                className="group relative flex h-full min-h-[280px] flex-col rounded-3xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-7 pb-9 pt-8 shadow-[0_6px_18px_rgba(18,44,81,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent-gold)]/45 hover:shadow-[0_18px_40px_rgba(18,44,81,0.10)] md:min-h-[320px] md:px-10 md:pb-10 md:pt-9"
              >
                <span className="mb-5 text-2xl font-semibold text-[var(--accent-gold)]">
                  {card.number}
                </span>
                <h3
                  className="mb-5 border-b border-[var(--border-hairline)] pb-4 text-[28px] font-semibold leading-[1.4] tracking-[-0.01em] text-[var(--text-ink)] md:text-[34px]"
                  style={{ wordBreak: "keep-all" }}
                >
                  {card.title}
                </h3>
                <p
                  className="mb-0 text-[16px] leading-[1.8] text-[var(--text-slate)] md:text-[18px]"
                  style={{ wordBreak: "keep-all" }}
                >
                  {card.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
