"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const tabs = [
  {
    letter: "R",
    label: "R — Recognition",
    title: "Recognition",
    subtitle: "이야기의 구조·흐름·정보를 정확히 이해하고 기억하는 능력",
    detail:
      "리딩 지문 중 Detail / Main Idea / Sequence 의 기반이 되는 이해력을 길러,\n글의 표면 정보를 빠짐없이 정확하게 잡아내는 훈련을 합니다.",
    keywords: ["Detail", "Main Idea", "Sequence"],
  },
  {
    letter: "I",
    label: "I — Inference",
    title: "Inference",
    subtitle: "감정·원인·관계 등 보이지 않는 의미를 추론하는 능력",
    detail:
      "리딩 지문 중 Inference / Cause & Effect / Predict 에서 핵심이 되는 사고력으로,\n글에 직접 적혀있지 않은 의도와 관계를 읽어내는 단계입니다.",
    keywords: ["Inference", "Cause & Effect", "Predict"],
  },
  {
    letter: "I",
    label: "I — Integration",
    title: "Integration",
    subtitle: "읽은 내용을 자기 경험·배경지식과 연결해 사고를 확장하는 능력",
    detail:
      "리딩 지문 중 Apply / Theme / What-if 에서 요구되는 통합적 사고력으로,\n지문을 자기 세계관과 다른 텍스트로 확장해 해석하는 능력입니다.",
    keywords: ["Apply", "Theme", "What-if"],
  },
  {
    letter: "E",
    label: "E — Expression",
    title: "Expression",
    subtitle: "이해한 내용을 자신의 언어로 말·글로 표현하는 능력",
    detail:
      "Writing / Interview 에서 점수를 결정짓는 표현력으로,\n구조화된 사고를 자기 언어로 풀어내는 마지막 단계입니다.",
    keywords: ["Writing", "Interview"],
  },
];

const matteGradient =
  "linear-gradient(150deg, #1B3056 0%, #0C1D38 60%, #08152C 100%)";

export default function RIIEFrameworkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const active = tabs[activeIndex];

  const toggleMobile = (i: number) =>
    setOpenMobile((prev) => (prev === i ? null : i));

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + tabs.length) % tabs.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % tabs.length);

  return (
    <section
      id="riie"
      className="section-padding py-16 md:py-24 lg:py-[100px] scroll-mt-24 md:scroll-mt-16"
      style={{ backgroundColor: "var(--bg-canvas)" }}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <span className="section-kicker reveal-body mb-5">PLS영재교육 Methodology</span>

        <h2
          className="reveal-title mb-5 text-[26px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--text-ink)] md:mb-6 md:text-[40px]"
          style={{ wordBreak: "keep-all" }}
        >
          그래서 PLS영재교육은 아이의 문해력을 구조적으로
          <br className="hidden md:block" /> 진단하고 설계하기 위해{" "}
          <span className="highlight highlight-light">
            RIIE 프레임워크를 개발했습니다.
          </span>
        </h2>

        <p
          className="reveal-body mb-10 max-w-3xl text-base leading-relaxed text-[var(--text-slate)] md:mb-12 md:text-lg"
          style={{ wordBreak: "keep-all" }}
        >
          정확한 데이터 기반 분석으로 레테 준비에 필요한 아이의 문해력과 사고
          구조를 세밀하게 진단할 수 있는 기준을 제공합니다.
        </p>

        {/* MOBILE: stacked accordion-like cards (single-open with high contrast) */}
        <div className="reveal-body space-y-3 lg:hidden">
          {tabs.map((tab, i) => {
            const isOpen = openMobile === i;
            return (
              <div
                key={`${tab.label}-mobile`}
                className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
                  isOpen
                    ? "border-transparent text-white shadow-[0_14px_36px_rgba(11,28,57,0.28)]"
                    : "border-[var(--border-hairline)] bg-white"
                }`}
                style={isOpen ? { background: matteGradient } : undefined}
              >
                <button
                  type="button"
                  onClick={() => toggleMobile(i)}
                  className="flex w-full items-center gap-4 p-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl font-semibold transition-colors duration-300 ${
                      isOpen
                        ? "bg-white/10 text-[var(--accent-gold)] ring-1 ring-white/20"
                        : "bg-[var(--bg-surface-soft)] text-[var(--primary-navy)] ring-1 ring-[var(--border-hairline)]"
                    }`}
                  >
                    {tab.letter}
                  </span>
                  <div className="flex-1">
                    <p
                      className={`mb-0.5 text-[11px] font-semibold tracking-[0.16em] uppercase ${
                        isOpen
                          ? "text-[var(--accent-gold)]"
                          : "text-[var(--text-steel)]"
                      }`}
                    >
                      RIIE Framework
                    </p>
                    <h3
                      className={`mb-0 text-[17px] font-semibold ${
                        isOpen ? "text-white" : "text-[var(--text-ink)]"
                      }`}
                    >
                      {tab.title}
                    </h3>
                  </div>
                  <ArrowRight
                    className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-90 text-[var(--accent-gold)]"
                        : "text-[var(--text-steel)]"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-4 pb-5 pt-4 ${
                        isOpen
                          ? "border-t border-white/10"
                          : "border-t border-[var(--border-hairline)]"
                      }`}
                    >
                      <p
                        className={`mb-4 text-[15px] leading-relaxed ${
                          isOpen
                            ? "text-white/90"
                            : "text-[var(--text-charcoal)]"
                        }`}
                        style={{ wordBreak: "keep-all" }}
                      >
                        {tab.subtitle}
                      </p>
                      <div
                        className={`mb-4 rounded-xl p-4 ${
                          isOpen
                            ? "bg-white/[0.06] ring-1 ring-white/10"
                            : "bg-[var(--bg-surface-soft)]"
                        }`}
                      >
                        <p
                          className={`mb-0 whitespace-pre-line text-[14px] leading-relaxed ${
                            isOpen
                              ? "text-white/80"
                              : "text-[var(--text-slate)]"
                          }`}
                          style={{ wordBreak: "keep-all" }}
                        >
                          {tab.detail}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {tab.keywords.map((kw) => (
                          <span
                            key={kw}
                            className={`rounded-full px-3 py-1 text-[12px] font-medium ${
                              isOpen
                                ? "border border-white/25 bg-white/10 text-white"
                                : "border border-[var(--border-hairline)] bg-white text-[var(--text-slate)]"
                            }`}
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DESKTOP: tab interface */}
        <div className="hidden lg:block">
          <div className="reveal-body mb-8 flex gap-3 px-1 pb-2 pt-2">
            {tabs.map((tab, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={isActive}
                  className={`group/tab relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full border px-5 py-2.5 text-[15px] font-semibold transition-all duration-300 ease-out will-change-transform active:scale-[0.96] ${
                    isActive
                      ? "scale-[1.04] border-[var(--primary-navy)] bg-[var(--primary-navy)] text-white shadow-[0_12px_30px_rgba(11,28,57,0.28)]"
                      : "border-[var(--border-hairline)] bg-white text-[var(--text-charcoal)] hover:-translate-y-0.5 hover:border-[var(--primary-navy)]/40 hover:bg-[var(--bg-surface-soft)] hover:text-[var(--primary-navy)] hover:shadow-[0_4px_14px_rgba(18,44,81,0.08)]"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`block rounded-full transition-all duration-300 ease-out ${
                      isActive
                        ? "h-1.5 w-1.5 bg-[var(--accent-gold)] shadow-[0_0_0_3px_rgba(212,180,131,0.28)]"
                        : "h-0 w-0 opacity-0"
                    }`}
                  />
                  <span className="relative">{tab.label}</span>
                  {isActive && (
                    <span
                      aria-hidden
                      key={`pulse-${activeIndex}`}
                      className="pointer-events-none absolute inset-0 animate-[fadeIn_500ms_ease-out] rounded-full"
                      style={{
                        background:
                          "radial-gradient(60% 80% at 50% 50%, rgba(212,180,131,0.18) 0%, transparent 70%)",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="reveal-body grid items-stretch gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div
                className="relative overflow-hidden rounded-3xl shadow-[0_12px_36px_rgba(11,28,57,0.16)] ring-1 ring-white/5"
                style={{ background: matteGradient }}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(120% 80% at 100% 0%, rgba(212,180,131,0.10), transparent 55%), radial-gradient(80% 60% at 0% 100%, rgba(242,239,233,0.06), transparent 60%)",
                  }}
                />

                <div className="relative flex h-full min-h-[400px] flex-col items-start justify-between p-9 lg:p-10">
                  <span className="text-[13px] font-semibold tracking-[0.18em] text-[var(--accent-gold)] uppercase">
                    RIIE Framework
                  </span>
                  <span
                    key={`letter-${activeIndex}`}
                    className="block animate-[fadeIn_400ms_ease-out] text-[150px] font-semibold leading-none text-white lg:text-[170px]"
                  >
                    {active.letter}
                  </span>
                  <span className="text-[15px] font-semibold tracking-[0.16em] text-white/85 uppercase">
                    {active.title}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex h-full flex-col rounded-3xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-10">
                <h3 className="mb-3 text-[28px] font-semibold text-[var(--text-ink)]">
                  {active.title}
                </h3>
                <p
                  className="mb-6 text-lg leading-relaxed text-[var(--text-charcoal)]"
                  style={{ wordBreak: "keep-all" }}
                >
                  {active.subtitle}
                </p>

                <div className="mb-7 rounded-2xl bg-[var(--bg-surface-soft)] p-6">
                  <p
                    className="mb-0 whitespace-pre-line leading-relaxed text-[var(--text-slate)]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {active.detail}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {active.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full border border-[var(--border-hairline)] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[var(--text-slate)]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-body mt-10 flex justify-center">
            <div className="inline-flex items-center gap-4 rounded-full border border-[var(--border-hairline)] bg-white/70 py-2 pl-2 pr-2 shadow-[0_4px_18px_rgba(18,44,81,0.05)] backdrop-blur-sm">
              <button
                type="button"
                onClick={goPrev}
                aria-label="이전 RIIE 영역"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--text-charcoal)] ring-1 ring-[var(--border-hairline)] transition-all duration-300 hover:text-[var(--primary-navy)] hover:ring-[var(--primary-navy)]/40"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>

              <div className="flex select-none items-center gap-3 px-1 text-[13px]">
                <span className="font-semibold tabular-nums text-[var(--text-ink)]">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="h-[1px] w-14 bg-[var(--border-hairline)]" />
                <span className="tabular-nums text-[var(--text-steel)]">
                  {String(tabs.length).padStart(2, "0")}
                </span>
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="다음 RIIE 영역"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-navy)] text-white shadow-[0_6px_16px_rgba(18,44,81,0.22)] transition-all duration-300 hover:bg-[var(--primary-navy-dark)] hover:shadow-[0_8px_22px_rgba(18,44,81,0.32)]"
              >
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
