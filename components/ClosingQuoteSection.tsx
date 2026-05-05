"use client";

export default function ClosingQuoteSection() {
  return (
    <section
      className="section-padding py-16 text-center md:py-24 lg:py-[100px]"
      style={{ backgroundColor: "var(--primary-navy)", color: "#FFFFFF" }}
    >
      <div className="mx-auto max-w-[800px] px-6 md:px-8">
        <div
          className="reveal-body mb-5 text-[60px] leading-none"
          style={{ color: "var(--accent-gold)", fontFamily: "serif" }}
        >
          "
        </div>
        <p
          className="reveal-title mb-0 text-[24px] font-medium leading-[1.6] text-white md:text-[28px]"
          style={{ wordBreak: "keep-all" }}
        >
          어머님,
          <br />
          아이의 초등 어학원 결과를 결정짓는 건
          <br />
          과도한 학습량도, 타고난 재능의 차이도 아닙니다.
          <br />
          결국,{" "}
          <span style={{ color: "var(--accent-gold)" }}>
            검증된 교수법과 맞춤 전략의 차이
          </span>
          입니다.
        </p>
      </div>
    </section>
  );
}
