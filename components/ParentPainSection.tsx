"use client";

import { useEffect, useRef } from "react";

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

export default function ParentPainSection() {
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
    <section id="pain-point" className="bg-[var(--bg-canvas)] py-16 md:py-24 lg:py-[100px]">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <span className="section-kicker reveal-body mb-4">Parent&apos;s Anxiety</span>
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

            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div
                  key={point.title}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  data-index={index}
                  className="group reveal-body relative translate-y-5 overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-white p-6 opacity-0 shadow-[0_2px_10px_rgba(18,44,81,0.04)] transition-[background-color,border-color,box-shadow,opacity,transform] duration-500 ease-out hover:bg-[var(--primary-navy)] hover:border-[var(--primary-navy)] hover:shadow-[0_14px_32px_rgba(11,28,57,0.22)] md:p-7"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-5 bottom-5 w-[3px] rounded-r-full bg-[var(--accent-gold)]/25 transition-all duration-500 ease-out group-hover:bg-[var(--accent-gold)] group-hover:top-3 group-hover:bottom-3"
                  />
                  <div className="flex items-start gap-5">
                    <span
                      className="mt-0.5 shrink-0 font-semibold leading-none tabular-nums text-[var(--accent-gold)]"
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

          <div className="order-first self-start lg:order-none lg:col-span-2 lg:sticky lg:top-28">
            <div
              className="h-[360px] w-full rounded-3xl bg-cover bg-center shadow-[0_4px_20px_rgba(18,44,81,0.08)] md:h-[460px] lg:h-[720px]"
              style={{
                backgroundImage: "url('/images/parent-anxiety.png')",
              }}
              aria-label="학부모 고민을 상징하는 이미지"
              role="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
