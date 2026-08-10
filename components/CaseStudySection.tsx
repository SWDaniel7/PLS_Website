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

const resultCards = [
  {
    tag: "Acceptance",
    name: "인사이트프렙",
    fact: "응시생 전원 합격 · 탑반(ENSIGHT) 배정 다수",
  },
  {
    tag: "Final Pass",
    name: "에디센(EDISEN)",
    fact: "최종 합격",
  },
  {
    tag: "Final Pass",
    name: "렉스킴(Lex Kim)",
    fact: "최종 합격 · 재원생 복수",
  },
];
const reportCaptures = [
  { src: "/images/report-capture-1.png", w: 1960, h: 2730 },
  { src: "/images/report-capture-2.png", w: 1960, h: 1550 },
];

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
        label: "에디센(EDISEN)",
        bars: [82, 70, 88, 76, 92],
        imageSrc: "/images/case-edisen-pass.png",
      },
      {
        type: "score",
        label: "렉스킴(Lex Kim)",
        bars: [78, 84, 90, 72, 86],
        imageSrc: "/images/case-lexkim-pass.png",
      },
    ],
    proofCaption: "합격 소식 · 에디센 · 렉스킴",
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
      <div className="relative aspect-[210/297] overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-white shadow-[0_8px_24px_rgba(18,44,81,0.08)]">
        <Image
          src={proof.imageSrc}
          alt={`${proof.label} 합격 소식`}
          width={1588}
          height={2246}
          className="h-full w-full object-cover object-center"
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
            문해력이 성장하면,
            <br className="hidden sm:block" />
            아이의 초등 어학원 결과가 달라집니다.
          </h2>
          <p
            className="mb-0 text-base leading-relaxed text-[var(--text-slate)] md:text-lg"
            style={{ wordBreak: "keep-all" }}
          >
            결과로 증명하는 PLS영재교육
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
                26년 인사이트프렙 응시생{" "}
                <span className="highlight highlight-light">전원 합격</span>에
                이어, 에디센·렉스킴 레벨테스트{" "}
                <span className="highlight highlight-light">최종 합격</span>까지
                — 서로 다른 사고를 요구하는 세 시험을 같은 수업의 아이들이
                통과했습니다. 단순 리딩서 풀이를 넘어, 텍스트의 행간을 읽어내는{" "}
                <span className="highlight highlight-light font-semibold text-[var(--text-ink)]">
                  &lsquo;통합사고형 원서수업&rsquo;
                </span>
                으로 만들어진 결과입니다.
              </p>
              <p
                className="mb-0 text-[15px] leading-relaxed text-[var(--text-charcoal)] md:text-base"
                style={{ wordBreak: "keep-all" }}
              >
                기계적 암기가 아닌 깊이 있는 원서 정독을 통해, 최상위권 원들의
                변별력을 결정짓는 다면적 사고력과 자기표현 역량을 기릅니다.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {resultCards.map((card) => (
                  <div
                    key={card.name}
                    className="rounded-2xl border border-[var(--border-hairline)] bg-white p-6 md:p-7"
                  >
                    <p className="mb-2 text-[11px] font-semibold tracking-[0.18em] text-[var(--accent-gold)] uppercase">
                      {card.tag}
                    </p>
                    <p
                      className="mb-2 text-[21px] font-semibold leading-tight text-[var(--primary-navy)] md:text-[24px]"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {card.name}
                    </p>
                    <div className="mb-3 h-px w-10 bg-[var(--accent-gold)]" />
                    <p
                      className="mb-0 text-[13px] leading-relaxed text-[var(--text-slate)] md:text-sm"
                      style={{ wordBreak: "keep-all" }}
                    >
                      {card.fact}
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
                      : "grid-cols-1 md:grid-cols-2"
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
                  <div className="reveal-body">
                    <div className="mb-4 px-1">
                      <p className="mb-2 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-[var(--accent-gold)] uppercase">
                        <span
                          aria-hidden
                          className="inline-block h-px w-6"
                          style={{ background: "var(--accent-gold)" }}
                        />
                        Diagnostic Report
                      </p>
                      <h4
                        className="mb-2 text-[17px] font-semibold leading-snug text-[var(--text-ink)] md:text-[19px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        진단 후, 이런 판독 리포트를 돌려드립니다
                      </h4>
                      <p
                        className="mb-0 text-[13px] leading-relaxed text-[var(--text-slate)] md:text-[13.5px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        실제 제공된 리딩 진단 리포트입니다. 아이가 어디에서
                        막히고 무엇을 보완해야 하는지 — 결과만 통보하는 테스트와
                        다른 이유입니다.
                      </p>
                    </div>
                    <div className="space-y-3">
                      {reportCaptures.map((cap) => (
                        <div
                          key={cap.src}
                          className="overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-white shadow-[0_4px_14px_rgba(18,44,81,0.06)]"
                        >
                          <Image
                            src={cap.src}
                            alt="리딩 진단 판독 리포트"
                            width={cap.w}
                            height={cap.h}
                            className="h-auto w-full"
                          />
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 px-1 text-[11px] leading-relaxed text-[var(--text-steel)]">
                      학생 정보와 정량 수치는 가렸습니다.
                    </p>
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
