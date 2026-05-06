import { Check, Compass, HelpCircle, Network, Quote, Search } from "lucide-react";

const visibleMetrics = [
  "진도율",
  "단어 학습량",
  "푼 문제집 수",
  "정답률·점수",
];

const blindSpots = [
  { icon: Search, label: "어디에서 이해가 막히는지" },
  { icon: HelpCircle, label: "왜 같은 유형에서 또 틀리는지" },
  { icon: Network, label: "어떤 사고 단계에서 멈추는지" },
  { icon: Compass, label: "어떤 방향으로 보완해야 하는지" },
];

export default function CoreProblemSection() {
  return (
    <section
      className="py-16 md:py-24 lg:py-[100px]"
      style={{ backgroundColor: "var(--bg-canvas)" }}
    >
      <div className="container mx-auto max-w-5xl px-6 md:px-8 lg:px-12">
        <div className="mb-10 md:mb-14">
          <span className="section-kicker reveal-body mb-5">Core Problem</span>

          <h2
            className="reveal-title text-[28px] font-semibold text-[var(--text-ink)] md:text-[42px]"
            style={{ lineHeight: 1.3, wordBreak: "keep-all" }}
          >
            리딩서 진도만으로는
            <br className="hidden sm:block" />
            아이가{" "}
            <span className="highlight highlight-light">
              &apos;무엇을 이해했고 어디에서 막히는지&apos;
            </span>{" "}
            알 수 없습니다.
          </h2>
        </div>

        <div
          className="reveal-body mb-12 space-y-4 text-[var(--text-charcoal)] md:mb-14"
          style={{
            fontSize: "17px",
            lineHeight: 1.75,
            wordBreak: "keep-all",
          }}
        >
          <p className="mb-0">
            프렙도 다니고, 진도도 나가고, 특강과 선행까지 해오는데도 불안이
            사라지지 않는 이유는 단순합니다.
          </p>
          <p className="mb-0">
            리딩서 진도는 잘 나가도 왜 틀리는지, 어떤 유형에서 막히는지, 그리고
            아이가 실제로 무엇을 이해하고 있는지 정확히 진단하고 방향성을
            잡아주는 시스템이 없기 때문입니다.
          </p>
        </div>

        {/* Focal comparison — Visible vs Blind Spots */}
        <div className="reveal-body mb-12 md:mb-14">
          <p className="mb-5 flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] text-[var(--text-steel)] uppercase">
            <span
              aria-hidden
              className="inline-block h-px w-7"
              style={{ background: "var(--accent-gold)" }}
            />
            현재 학습 현황의 진단 격차
          </p>

          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-white p-7">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="rounded-full bg-[var(--bg-surface-soft)] px-2.5 py-1 text-[10.5px] font-semibold tracking-[0.18em] text-[var(--text-charcoal)] uppercase">
                  Visible
                </span>
                <span className="text-[12.5px] font-medium text-[var(--text-steel)]">
                  부모님이 확인하실 수 있는 지표
                </span>
              </div>
              <h3
                className="mb-5 text-[19px] font-semibold leading-[1.4] text-[var(--text-ink)] md:text-[20px]"
                style={{ wordBreak: "keep-all" }}
              >
                지금 보이는 것
              </h3>
              <ul className="space-y-3">
                {visibleMetrics.map((m) => (
                  <li
                    key={m}
                    className="flex items-center gap-3 text-[14.5px] text-[var(--text-charcoal)] md:text-[15px]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--bg-surface-soft)] ring-1 ring-[var(--border-hairline)]">
                      <Check
                        className="h-3.5 w-3.5 text-[var(--text-steel)]"
                        strokeWidth={2.4}
                      />
                    </span>
                    <span style={{ wordBreak: "keep-all" }}>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="relative overflow-hidden rounded-2xl border bg-white p-7"
              style={{
                borderColor: "rgba(212, 180, 131, 0.45)",
                background:
                  "linear-gradient(180deg, rgba(242, 239, 233, 0.55) 0%, rgba(255, 255, 255, 1) 70%)",
              }}
            >
              <span
                aria-hidden
                className="absolute left-0 right-0 top-0 h-[3px]"
                style={{
                  background:
                    "linear-gradient(90deg, var(--accent-gold) 0%, #E1C99A 60%, transparent 100%)",
                }}
              />
              <div className="mb-5 flex items-center gap-2.5">
                <span
                  className="rounded-full px-2.5 py-1 text-[10.5px] font-semibold tracking-[0.18em] uppercase"
                  style={{
                    background: "rgba(212, 180, 131, 0.18)",
                    color: "var(--primary-navy)",
                  }}
                >
                  Blind Spot
                </span>
                <span className="text-[12.5px] font-medium text-[var(--text-steel)]">
                  진단되지 않는 4가지 영역
                </span>
              </div>
              <h3
                className="mb-5 text-[19px] font-semibold leading-[1.4] text-[var(--text-ink)] md:text-[20px]"
                style={{ wordBreak: "keep-all" }}
              >
                정작 알 수 없는 것
              </h3>
              <ul className="space-y-3">
                {blindSpots.map((spot) => {
                  const Icon = spot.icon;
                  return (
                    <li
                      key={spot.label}
                      className="flex items-center gap-3 text-[14.5px] font-medium text-[var(--text-charcoal)] md:text-[15px]"
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-1"
                        style={{
                          background: "rgba(212, 180, 131, 0.14)",
                          borderColor: "rgba(212, 180, 131, 0.45)",
                          color: "var(--primary-navy)",
                        }}
                      >
                        <Icon
                          className="h-[15px] w-[15px] text-[var(--primary-navy)]"
                          strokeWidth={1.8}
                        />
                      </span>
                      <span style={{ wordBreak: "keep-all" }}>{spot.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Quote — emotional anchor */}
        <blockquote
          className="reveal-body relative mb-12 overflow-hidden rounded-2xl border-l-[3px] border-[var(--primary-navy)] bg-[var(--bg-surface-soft)] px-7 py-8 md:mb-14 md:px-9 md:py-10"
          style={{ wordBreak: "keep-all" }}
        >
          <Quote
            aria-hidden
            className="absolute right-6 top-6 h-9 w-9 text-[var(--primary-navy)]/10"
            strokeWidth={2}
          />
          <p className="mb-4 text-[15.5px] leading-[1.75] text-[var(--text-charcoal)] md:text-[17px]">
            특히 매년 초등 어학원 준비 난이도가 높아질수록{" "}
            <span className="font-semibold text-[var(--primary-navy)]">
              &apos;지금 준비 방식이 맞는가?&apos;
            </span>
            라는 고민은 더 커질 수밖에 없습니다. 이건 부모님의 잘못이 아니라,
          </p>
          <p
            className="mb-0 text-[17px] font-semibold leading-[1.55] text-[var(--primary-navy)] md:text-[19px]"
            style={{ wordBreak: "keep-all" }}
          >
            양적으로 문제집만 많이 푸는 방식이
            <br className="hidden sm:block" />
            아이의 본질적인 실력향상으로 이어지지 못하는 데서 생기는 당연한
            불안입니다.
          </p>
        </blockquote>

        {/* Direction */}
        <div
          className="reveal-body mb-12 text-[var(--text-charcoal)] md:mb-14"
          style={{
            fontSize: "17px",
            lineHeight: 1.75,
            wordBreak: "keep-all",
          }}
        >
          <p className="mb-0">
            그래서 지금 필요한 건 더 많은 특강이나 빠른 진도가 아니라,
            <br className="hidden sm:block" />
            <span style={{ fontWeight: 600, color: "var(--text-ink)" }}>
              우리 아이가 어디에서 이해하고, 어디에서 사고가 멈추는지{" "}
              <span className="highlight highlight-light">
                &apos;정확히 읽어내는 것&apos;.
              </span>
            </span>
          </p>
        </div>

        {/* Bridge */}
        <div className="reveal-title">
          <p
            className="mb-0 text-[20px] font-semibold leading-[1.5] text-[var(--primary-navy-dark)] md:text-[24px]"
            style={{ wordBreak: "keep-all" }}
          >
            그리고 이 지점은 결국
            <br />
            <span
              style={{
                borderBottom: "2px solid var(--accent-gold)",
                paddingBottom: "4px",
              }}
            >
              초등 어학원 반 배정 수업의 본질
            </span>
            과도 연결됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
