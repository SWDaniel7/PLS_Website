"use client";
// 학부모 불안·질문·진단 내러티브를 한 섹션으로 통합한 홈 전용 블록.

import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const painPoints = [
  {
    title: "진도는 나가지만 제자리걸음인 실력",
    description:
      "프렙에서 브릭스 진도는 계속 나가는데, 정답률은 오락가락. 왜 아이 실력은 제자리걸음 같을까?",
  },
  {
    title: "쓰기로 연결되지 않는 단어 학습",
    description:
      "단어는 정말 많이 외우고 있는데, 왜 쓰기나 말하기로는 거의 연결이 안될까?",
  },
  {
    title: "필수라 불리는 선행의 굴레",
    description:
      "특강도 선행진도도 다들 필수라고 하는데, 이게 정말 필요한 걸까?",
  },
  {
    title: "심화되는 학습 난이도",
    description:
      "매년 내용이 더 어려워진다는데, 이대로 괜찮은 걸까? 내가 뭘 더 해야 하는 걸까?",
  },
];

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

export default function ParentConcernSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLDivElement;
          const delayIndex = Number(target.dataset.index ?? "0");
          window.setTimeout(() => {
            target.classList.add("opacity-100", "translate-y-0");
          }, delayIndex * 120);

          observer.unobserve(target);
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pain-point" className="scroll-mt-24 md:scroll-mt-16">
      {/* 블록 1–2: 캔버스 배경 */}
      <div className="bg-[var(--bg-canvas)] pt-16 md:pt-24 lg:pt-[100px] pb-12 md:pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          {/* 블록 1 — 오프닝 */}
          <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-14">
            <div className="order-2 lg:order-1 lg:col-span-3">
              <span className="section-kicker reveal-body mb-4">
                Parent&apos;s Anxiety
              </span>
              <p className="reveal-body mb-2 text-base text-[var(--text-slate)]">
                우리 아이 초등 어학원 배정 준비,
              </p>
              <h2 className="reveal-title mb-0 text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--text-ink)] md:text-5xl">
                프렙 보내면 될 줄 알았는데..
                <br />
                <span className="highlight highlight-light">
                  왜 불안은 그대로일까요?
                </span>
              </h2>
            </div>

            <div className="order-1 self-start lg:order-2 lg:col-span-2">
              <div
                className="h-[320px] w-full rounded-3xl bg-cover bg-center shadow-[0_4px_20px_rgba(18,44,81,0.08)] md:h-[420px] lg:h-[520px]"
                style={{
                  backgroundImage: "url('/images/parent-anxiety.png')",
                }}
                aria-label="학부모 고민을 상징하는 이미지"
                role="img"
              />
            </div>
          </div>

          {/* 블록 2 — 4개 고민 카드 */}
          <div className="mt-20 md:mt-28">
            <p
              className="reveal-body mb-8 max-w-2xl text-base leading-relaxed text-[var(--text-slate)] md:mb-10 md:text-[17px]"
              style={{ wordBreak: "keep-all" }}
            >
              많은 학부모님이 이런 지점에서 멈춰 섭니다.
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
              {painPoints.map((point, index) => (
                <div
                  key={point.title}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  data-index={index}
                  className="group relative translate-y-5 overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-white p-6 opacity-0 shadow-[0_2px_10px_rgba(18,44,81,0.04)] transition-[background-color,border-color,box-shadow,opacity,transform] duration-500 ease-out hover:bg-[var(--primary-navy)] hover:border-[var(--primary-navy)] hover:shadow-[0_14px_32px_rgba(11,28,57,0.22)] md:p-7"
                >
                  <span
                    aria-hidden
                    className="absolute bottom-5 left-0 top-5 w-[3px] rounded-r-full bg-[var(--accent-gold)]/25 transition-all duration-500 ease-out group-hover:bg-[var(--accent-gold)] group-hover:top-3 group-hover:bottom-3"
                  />
                  <div className="flex flex-col gap-4">
                    <span
                      className="font-semibold leading-none tabular-nums text-[var(--accent-gold)]"
                      style={{ fontSize: "26px", letterSpacing: "-0.02em" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3
                        className="mb-1.5 text-[17px] font-semibold leading-[1.35] text-[var(--text-ink)] transition-colors duration-500 ease-out group-hover:text-white md:text-[18px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {point.title}
                      </h3>
                      <p
                        className="mb-0 text-[14.5px] leading-[1.65] text-[var(--text-slate)] transition-colors duration-500 ease-out group-hover:text-white/80 md:text-[15px]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 블록 3–4: 소프트 배경 (풀블리드) */}
      <div className="mt-24 bg-[var(--bg-surface-soft)] pb-16 pt-16 md:mt-32 md:pb-24 md:pt-20 lg:pb-[100px] lg:pt-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          {/* 블록 3 — 질문 카드 */}
          <span className="section-kicker reveal-body mb-4">
            Unresolved Questions
          </span>

          <h2 className="reveal-title mb-6 text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--text-ink)] md:text-5xl">
            그동안 이런 고민,
            <br />
            <span className="highlight highlight-light">
              누구에게 물어봐야 할지 막막하셨죠?
            </span>
          </h2>

          <p className="reveal-body mb-6 text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--text-steel)] md:mb-7">
            <span
              className="mr-3 inline-block h-px w-8 align-middle"
              style={{ background: "var(--accent-gold)" }}
            />
            학부모님께서 가장 자주 던지시는 질문
          </p>

          <div className="reveal-body mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mb-14 md:gap-5">
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

          {/* 블록 4 — 진단 + 마무리 */}
          <p className="reveal-body mx-auto mb-8 max-w-3xl text-center text-base leading-relaxed text-[var(--text-slate)] md:mb-10 md:text-[17px]">
            진도는 계속 나가는데, 정작 아이가 &apos;왜&apos; 틀리는지, 어디에서 막히는지 설명
            들은 적 거의 없으셨죠?
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
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

          <p className="reveal-body mx-auto mt-10 max-w-3xl text-center text-base font-medium leading-relaxed text-[var(--primary-navy)] md:mt-12 md:text-lg">
            부모님께서는 이런 핵심적인 설명을 정확히 들을 기회가 거의 없으셨을 거예요.
          </p>
        </div>
      </div>
    </section>
  );
}
