type ScoreCard = {
  type: "score";
  label: string;
  bars: number[];
};

type ManuscriptCard = {
  type: "manuscript";
  label: string;
  words: number;
  lines: number;
};

type CaseStudy = {
  tag: string;
  title: string;
  subtitle?: string;
  body: string[];
  proofs: (ScoreCard | ManuscriptCard)[];
  proofCaption: string;
};

const heroStats = [
  { value: "100%", label: "26년 인사이트 프렙 응시생 합격" },
  { value: "88%", label: "3개월 이상 수강생 탑반(ENSIGHT) 석권" },
];

const caseStudies: CaseStudy[] = [
  {
    tag: "7세 사례",
    title:
      "재시 목표였던 아이가 초시 지필에서 에디*, 아이* 두 곳 모두 합격",
    body: [
      "다른 프렙들에서는 '초시 합격은 어렵다'는 평가를 받았으나, 12주 집중 과정을 통해 Reading(Integration·Inference) 영역이 급성장하며 10월 초시에서 지원했던 최상위 어학원 두 곳의 지필테스트를 모두 합격했습니다.",
      "단순 암기가 아닌 이해·사고·표현 중심 수업을 통해 실력이 안정화되었고, Writing 자신감과 학습 태도의 '내적 변화'까지 동반된 의미 있는 성장 사례입니다.",
    ],
    proofs: [
      {
        type: "score",
        label: "에디* Academy",
        bars: [82, 70, 88, 76, 92],
      },
      {
        type: "score",
        label: "아이* Academy",
        bars: [78, 84, 90, 72, 86],
      },
    ],
    proofCaption: "Score Report · 초시 지필테스트",
  },
  {
    tag: "6세 사례",
    title:
      "문법 오류가 많던 150단어 글에서 250단어 수준의 완성형 Writing으로",
    subtitle:
      "12주 만에 글의 양뿐 아니라 문장 구성력과 스토리 전개력까지 6세 완성형으로 성장",
    body: [
      "Word Count 150 수준에서 250 수준으로 확장되었으며, 기초 문장 오류와 시제 혼용이 감소하고 문장 연결어와 구문 사용 능력이 대폭 강화되었습니다.",
      "단순 사건 나열에서 벗어나 감정·상황 묘사 중심의 글쓰기로 발전했으며, 5문단 스토리 구조가 잡히며 이야기 전개가 자연스러워졌습니다. 이는 에디*, 아이* 등 상위 원에서 중점 평가하는 핵심 역량(아이디어 구체화 및 자기표현력)이 완벽히 강화되었음을 보여줍니다.",
    ],
    proofs: [
      {
        type: "manuscript",
        label: "BEFORE",
        words: 150,
        lines: 8,
      },
      {
        type: "manuscript",
        label: "AFTER",
        words: 250,
        lines: 14,
      },
    ],
    proofCaption: "Writing Sample · Before / After 12 weeks",
  },
];

function ScoreProof({ proof }: { proof: ScoreCard }) {
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
          className="reveal-body mb-10 overflow-hidden rounded-3xl border border-[var(--border-hairline)] md:mb-14"
          style={{ backgroundColor: "var(--bg-surface-soft)" }}
        >
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-12 lg:gap-12 lg:p-14">
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
                26년 인사이트 프렙 응시생 100% 합격 및 3개월 이상 수강생 88%
                탑반(ENSIGHT) 석권이라는 압도적 결과를 만들어냈습니다. 이는 단순
                리딩서 풀이를 넘어, 텍스트의 행간을 읽어내는{" "}
                <span className="font-semibold text-[var(--text-ink)]">
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

        <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
          {caseStudies.map((cs) => (
            <article
              key={cs.tag}
              className="reveal-body flex flex-col rounded-3xl border border-[var(--border-hairline)] p-7 md:p-10"
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
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {cs.proofs.map((proof, i) =>
                    proof.type === "score" ? (
                      <ScoreProof key={i} proof={proof} />
                    ) : (
                      <ManuscriptProof key={i} proof={proof} />
                    )
                  )}
                </div>
              </div>

              <div className="space-y-3">
                {cs.body.map((para, i) => (
                  <p
                    key={i}
                    className="mb-0 text-[15px] leading-relaxed text-[var(--text-charcoal)]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
