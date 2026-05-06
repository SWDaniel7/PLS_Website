import { ArrowRight } from "lucide-react";

const mappings = [
  {
    letter: "R",
    area: "Recognition",
    types: ["Detail", "Main Idea", "Sequence"],
  },
  {
    letter: "I",
    area: "Inference",
    types: ["Inference", "Cause & Effect", "Predict"],
  },
  {
    letter: "I",
    area: "Integration",
    types: ["Apply", "Theme", "What-if"],
  },
  {
    letter: "E",
    area: "Expression",
    types: ["Writing", "Interview"],
  },
];

const matteGradient =
  "linear-gradient(150deg, #1B3056 0%, #0C1D38 60%, #08152C 100%)";

export default function RIIEMappingSection() {
  return (
    <section
      className="section-padding py-16 md:py-24 lg:py-[100px]"
      style={{ backgroundColor: "var(--bg-surface-soft)" }}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-16">
          <div className="flex flex-col lg:col-span-5">
            <span className="section-kicker reveal-body mb-5 inline-flex w-fit">
              RIIE × Leveltest
            </span>

            <h2
              className="reveal-title mb-6 text-[26px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--text-ink)] md:mb-8 md:text-[40px]"
              style={{ wordBreak: "keep-all" }}
            >
              RIIE 프레임워크는
              <br />
              <span className="highlight highlight-light">
                초등 어학원 평가 구조와 정확히 대응합니다.
              </span>
            </h2>

            <p
              className="reveal-body mb-8 text-base leading-relaxed text-[var(--text-slate)] md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              이제 우리 아이가 어떤 영역에서 사고 흐름이 끊기는지 정확히
              진단하고, 그에 맞는 방향성을 제시해드리겠습니다.
            </p>

            <div className="reveal-body hidden rounded-2xl border border-[var(--border-hairline)] bg-white p-6 lg:mt-auto lg:block">
              <p className="mb-3 text-[12px] font-semibold tracking-[0.18em] text-[var(--accent-gold)] uppercase">
                Why it matters
              </p>
              <p
                className="mb-0 text-[15px] leading-relaxed text-[var(--text-charcoal)]"
                style={{ wordBreak: "keep-all" }}
              >
                레테 출제 영역과 RIIE 4단계가 1:1로 매핑되기 때문에, 부족한
                영역만 정확히 짚어 학습 방향을 즉시 교정할 수 있습니다.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="reveal-body grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:h-full lg:grid-rows-2">
              {mappings.map((row) => {
                return (
                  <button
                    key={row.area}
                    type="button"
                    aria-label={`${row.area} 영역과 대응되는 레테 유형 보기`}
                    className="group h-[170px] w-full cursor-default text-left [perspective:1200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] focus-visible:ring-offset-2 sm:h-[190px] lg:h-full"
                  >
                    <div
                      className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]"
                    >
                      <div
                        className="absolute inset-0 flex flex-col rounded-2xl border border-[var(--border-hairline)] bg-white p-5 sm:p-6 [backface-visibility:hidden]"
                        style={{ WebkitBackfaceVisibility: "hidden" }}
                      >
                        <div className="mb-3 flex items-center gap-3 sm:mb-5">
                          <span
                            className="flex h-10 w-10 items-center justify-center rounded-xl text-xl font-semibold text-white sm:h-12 sm:w-12 sm:text-2xl"
                            style={{ background: matteGradient }}
                          >
                            {row.letter}
                          </span>
                          <div>
                            <p className="mb-0 text-[10px] font-semibold tracking-[0.16em] text-[var(--text-steel)] uppercase sm:text-[11px]">
                              RIIE 영역
                            </p>
                            <p className="mb-0 text-base font-semibold text-[var(--text-ink)] sm:text-lg">
                              {row.area}
                            </p>
                          </div>
                        </div>

                        <div className="mt-auto">
                          <div className="mb-2 h-px w-10 bg-[var(--accent-gold)] sm:mb-3" />
                          <p className="mb-1 text-[14px] font-semibold text-[var(--text-charcoal)] sm:text-[15px]">
                            대응되는 레테 유형은?
                          </p>
                          <p className="mb-0 flex items-center gap-1 text-[12px] font-medium text-[var(--accent-gold)]">
                            <span className="lg:hidden">탭해서 확인하기</span>
                            <span className="hidden lg:inline">
                              마우스를 올려보세요
                            </span>
                            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                          </p>
                        </div>
                      </div>

                      <div
                        className="absolute inset-0 flex flex-col rounded-2xl p-5 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-6"
                        style={{
                          background: matteGradient,
                          WebkitBackfaceVisibility: "hidden",
                        }}
                      >
                        <div
                          className="pointer-events-none absolute inset-0 rounded-2xl"
                          style={{
                            background:
                              "radial-gradient(120% 80% at 100% 0%, rgba(212,180,131,0.10), transparent 55%)",
                          }}
                        />
                        <div className="relative mb-3 flex items-center gap-3 sm:mb-4">
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-base font-semibold text-[var(--accent-gold)] ring-1 ring-white/15 sm:h-10 sm:w-10 sm:text-lg">
                            {row.letter}
                          </span>
                          <p className="mb-0 text-[15px] font-semibold text-white sm:text-base">
                            {row.area}
                          </p>
                        </div>
                        <p className="relative mb-2 text-[10px] font-semibold tracking-[0.18em] text-white/70 uppercase sm:mb-3 sm:text-[11px]">
                          대응되는 레테 유형
                        </p>
                        <div className="relative mt-auto flex flex-wrap gap-1.5 sm:gap-2">
                          {row.types.map((type) => (
                            <span
                              key={type}
                              className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[12px] font-medium text-white sm:px-3 sm:py-1.5 sm:text-[13px]"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <p
              className="reveal-body mt-6 text-[14px] leading-relaxed text-[var(--text-slate)] lg:hidden"
              style={{ wordBreak: "keep-all" }}
            >
              레테 출제 영역과 RIIE 4단계가 1:1로 매핑되기 때문에, 부족한 영역만
              정확히 짚어 학습 방향을 즉시 교정할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
