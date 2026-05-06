import { Quote } from "lucide-react";

type Question = {
  prefix: string;
  emphasis: string;
  suffix: string;
  breakBefore?: boolean;
};

const questions: Question[] = [
  {
    prefix: "진도는 나가는데, ",
    emphasis: "왜",
    suffix: " 틀릴까?",
    breakBefore: true,
  },
  {
    prefix: "추론(Inference) 문제는 ",
    emphasis: "왜",
    suffix: " 막힐까?",
  },
  {
    prefix: "말은 잘하는데, ",
    emphasis: "왜",
    suffix: " 쓰기는 안될까?",
    breakBefore: true,
  },
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

            <p className="reveal-body mb-6 text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--text-steel)] md:mb-7">
              <span className="mr-3 inline-block h-px w-8 align-middle" style={{ background: "var(--accent-gold)" }} />
              학부모님께서 가장 자주 던지시는 질문
            </p>

            <div className="reveal-body mb-10 grid gap-4 sm:grid-cols-3 md:mb-12 md:gap-5">
              {questions.map((q, i) => (
                <article
                  key={q.prefix + q.suffix}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-[var(--border-hairline)] shadow-[0_8px_22px_rgba(18,44,81,0.06)] transition-all duration-400 hover:-translate-y-1.5 hover:ring-[var(--accent-gold)]/55 hover:shadow-[0_20px_44px_rgba(18,44,81,0.14)] md:p-7"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 top-0 h-[3px]"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--accent-gold) 0%, #E1C99A 60%, transparent 100%)",
                    }}
                  />

                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className="font-semibold leading-none tracking-tight text-[var(--accent-gold)]"
                      style={{ fontSize: "30px" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Quote
                      className="h-5 w-5 -scale-x-100 text-[var(--accent-gold)]/40 transition-colors duration-300 group-hover:text-[var(--accent-gold)]/65"
                      aria-hidden
                      strokeWidth={2}
                    />
                  </div>

                  <p
                    className="mb-4 text-[18px] font-semibold leading-[1.45] text-[var(--text-ink)] md:text-[19px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {q.prefix}
                    {q.breakBefore && <br className="hidden sm:block" />}
                    <span className="relative inline-block">
                      <span className="relative z-10 px-0.5 text-[var(--accent-gold)] transition-colors duration-300 group-hover:text-[var(--primary-navy)]">
                        {q.emphasis}
                      </span>
                      <span
                        aria-hidden
                        className="absolute bottom-[2px] left-0 right-0 z-0 h-[3px] origin-left scale-x-100 bg-[var(--accent-gold)]/20"
                      />
                    </span>
                    {q.suffix}
                  </p>

                  <div className="mt-auto flex items-center gap-2">
                    <span
                      aria-hidden
                      className="h-px w-6"
                      style={{ background: "var(--accent-gold)" }}
                    />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-steel)]">
                      Parent&apos;s voice
                    </span>
                  </div>
                </article>
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
