import { Brain, Eye, Lightbulb, Network, PenTool } from "lucide-react";

const cognitiveSteps = [
  { icon: Eye, label: "읽고", caption: "Read" },
  { icon: Lightbulb, label: "이해하고", caption: "Understand" },
  { icon: Brain, label: "추론하고", caption: "Infer" },
  { icon: Network, label: "연결하고", caption: "Integrate" },
  { icon: PenTool, label: "표현하는", caption: "Express" },
];

export default function CoreProblemDarkSection() {
  return (
    <section
      className="py-16 md:py-24 lg:py-[100px]"
      style={{ backgroundColor: "var(--primary-navy)", color: "#FFFFFF" }}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="reveal-body mb-5 text-center">
          <span className="section-kicker section-kicker--dark inline-flex">
            Core Principles
          </span>
        </div>

        <h2
          className="reveal-title mb-12 mx-auto max-w-5xl text-center font-semibold leading-[1.4] text-white md:mb-14"
          style={{
            fontSize: "clamp(24px, 4.2vw, 30px)",
            wordBreak: "keep-all",
          }}
        >
          이 모든 고민의 본질은,
          <br className="hidden sm:block" />
          초등 어학원 반 배치 평가가 더 이상
          <br className="hidden sm:block" />
          단순한 &apos;단어 공부&apos;나 &apos;리딩서 풀이 훈련&apos;만으로는
          접근할 수 없는
          <br className="hidden sm:block" />
          <span
            style={{
              color: "var(--accent-gold)",
              fontSize: "clamp(28px, 4.8vw, 34px)",
            }}
          >
            고난도 문해력/사고력 평가
          </span>
          라는 데 있습니다.
        </h2>

        {/* Cognitive flow visualization — 5 steps */}
        <div className="reveal-body mb-14 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:mb-16 md:p-10">
          <div className="mb-7 flex items-center gap-3 md:mb-8">
            <span
              aria-hidden
              className="inline-block h-px w-8"
              style={{ background: "rgba(212, 180, 131, 0.55)" }}
            />
            <p className="mb-0 text-[11px] font-semibold tracking-[0.18em] text-[var(--accent-gold)] uppercase md:text-[12px]">
              반 배치 평가가 측정하는 5단계 사고 흐름
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
            {cognitiveSteps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === cognitiveSteps.length - 1;
              return (
                <div key={step.label} className="relative">
                  {!isLast && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute hidden lg:block"
                      style={{
                        top: "44px",
                        right: "-12px",
                        width: "24px",
                        height: "1px",
                        background:
                          "linear-gradient(90deg, transparent 0%, rgba(212,180,131,0.55) 50%, transparent 100%)",
                        zIndex: 1,
                      }}
                    />
                  )}
                  <div className="relative h-full rounded-2xl bg-[var(--primary-navy-dark)] p-4 ring-1 ring-white/10 transition-all duration-300 hover:bg-[#0A1A35] hover:ring-[var(--accent-gold)]/40 md:p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full ring-1"
                        style={{
                          background: "rgba(212, 180, 131, 0.14)",
                          borderColor: "rgba(212, 180, 131, 0.28)",
                          color: "var(--accent-gold)",
                        }}
                      >
                        <Icon
                          className="h-[17px] w-[17px]"
                          strokeWidth={1.7}
                        />
                      </span>
                      <span className="text-[10.5px] font-semibold tracking-[0.18em] text-white/40 uppercase tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mb-0.5 text-[15px] font-semibold text-white md:text-[16px]">
                      {step.label}
                    </p>
                    <p className="mb-0 text-[10.5px] tracking-[0.06em] text-white/50 md:text-[11px]">
                      {step.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Body — narrative continued */}
        <div
          className="reveal-body mx-auto max-w-4xl space-y-7 text-center"
          style={{
            fontSize: "clamp(15px, 2.8vw, 17px)",
            lineHeight: 1.75,
            letterSpacing: "-0.01em",
            wordBreak: "keep-all",
          }}
        >
          <p className="mb-0 text-white/85">
            초등 어학원 반 배치 수업은 단순히 글을 읽고 정답을 고르는 시험이
            아닙니다. 위 다섯 단계 사고 흐름을 종합적으로 평가하는{" "}
            <span className="font-semibold text-white">고난도 문해력 시험</span>
            입니다.
          </p>

          <p className="mb-0 mt-6 text-white/85">
            특히 요즘 독보적 인기를 얻고 있는 에디*과 같은{" "}
            <span className="font-semibold text-[var(--accent-gold)]">
              &apos;노블베이스 원&apos;
            </span>
            은 리딩 지문 분량이 길고, Non-fiction 사고추론 문제 뿐 아니라
            Fiction 에서의 감정·원인·관계 추론까지 복합적으로 요구하기 때문에
            단순한 단어량이나 리딩서 진도만으로는 대비하기 어려운{" "}
            <span className="font-semibold text-white">고난도 사고형 문항</span>
            들이 최신 기출로 꾸준히 출제되고 있습니다.
          </p>
        </div>

        {/* Assessment dimensions — visual chips for the 3 challenges from body 2 */}
        <div className="reveal-body mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
          {[
            { tag: "Non-fiction", label: "사고추론 문제" },
            { tag: "Fiction", label: "감정·원인·관계 추론" },
            { tag: "Vocabulary", label: "문맥에 기반한 의미 추론" },
            { tag: "Length", label: "긴 리딩 지문" },
          ].map((dim) => (
            <div
              key={dim.label}
              className="rounded-xl bg-white/[0.04] p-4 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/[0.07] hover:ring-[var(--accent-gold)]/30"
            >
              <div className="mb-1.5 flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--accent-gold)" }}
                />
                <span className="text-[10.5px] font-semibold tracking-[0.16em] text-white/55 uppercase">
                  {dim.tag}
                </span>
              </div>
              <p
                className="mb-0 text-[14.5px] font-medium text-white md:text-[15px]"
                style={{ wordBreak: "keep-all" }}
              >
                {dim.label}
              </p>
            </div>
          ))}
        </div>

        {/* Closing emphasis — bordered callout */}
        <div className="reveal-title mt-12 mx-auto max-w-4xl md:mt-14">
          <div
            className="overflow-hidden rounded-2xl px-6 py-7 md:px-9 md:py-9"
            style={{
              borderLeft: "3px solid var(--accent-gold)",
              background: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(4px)",
            }}
          >
            <p
              className="mb-2 text-center text-[11.5px] font-semibold tracking-[0.18em] uppercase md:text-[12px]"
              style={{ color: "var(--accent-gold)" }}
            >
              <span
                aria-hidden
                className="mr-2.5 inline-block h-px w-7 align-middle"
                style={{ background: "var(--accent-gold)" }}
              />
              지금 필요한 준비
            </p>
            <p
              className="mb-0 text-center font-medium leading-[1.55] text-white"
              style={{
                fontSize: "clamp(18px, 3vw, 22px)",
                wordBreak: "keep-all",
              }}
            >
              &apos;더 많이 푸는 것&apos;이 아니라,
              <br className="hidden sm:block" />
              <span className="highlight highlight-dark">
                지문이 요구하는 사고 구조를 갖추는 방향의 수업입니다.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
