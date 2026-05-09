import type { ReactNode } from "react";
import Image from "next/image";

type ScoreCard = {
  type: "score";
  label: string;
  bars: number[];
  imageSrc?: string;
};

type ManuscriptCard = {
  type: "manuscript";
  label: string;
  words: number;
  lines: number;
  imageSrc?: string;
};

type CaseStudy = {
  tag: string;
  title: ReactNode;
  subtitle?: string;
  body: string[];
  proofs: (ScoreCard | ManuscriptCard)[];
  proofCaption: string;
};

const heroStats = [
  { value: "100%", label: "26년 인사이트 프렙 응시생 합격" },
  { value: "88%", label: "3개월 이상 수강생 탑반(ENSIGHT) 석권" },
];
const riieBars = [
  { label: "R", value: 82 },
  { label: "I", value: 71 },
  { label: "I", value: 76 },
  { label: "E", value: 64 },
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

const caseStudies: CaseStudy[] = [
  {
    tag: "7세 사례",
    title: (
      <>
        재시 목표였던 아이가 초시 지필에서{" "}
        <span className="highlight highlight-light">
          에디*, 아이* 두 곳 모두 합격
        </span>
      </>
    ),
    body: [
      "다른 프렙들에서는 “초시 합격은 어렵다”는 평가를 받았던 아동, 재시를 목표로 7세 중반에 PLS영재교육에서 학습 시작",
      "12주 집중 과정에서 Reading(Integration·Inference) 영역 급성장",
      "10월 초시에서 지원했던 에디*·아이* 두 원 지필테스트 모두 합격",
      "단순 암기 중심이 아닌 이해·사고·표현 중심 수업을 통해 실력 안정화",
      "Writing 자신감과 학습 태도의 ‘내적 변화’까지 동반된 성장 사례",
    ],
    proofs: [
      {
        type: "score",
        label: "에디* Academy",
        bars: [82, 70, 88, 76, 92],
        imageSrc: "/images/case-score-left.png",
      },
      {
        type: "score",
        label: "아이* Academy",
        bars: [78, 84, 90, 72, 86],
        imageSrc: "/images/case-score-right.png",
      },
    ],
    proofCaption: "Score Report · 초시 지필테스트",
  },
  {
    tag: "6세 사례",
    title: (
      <>
        문법 오류가 많던 150단어 글에서{" "}
        <span className="highlight highlight-light">
          250단어 수준의 완성형 Writing
        </span>
        으로
      </>
    ),
    subtitle:
      "12주 만에 글의 양뿐 아니라 문장 구성력과 스토리 전개력까지 6세 완성형으로 성장",
    body: [
      "12주 만에 Word Count 150 → 250 수준으로 확장, 글의 길이뿐 아니라 내용 완성도 향상",
      "기초 문장 오류와 시제 혼용 감소, 문장 연결어와 구문 사용 능력 강화",
      "5문단 스토리 구조가 잡히며 이야기 전개가 자연스러워짐",
      "단순 사건 나열에서 벗어나 감정·상황 묘사 중심의 글쓰기로 발전",
      "아이디어 구체화 및 문장 표현 다양화로 자기표현력 향상 - 에디*·아이* 등 상위 원에서 중점 평가하는 핵심 역량 강화",
    ],
    proofs: [
      {
        type: "manuscript",
        label: "AFTER",
        words: 250,
        lines: 14,
        imageSrc: "/images/writing-after.png",
      },
      {
        type: "manuscript",
        label: "BEFORE",
        words: 150,
        lines: 8,
        imageSrc: "/images/writing-before.png",
      },
    ],
    proofCaption: "Writing Sample · Before / After 12 weeks",
  },
];

function ScoreProof({ proof }: { proof: ScoreCard }) {
  if (proof.imageSrc) {
    return (
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-white shadow-[0_8px_24px_rgba(18,44,81,0.08)]">
        <Image
          src={proof.imageSrc}
          alt={`${proof.label} score report`}
          width={720}
          height={960}
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[3/4] flex-col overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-white shadow-[0_8px_24px_rgba(18,44,81,0.08)]">
      <div className="border-b border-[var(--border-hairline)] px-3 py-2.5">
        <p className="mb-0 text-[9px] font-semibold tracking-[0.18em] text-[var(--text-steel)] uppercase">
          Score Report
        </p>
        <p className="mb-0 text-[12px] font-semibold text-[var(--text-ink)]">
          {proof.label}
        </p>
      </div>

      <div className="flex flex-1 flex-col justify-between p-3">
        <div className="space-y-2">
          {proof.bars.map((width, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-1 w-8 rounded-full bg-[var(--bg-surface)]" />
              <div className="h-1.5 flex-1 rounded-full bg-[var(--bg-surface-soft)]">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${width}%`,
                    background:
                      "linear-gradient(90deg, var(--primary-navy) 0%, var(--accent-gold) 100%)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="mb-0 text-[8px] font-semibold tracking-[0.16em] text-[var(--text-steel)] uppercase">
              Result
            </p>
            <p className="mb-0 text-[13px] font-semibold text-[var(--primary-navy)]">
              합격
            </p>
          </div>
          <span
            className="rotate-[-8deg] rounded-full border-2 border-[var(--accent-gold)] px-2.5 py-1 text-[9px] font-bold tracking-[0.18em] text-[var(--accent-gold)] uppercase"
            style={{ letterSpacing: "0.18em" }}
          >
            Pass
          </span>
        </div>
      </div>
    </div>
  );
}

function ManuscriptProof({ proof }: { proof: ManuscriptCard }) {
  const isAfter = proof.label === "AFTER";
  if (proof.imageSrc) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-white shadow-[0_8px_24px_rgba(18,44,81,0.08)]">
        <Image
          src={proof.imageSrc}
          alt={`${proof.label} writing sample`}
          width={900}
          height={1200}
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[3/4] flex-col overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-white shadow-[0_8px_24px_rgba(18,44,81,0.08)]">
      <div className="flex items-center justify-between border-b border-[var(--border-hairline)] px-3 py-2.5">
        <p
          className={`mb-0 text-[10px] font-bold tracking-[0.22em] uppercase ${
            isAfter
              ? "text-[var(--primary-navy)]"
              : "text-[var(--text-steel)]"
          }`}
        >
          {proof.label}
        </p>
        <p className="mb-0 text-[10px] font-medium text-[var(--text-slate)]">
          {proof.words} words
        </p>
      </div>

      <div className="flex flex-1 flex-col justify-start space-y-2 p-3">
        {Array.from({ length: proof.lines }).map((_, i) => (
          <div
            key={i}
            className="h-[3px] rounded-full bg-[var(--bg-surface-soft)]"
            style={{ width: `${65 + ((i * 7) % 30)}%` }}
          />
        ))}
      </div>

      {isAfter && (
        <div className="absolute right-3 bottom-3">
          <span className="rotate-[-6deg] rounded-md bg-[var(--accent-gold)]/15 px-2 py-1 text-[9px] font-bold tracking-[0.18em] text-[var(--accent-gold)] uppercase">
            +100w
          </span>
        </div>
      )}
    </div>
  );
}

export default function CaseStudySection() {
  return (
    <section
      id="case"
      className="section-padding py-16 md:py-24 lg:py-[100px] scroll-mt-24 md:scroll-mt-16"
      style={{ backgroundColor: "var(--bg-canvas)" }}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <span className="section-kicker reveal-body mb-4">
            Proven Results
          </span>
          <h2
            className="reveal-title mb-5 text-[28px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--text-ink)] md:text-[44px]"
            style={{ wordBreak: "keep-all" }}
          >
            문해력이 성장하면 3개월 만에도,
            <br className="hidden sm:block" />
            아이의 초등 어학원 결과가 달라집니다.
          </h2>
          <p
            className="mb-0 text-base leading-relaxed text-[var(--text-slate)] md:text-lg"
            style={{ wordBreak: "keep-all" }}
          >
            결과로 증명하는 PLS영재교육의 압도적 성취
          </p>
        </div>

        <div
          className="reveal-body relative mb-10 overflow-hidden rounded-3xl border border-[var(--border-hairline)] md:mb-14"
          style={{ backgroundColor: "var(--bg-surface-soft)" }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-4 -left-10 h-[72%] w-[44%] opacity-[0.1] md:opacity-[0.14]">
              <Image
                src="/images/insight-bg-left.png"
                alt=""
                fill
                className="object-contain object-left-top"
                aria-hidden
              />
            </div>
            <div className="absolute -right-12 -bottom-8 h-[80%] w-[46%] opacity-[0.08] md:opacity-[0.12]">
              <Image
                src="/images/insight-bg-right.png"
                alt=""
                fill
                className="object-contain object-right-bottom"
                aria-hidden
              />
            </div>
            <div className="absolute inset-0 bg-white/58 md:bg-white/52" />
          </div>
          <div className="relative z-10 grid gap-10 p-8 md:p-12 lg:grid-cols-12 lg:gap-12 lg:p-14">
            <div className="lg:col-span-7">
              <span
                className="mb-5 inline-block rounded-md bg-white px-3 py-1.5 text-[13px] font-semibold text-[var(--primary-navy)] shadow-[0_2px_8px_rgba(18,44,81,0.06)]"
                style={{ borderRadius: "8px" }}
              >
                전체 성과
              </span>

              <h3
                className="mb-5 text-[24px] font-semibold leading-[1.3] text-[var(--text-ink)] md:text-[32px]"
                style={{ wordBreak: "keep-all" }}
              >
                26년 전원 합격 및{" "}
                <span className="highlight highlight-light">
                  최상위반 석권
                </span>
              </h3>
              <p
                className="mb-4 text-[15px] leading-relaxed text-[var(--text-charcoal)] md:text-base"
                style={{ wordBreak: "keep-all" }}
              >
                26년 인사이트 프렙 응시생{" "}
                <span className="highlight highlight-light">100% 합격</span> 및
                3개월 이상 수강생{" "}
                <span className="highlight highlight-light">
                  88% 탑반(ENSIGHT) 석권
                </span>
                이라는 압도적 결과를 만들어냈습니다. 이는 단순 리딩서 풀이를
                넘어, 텍스트의 행간을 읽어내는{" "}
                <span className="highlight highlight-light font-semibold text-[var(--text-ink)]">
                  &lsquo;통합사고형 원서 수업&rsquo;
                </span>
                으로 최상위권 추론 능력을 완성한 결과입니다.
              </p>
              <p
                className="mb-0 text-[15px] leading-relaxed text-[var(--text-charcoal)] md:text-base"
                style={{ wordBreak: "keep-all" }}
              >
                기계적 암기가 아닌 깊이 있는 원서 정독을 통해 고난도 문장 구조와
                정교한 어휘 활용을 자연스럽게 체득하며, 최상위권 원들의 변별력을
                결정짓는 다면적 사고력과 자기표현 역량을 완벽히 갖추게 됩니다.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {heroStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[var(--border-hairline)] bg-white p-6 md:p-7"
                  >
                    <p className="mb-2 text-[11px] font-semibold tracking-[0.18em] text-[var(--accent-gold)] uppercase">
                      {i === 0 ? "Acceptance" : "Top Class"}
                    </p>
                    <p
                      className="mb-2 text-[44px] font-semibold leading-none text-[var(--primary-navy)] md:text-[56px]"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      {stat.value}
                    </p>
                    <div className="mb-3 h-px w-10 bg-[var(--accent-gold)]" />
                    <p
                      className="mb-0 text-[13px] leading-relaxed text-[var(--text-slate)] md:text-sm"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:items-stretch">
          {caseStudies.map((cs) => (
            <article
              key={cs.tag}
              className="reveal-body flex h-full flex-col rounded-3xl border border-[var(--border-hairline)] p-7 md:p-10"
              style={{ backgroundColor: "var(--bg-surface-soft)" }}
            >
              <span
                className="mb-5 inline-block self-start rounded-md bg-white px-3.5 py-1.5 text-[13px] font-semibold text-[var(--primary-navy)] shadow-[0_2px_8px_rgba(18,44,81,0.06)]"
                style={{ borderRadius: "8px" }}
              >
                {cs.tag}
              </span>

              <h3
                className="mb-4 text-[20px] font-semibold leading-[1.4] text-[var(--text-ink)] md:text-[24px]"
                style={{ wordBreak: "keep-all" }}
              >
                {cs.title}
              </h3>

              {cs.subtitle && (
                <p
                  className="mb-6 text-[15px] font-semibold leading-relaxed text-[var(--primary-navy)] md:text-base"
                  style={{ wordBreak: "keep-all" }}
                >
                  {cs.subtitle}
                </p>
              )}

              <div className="mb-6 rounded-2xl border border-[var(--border-hairline)] bg-white p-5 md:p-6">
                <p className="mb-4 text-[10px] font-semibold tracking-[0.22em] text-[var(--text-steel)] uppercase">
                  {cs.proofCaption}
                </p>
                <div
                  className={`grid gap-3 md:gap-4 ${
                    cs.proofs.every((proof) => proof.type === "manuscript")
                      ? "grid-cols-1"
                      : "grid-cols-2"
                  }`}
                >
                  {cs.proofs.map((proof, i) =>
                    proof.type === "score" ? (
                      <ScoreProof key={i} proof={proof} />
                    ) : (
                      <ManuscriptProof key={i} proof={proof} />
                    )
                  )}
                </div>
              </div>

              <div>
                <ul className="mb-0 list-disc space-y-2.5 pl-5 text-[14px] leading-relaxed text-[var(--text-charcoal)] md:text-[15px]">
                  {cs.body.map((point, i) => (
                    <li key={i} style={{ wordBreak: "keep-all" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {cs.tag === "7세 사례" ? (
                <div className="mt-auto pt-6">
                  <div className="reveal-body relative">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-4 -top-4 hidden h-24 w-24 opacity-40 md:block"
                      style={{
                        backgroundImage:
                          "radial-gradient(rgba(18, 44, 81, 0.18) 1px, transparent 1.4px)",
                        backgroundSize: "10px 10px",
                        maskImage:
                          "radial-gradient(circle at top right, black 30%, transparent 75%)",
                        WebkitMaskImage:
                          "radial-gradient(circle at top right, black 30%, transparent 75%)",
                      }}
                    />
                    <div className="relative rounded-3xl border border-[var(--border-hairline)] bg-[var(--bg-surface-soft)] p-4 shadow-[0_12px_32px_rgba(18,44,81,0.08)] md:p-5">
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
                        <div className="rounded-2xl bg-white p-4 shadow-[0_4px_14px_rgba(18,44,81,0.04)] ring-1 ring-[var(--border-hairline)]">
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
                                    className="w-full rounded-md"
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
                        <div className="rounded-2xl bg-white p-4 shadow-[0_4px_14px_rgba(18,44,81,0.04)] ring-1 ring-[var(--border-hairline)]">
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
                              5.8
                            </span>
                            <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[var(--accent-gold)]">
                              +1.1
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
                              <linearGradient id="sparkFillCase" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#1B3056" stopOpacity="0.18" />
                                <stop offset="100%" stopColor="#1B3056" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            <path d={sparklineFill} fill="url(#sparkFillCase)" />
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
                        <div className="rounded-2xl bg-white p-4 shadow-[0_4px_14px_rgba(18,44,81,0.04)] ring-1 ring-[var(--border-hairline)]">
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
                            지문 핵심을 빠르게 찾고 근거 문장을 정확히 짚는 힘이
                            좋아졌습니다. 긴 문장에서도 의미 단위를 끊어 읽는
                            습관이 자리 잡았고, 서술형에서는 답의 논리 순서를 더
                            안정적으로 구성하고 있습니다.
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {["Inference 강세", "Detail 보강", "Sequence 안정"].map(
                              (tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-[var(--border-hairline)] bg-[var(--bg-surface-soft)] px-2 py-0.5 text-[10.5px] font-medium text-[var(--text-charcoal)]"
                                >
                                  {tag}
                                </span>
                              )
                            )}
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
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
