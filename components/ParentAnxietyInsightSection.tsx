import { HelpCircle } from "lucide-react";

const questions = [
  "진도는 나가는데, 왜 틀릴까?",
  "추론(Inference) 문제는 왜 막힐까?",
  "말은 잘하는데, 왜 쓰기는 안될까?",
];

export default function ParentAnxietyInsightSection() {
  return (
    <section
      className="section-padding py-16 md:py-24 lg:py-[100px]"
      style={{ backgroundColor: "var(--bg-surface-soft)" }}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="pain-point-grid grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="content-area lg:col-span-3">
            <span className="section-kicker reveal-body mb-4">Unresolved Questions</span>

            <h2 className="reveal-title mb-6 text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--text-ink)] md:text-5xl">
              그동안 이런 고민,
              <br />
              <span className="highlight highlight-light">
                누구에게 물어봐야 할지 막막하셨죠?
              </span>
            </h2>

            <div className="reveal-body mb-8 grid gap-3 sm:grid-cols-3 sm:gap-4 md:mb-10">
              {questions.map((q, i) => (
                <div
                  key={q}
                  className={`group relative rounded-2xl border border-[var(--border-hairline)] bg-white p-5 shadow-[0_4px_14px_rgba(18,44,81,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-gold)]/45 hover:shadow-[0_14px_30px_rgba(18,44,81,0.10)] ${
                    i === 1 ? "sm:mt-5" : i === 2 ? "sm:mt-10" : ""
                  }`}
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent-sand)] transition-colors duration-300 group-hover:bg-[var(--accent-gold)]/20">
                    <HelpCircle
                      className="h-4 w-4 text-[var(--accent-gold)]"
                      aria-hidden
                    />
                  </div>
                  <p
                    className="mb-0 text-[14px] font-medium leading-[1.65] text-[var(--text-ink)] md:text-[15px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {q}
                  </p>
                </div>
              ))}
            </div>

            <p className="reveal-body mb-5 text-base leading-relaxed text-[var(--text-slate)]">
              진도는 계속 나가는데, 정작 아이가 &apos;왜&apos; 틀리는지, 어디에서 막히는지 설명
              들은 적 거의 없으셨죠?
            </p>

            <div className="space-y-4">
              <div className="pain-card reveal-body rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-6">
                <h4 className="mb-2 text-[17px] font-semibold text-[var(--text-ink)]">
                  Inference / Sequence 문제의 장벽
                </h4>
                <p className="mb-0 text-[15px] text-[var(--text-slate)]">
                  Detail 문제는 잘 맞는데도 Inference, Sequence 문제는 계속 막히는 이유
                </p>
              </div>
              <div className="pain-card reveal-body rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-6">
                <h4 className="mb-2 text-[17px] font-semibold text-[var(--text-ink)]">
                  말하기와 쓰기의 불균형
                </h4>
                <p className="mb-0 text-[15px] text-[var(--text-slate)]">
                  영어로 말은 잘하는데 라이팅에서는 자기 생각을 제대로 쓰지 못하는 이유
                </p>
              </div>
              <div className="pain-card reveal-body rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-6">
                <h4 className="mb-2 text-[17px] font-semibold text-[var(--text-ink)]">
                  불확실한 레벨테스트 대비
                </h4>
                <p className="mb-0 text-[15px] text-[var(--text-slate)]">
                  그리고 내년 레테가 더 어려워진다는데 지금 방식이 맞는지 판단하기 어려운 순간들
                </p>
              </div>
            </div>

            <p className="reveal-body mb-0 mt-6 text-base font-medium leading-relaxed text-[var(--primary-navy)]">
              부모님께서는 이런 핵심적인 설명을 정확히 들을 기회가 거의 없으셨을 거예요.
            </p>
          </div>

          <div className="image-area order-first self-start lg:order-none lg:col-span-2 lg:sticky lg:top-28">
            <div
              className="reveal-body h-[360px] w-full rounded-3xl bg-cover bg-center shadow-[0_4px_20px_rgba(18,44,81,0.08)] md:h-[460px] lg:h-[560px]"
              style={{
                backgroundImage: "url('/images/parent-anxiety-detail.png')",
              }}
              role="img"
              aria-label="Unresolved questions section image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
