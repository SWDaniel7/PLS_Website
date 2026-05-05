"use client";

export default function DataDrivenExpertiseSection() {
  return (
    <section
      className="section-padding py-16 md:py-24 lg:py-[100px]"
      style={{ backgroundColor: "var(--bg-canvas)" }}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <span className="section-kicker reveal-body mb-4">
              Data-Driven Expertise
            </span>
            <h2
              className="reveal-title mb-8 text-3xl font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--text-ink)] md:text-5xl"
              style={{ wordBreak: "keep-all" }}
            >
              PLS영재교육의 경쟁력은
              <br />
              <span className="highlight highlight-light">
                데이터에 기반한 '원서 중심 맞춤 전략'
              </span>
              에 있습니다.
            </h2>

            <p
              className="reveal-body mb-5 text-base leading-relaxed text-[var(--text-slate)] md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              PLS영재교육의 모든 강사진은 유아기 언어 발달과 영어 교수법, 그리고{" "}
              <strong>원서 기반 문해력 교육에 정통한 전문가</strong>들로 구성되어
              있습니다.
            </p>
            <p
              className="reveal-body mb-5 text-base leading-relaxed text-[var(--text-slate)] md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              단순한 영어 수업이 아닌, Reading-Inference-Integration-Expression
              으로 이어지는 통합사고형 원서수업을 아이의 발달 시점과 사고 구조에
              맞게 체계적으로 설계합니다.
            </p>
            <p
              className="reveal-body mb-0 text-base leading-relaxed text-[var(--text-slate)] md:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              또한 영어권 국가에서 가장 효과적인 언어교습 모델로 입증된 '원서수업
              교수법'을 비롯해, 국내외 논문과 학습 데이터를 지속적으로 분석하여 각
              아동의 언어·사고 반응 패턴을 정밀하게 모델링하고,{" "}
              <strong>지금 내 아이에게 가장 적합한 원서와 교수 전략을 제공합니다.</strong>
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="reveal-body overflow-hidden rounded-3xl border border-[var(--border-hairline)] bg-[var(--bg-surface-soft)] p-5 shadow-[var(--shadow-subtle)] md:p-6">
              <p className="mb-4 text-[12px] font-semibold tracking-[0.16em] text-[var(--text-steel)] uppercase">
                Student Insight Dashboard
              </p>
              <div className="space-y-4">
                <div className="rounded-2xl bg-white p-4">
                  <p className="mb-2 text-sm font-semibold text-[var(--text-ink)]">
                    Reading-Inference-Integration-Expression
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {["R", "I", "I", "E"].map((k, idx) => (
                      <div
                        key={`${k}-${idx}`}
                        className="rounded-xl bg-[var(--bg-surface-soft)] px-2 py-3 text-center text-xs font-semibold text-[var(--primary-navy)]"
                      >
                        {k}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <p className="mb-3 text-sm font-semibold text-[var(--text-ink)]">
                    Growth Tracking
                  </p>
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-[var(--bg-surface-soft)]">
                      <div className="h-2 w-[76%] rounded-full bg-[var(--primary-navy)]" />
                    </div>
                    <div className="h-2 rounded-full bg-[var(--bg-surface-soft)]">
                      <div className="h-2 w-[63%] rounded-full bg-[var(--accent-gold)]" />
                    </div>
                    <div className="h-2 rounded-full bg-[var(--bg-surface-soft)]">
                      <div className="h-2 w-[82%] rounded-full bg-[var(--primary-navy)]" />
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <p className="mb-2 text-sm font-semibold text-[var(--text-ink)]">
                    Monthly Report Snapshot
                  </p>
                  <p className="mb-0 text-sm leading-relaxed text-[var(--text-slate)]">
                    영역별 정량 데이터와 정성 관찰 데이터를 함께 해석해, 현재 위치와
                    다음 성장 방향을 한 화면에서 확인할 수 있도록 설계됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
