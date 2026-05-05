export default function CoreProblemDarkSection() {
  return (
    <section
      className="section-padding py-16 md:py-24 lg:py-[100px]"
      style={{ backgroundColor: "var(--primary-navy)", color: "#FFFFFF" }}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="text-left" style={{ maxWidth: "900px" }}>
        <span className="section-kicker section-kicker--dark reveal-body mb-5">
          Core Principles
        </span>

        <h2
          className="reveal-title mb-10 font-semibold leading-[1.4] text-white md:mb-12"
          style={{
            fontSize: "clamp(24px, 4.2vw, 28px)",
            wordBreak: "keep-all",
          }}
        >
          이 모든 고민의 본질은,
          <br className="hidden sm:block" />
          초등 어학원 반 배치 평가가 더 이상
          <br className="hidden sm:block" />
          단순한 &apos;단어 공부&apos;나 &apos;리딩서 풀이 훈련&apos;만으로는 접근할 수 없는
          <br className="hidden sm:block" />
          <span
            style={{
              color: "var(--accent-gold)",
              fontSize: "clamp(27px, 4.6vw, 32px)",
            }}
          >
            고난도 문해력/사고력 평가
          </span>
          라는 데 있습니다.
        </h2>

        <div
          className="reveal-body space-y-8"
          style={{
            fontSize: "clamp(15px, 2.8vw, 17px)",
            lineHeight: 1.6,
            color: "rgba(255, 255, 255, 0.85)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            wordBreak: "keep-all",
          }}
        >
          <p className="mb-0 text-[rgba(255,255,255,0.85)]">
            초등 어학원 반 배치 수업은 단순히 글을 읽고 정답을 고르는 시험이 아닙니다.
            <br className="hidden sm:block" />
            <span style={{ color: "var(--accent-sand)", fontWeight: 500 }}>
              읽고 → 이해하고 → 추론하고 → 연결하고 → 자신의 언어로 표현하는
            </span>
            <br className="hidden sm:block" />전 과정의 사고 흐름을 평가하는 고난도 문해력
            시험입니다.
          </p>

          <p className="mb-0 text-[rgba(255,255,255,0.85)]">
            특히 요즘 독보적 인기를 얻고 있는 에디*과 같은 &apos;노블베이스 원&apos;은
            <br className="hidden sm:block" />
            리딩 지문 분량이 길고, Non-fiction 사고추론 문제 뿐 아니라
            <br className="hidden sm:block" />
            Fiction 에서의 감정·원인·관계 추론까지 복합적으로 요구하기 때문에
            <br className="hidden sm:block" />
            단순한 단어량이나 리딩서 진도만으로는 대비하기 어려운
            <br className="hidden sm:block" />
            고난도 사고형 문항들이 최신 기출로 꾸준히 출제되고 있습니다.
          </p>

          <p className="mb-0 font-medium text-white">
            지금 필요한 준비는 &apos;더 많이 푸는 것&apos;이 아니라,
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
