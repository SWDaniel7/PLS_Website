export default function CoreProblemSection() {
  return (
    <section
      className="section-padding py-16 md:py-24 lg:py-[100px]"
      style={{ backgroundColor: "var(--bg-canvas)" }}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div
          className="text-left"
          style={{ maxWidth: "840px", marginLeft: 0, marginRight: 0 }}
        >
          <span className="section-kicker reveal-body mb-5">Core Problem</span>

          <h2
            className="reveal-title mb-8 text-[28px] font-semibold text-[var(--text-ink)] md:text-[40px]"
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

          <div
            className="reveal-body space-y-4 text-[var(--text-charcoal)]"
            style={{ fontSize: "17px", lineHeight: 1.6, wordBreak: "keep-all" }}
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

          <blockquote
            className="reveal-body my-12"
            style={{
              backgroundColor: "var(--bg-surface-soft)",
              borderLeft: "4px solid var(--primary-navy)",
              padding: "32px 40px",
              borderRadius: "0 16px 16px 0",
              wordBreak: "keep-all",
            }}
          >
            <p
              className="text-[var(--text-charcoal)]"
              style={{
                marginBottom: "16px",
                fontSize: "17px",
                lineHeight: 1.6,
              }}
            >
              특히 매년 초등 어학원 준비 난이도가 높아질수록 &apos;지금 준비
              방식이 맞는가?&apos;라는 고민은 더 커질 수밖에 없습니다. 이건
              부모님의 잘못이 아니라,
            </p>
            <p
              style={{
                fontSize: "19px",
                fontWeight: 600,
                color: "var(--primary-navy)",
                marginBottom: 0,
                lineHeight: 1.5,
              }}
            >
              양적으로 문제집만 많이 푸는 방식이
              <br className="hidden sm:block" />
              아이의 본질적인 실력향상으로 이어지지 못하는 데서 생기는 당연한
              불안입니다.
            </p>
          </blockquote>

          <div
            className="reveal-body text-[var(--text-charcoal)]"
            style={{ fontSize: "17px", lineHeight: 1.6, wordBreak: "keep-all" }}
          >
            <p className="mb-0">
              그래서 지금 필요한 건 더 많은 특강이나 빠른 진도가 아니라,
              <br className="hidden sm:block" />
              <span
                style={{ fontWeight: 600, color: "var(--text-ink)" }}
              >
                우리 아이가 어디에서 이해하고, 어디에서 사고가 멈추는지{" "}
                <span className="highlight highlight-light">
                  &apos;정확히 읽어내는 것&apos;.
                </span>
              </span>
            </p>
          </div>

          <p
            className="reveal-title"
            style={{
              marginTop: "48px",
              fontSize: "24px",
              fontWeight: 600,
              color: "var(--primary-navy-dark)",
              marginBottom: 0,
              lineHeight: 1.5,
              wordBreak: "keep-all",
            }}
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
