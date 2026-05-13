// Hero 직후 학부모의 핵심 질문을 한 화면으로 모아 Core Problem 진단으로 넘기는 인트로 후속 섹션.
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
    suffix: " 쓰기는 안 될까?",
    breakBefore: true,
  },
];

export default function ParentAnxietySection() {
  return (
    <section
      id="parent-anxiety"
      className="py-16 md:py-24 lg:py-[100px]"
      style={{ backgroundColor: "var(--bg-canvas)" }}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <span className="section-kicker reveal-body mb-4">
              Parent&apos;s Anxiety
            </span>
            <p className="mb-2 text-base text-[var(--text-slate)]">
              우리 아이 초등 어학원 배정 준비,
            </p>
            <h2 className="reveal-title mb-8 text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--text-ink)] md:mb-10 md:text-5xl">
              프렙 보내면 될 줄 알았는데..
              <br />
              <span className="highlight highlight-light">
                왜 불안은 그대로일까요?
              </span>
            </h2>

            <p className="reveal-body mb-6 flex items-center text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--text-steel)] md:mb-7">
              <span
                aria-hidden
                className="mr-3 inline-block h-px w-8"
                style={{ background: "var(--accent-gold)" }}
              />
              학부모님께서 가장 자주 던지시는 질문
            </p>

            <div className="reveal-body mb-10 grid gap-4 sm:grid-cols-3 md:mb-12 md:gap-5">
              {questions.map((q, i) => (
                <article
                  key={q.prefix + q.suffix}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-[var(--border-hairline)] shadow-[0_8px_22px_rgba(18,44,81,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:ring-[var(--accent-gold)]/55 hover:shadow-[0_20px_44px_rgba(18,44,81,0.14)] md:p-7"
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

            <div
              className="reveal-body rounded-2xl border-l-[3px] bg-[var(--bg-surface-soft)] px-6 py-6 md:px-7 md:py-7"
              style={{ borderColor: "var(--primary-navy)" }}
            >
              <p
                className="mb-3 text-[15.5px] leading-[1.75] text-[var(--text-charcoal)] md:text-[16.5px]"
                style={{ wordBreak: "keep-all" }}
              >
                진도, 단어량, 풀어 본 문제집 수는 보여도{" "}
                <span className="font-semibold text-[var(--primary-navy)]">
                  &apos;왜&apos; 막히는지
                </span>
                는 누구도 정확히 짚어주지 않기 때문입니다.
              </p>
              <p
                className="mb-0 text-[15px] font-semibold leading-[1.6] text-[var(--primary-navy)]"
                style={{ wordBreak: "keep-all" }}
              >
                그래서 다음 한 가지를 먼저 짚어야 합니다.
              </p>
            </div>
          </div>

          <div className="order-first self-start lg:order-none lg:col-span-2 lg:sticky lg:top-28">
            <div
              className="reveal-body h-[360px] w-full rounded-3xl bg-cover bg-center shadow-[0_4px_20px_rgba(18,44,81,0.08)] md:h-[460px] lg:h-[640px]"
              style={{
                backgroundImage: "url('/images/parent-anxiety.png')",
              }}
              role="img"
              aria-label="학부모 고민을 상징하는 이미지"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
