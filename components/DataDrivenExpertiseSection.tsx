"use client";

const riieBars = [
  { label: "R", caption: "Recognition", value: 82 },
  { label: "I", caption: "Inference", value: 71 },
  { label: "I", caption: "Integration", value: 76 },
  { label: "E", caption: "Expression", value: 64 },
];

const sparklinePoints = [
  { x: 0, y: 32 },
  { x: 30, y: 28 },
  { x: 60, y: 24 },
  { x: 90, y: 22 },
  { x: 120, y: 16 },
  { x: 150, y: 18 },
  { x: 180, y: 11 },
  { x: 210, y: 8 },
  { x: 240, y: 5 },
];
const sparklinePath = sparklinePoints.map((p) => `${p.x},${p.y}`).join(" ");
const sparklineFill = `M0,40 L${sparklinePath
  .split(" ")
  .join(" L")} L240,40 Z`;

export default function DataDrivenExpertiseSection() {
  return (
    <section
      className="section-padding py-16 md:py-24 lg:py-[100px]"
      style={{ backgroundColor: "var(--bg-canvas)" }}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="section-kicker reveal-body mb-4">
              Data-Driven Expertise
            </span>
            <h2
              className="reveal-title mb-8 text-3xl font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--text-ink)] md:text-5xl"
              style={{ wordBreak: "keep-all" }}
            >
              PLS영재교육의 경쟁력은
              <br />
              <span className="highlight highlight-light">
                데이터에 기반한 &apos;원서 중심 맞춤 전략&apos;
              </span>
              에 있습니다.
            </h2>

            <p
              className="reveal-body mb-5 text-base leading-relaxed text-[var(--text-slate)] md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              PLS영재교육의 모든 강사진은 유아기 언어 발달과 영어 교수법, 그리고{" "}
              <strong>원서 기반 문해력 교육에 정통한 전문가</strong>들로 구성되어
              있습니다.
            </p>
            <p
              className="reveal-body mb-5 text-base leading-relaxed text-[var(--text-slate)] md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              단순한 영어 수업이 아닌, CCSS(미국 공통 교과 기준)와 IB
              커리큘럼 표준처럼 검증된 시스템 커리큘럼을 분석 기준으로 삼아
              Recognition-Inference-Integration-Expression으로 이어지는
              통합사고형 원서수업을 체계적으로 설계합니다.
            </p>
            <p
              className="reveal-body mb-0 text-base leading-relaxed text-[var(--text-slate)] md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              또한 영어권에서 검증된 원서수업 교수법, 국내외 학술 연구, 축적된
              학습 데이터를 통합 분석하여 아동 인지발달·언어발달에 근거한
              언어·사고 반응 패턴을 정밀 모델링합니다. 이 분석 체계를 기반으로{" "}
              <strong>국내 유일의 통합사고형 원서수업 모델</strong>을 운영하며,{" "}
              <strong>
                지금 내 아이에게 가장 적합한 원서와 교수 전략을 제공합니다.
              </strong>
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="reveal-body relative">
              {/* Decorative dot grid backdrop */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-4 hidden h-32 w-32 opacity-50 md:block"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(18, 44, 81, 0.18) 1px, transparent 1.4px)",
                  backgroundSize: "12px 12px",
                  maskImage:
                    "radial-gradient(circle at top right, black 30%, transparent 75%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at top right, black 30%, transparent 75%)",
                }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-4 -left-4 hidden h-32 w-32 opacity-50 md:block"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(212, 180, 131, 0.32) 1px, transparent 1.4px)",
                  backgroundSize: "12px 12px",
                  maskImage:
                    "radial-gradient(circle at bottom left, black 25%, transparent 70%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at bottom left, black 25%, transparent 70%)",
                }}
              />

              {/* Dashboard card stack */}
              <div className="relative rounded-3xl border border-[var(--border-hairline)] bg-[var(--bg-surface-soft)] p-4 shadow-[0_18px_50px_rgba(18,44,81,0.10)] md:p-5">
                <div className="mb-4 flex items-center justify-between px-1">
                  <p className="mb-0 text-[11px] font-semibold tracking-[0.18em] text-[var(--text-steel)] uppercase">
                    Student Insight Dashboard
                  </p>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="status-dot" />
                    <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[var(--accent-gold)]">
                      Live · 2026
                    </span>
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Card 1 — RIIE Skills Profile (vertical bars) */}
                  <div className="group relative -translate-y-0 rounded-2xl bg-white p-4 shadow-[0_4px_14px_rgba(18,44,81,0.04)] ring-1 ring-[var(--border-hairline)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(18,44,81,0.08)]">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="mb-0 text-[12.5px] font-semibold text-[var(--text-ink)]">
                        RIIE Skills Profile
                      </p>
                      <span className="text-[10px] tabular-nums text-[var(--text-steel)]">
                        Cohort avg
                      </span>
                    </div>
                    <div className="flex h-[88px] items-end gap-2.5">
                      {riieBars.map((bar, idx) => (
                        <div
                          key={`${bar.label}-${idx}`}
                          className="flex flex-1 flex-col items-center gap-1.5"
                        >
                          <div className="relative flex w-full flex-1 items-end overflow-hidden rounded-md bg-[var(--bg-surface-soft)]">
                            <div
                              className="w-full rounded-md transition-all duration-700 ease-out"
                              style={{
                                height: `${bar.value}%`,
                                background:
                                  idx === 1
                                    ? "linear-gradient(180deg, var(--accent-gold) 0%, #C9A266 100%)"
                                    : "linear-gradient(180deg, #1B3056 0%, #0C1D38 100%)",
                              }}
                            />
                          </div>
                          <span className="text-[10.5px] font-semibold tabular-nums tracking-tight text-[var(--text-steel)]">
                            {bar.value}
                          </span>
                          <span className="text-[11px] font-semibold text-[var(--primary-navy)]">
                            {bar.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card 2 — Reading Level Index KPI + Sparkline */}
                  <div className="group relative rounded-2xl bg-white p-4 shadow-[0_4px_14px_rgba(18,44,81,0.04)] ring-1 ring-[var(--border-hairline)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(18,44,81,0.08)]">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="mb-0 text-[12.5px] font-semibold text-[var(--text-ink)]">
                        Reading Level Index
                      </p>
                      <span className="text-[10px] text-[var(--text-steel)]">
                        Last 6 months
                      </span>
                    </div>
                    <div className="mb-2 flex items-baseline gap-2">
                      <span
                        className="text-[26px] font-semibold leading-none tabular-nums text-[var(--primary-navy)]"
                        style={{ fontFeatureSettings: "'tnum'" }}
                      >
                        G4.1
                      </span>
                      <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[var(--accent-gold)]">
                        +0.9
                        <svg
                          aria-hidden
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                        >
                          <path
                            d="M4.5 1.5L7.5 5.5H1.5L4.5 1.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </div>
                    <svg
                      viewBox="0 0 240 40"
                      preserveAspectRatio="none"
                      className="h-10 w-full"
                      aria-hidden
                    >
                      <defs>
                        <linearGradient
                          id="sparkFill"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#1B3056" stopOpacity="0.18" />
                          <stop offset="100%" stopColor="#1B3056" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d={sparklineFill} fill="url(#sparkFill)" />
                      <polyline
                        fill="none"
                        stroke="var(--primary-navy)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={sparklinePath}
                      />
                      {sparklinePoints.map((p, i) => (
                        <circle
                          key={i}
                          cx={p.x}
                          cy={p.y}
                          r={i === sparklinePoints.length - 1 ? 2.5 : 1.4}
                          fill={
                            i === sparklinePoints.length - 1
                              ? "var(--accent-gold)"
                              : "var(--primary-navy)"
                          }
                        />
                      ))}
                    </svg>
                  </div>

                  {/* Card 3 — Pattern Analysis */}
                  <div className="group relative rounded-2xl bg-white p-4 shadow-[0_4px_14px_rgba(18,44,81,0.04)] ring-1 ring-[var(--border-hairline)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(18,44,81,0.08)]">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="mb-0 text-[12.5px] font-semibold text-[var(--text-ink)]">
                        Pattern Analysis
                      </p>
                      <span className="text-[10px] tracking-[0.14em] uppercase text-[var(--accent-gold)]">
                        Auto
                      </span>
                    </div>
                    <p
                      className="mb-3 text-[12.5px] leading-[1.65] text-[var(--text-slate)]"
                      style={{ wordBreak: "keep-all" }}
                    >
                      영역별 정량 데이터와 정성 관찰 데이터를 함께 해석해, 현재
                      위치와 다음 성장 방향을 한 화면에서 확인할 수 있도록
                      설계됩니다.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {[
                        "Inference 강세",
                        "Detail 보강",
                        "Sequence 안정",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--border-hairline)] bg-[var(--bg-surface-soft)] px-2 py-0.5 text-[10.5px] font-medium text-[var(--text-charcoal)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between px-1 text-[10px] tracking-[0.12em] uppercase text-[var(--text-steel)]">
                  <span>Source · Cohort 2026</span>
                  <span className="tabular-nums">N = 127</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
