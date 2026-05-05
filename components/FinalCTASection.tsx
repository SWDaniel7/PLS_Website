"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section id="final-cta" className="cta-section">
      <div className="cta-container">
        <div className="reveal-body mb-8 flex items-center justify-center gap-3">
          <span
            className="h-px w-12"
            style={{ background: "rgba(212,180,131,0.55)" }}
          />
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--accent-gold)" }}
          />
          <span
            className="h-px w-12"
            style={{ background: "rgba(212,180,131,0.55)" }}
          />
        </div>

        <h2
          className="reveal-title mb-10 font-semibold text-white"
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            lineHeight: 1.4,
            letterSpacing: "-0.02em",
            wordBreak: "keep-all",
          }}
        >
          &ldquo;지금 우리 아이에게 필요한 건,
          <br />
          더 많은 수업이 아니라{" "}
          <span style={{ color: "var(--accent-gold)" }}>
            &lsquo;정확한 방향&rsquo;
          </span>
          입니다.&rdquo;
        </h2>

        <p
          className="reveal-body mb-4"
          style={{
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.9)",
            wordBreak: "keep-all",
          }}
        >
          아이의 현재 위치와 다음 단계가 궁금하시다면, 사전 상담을 통해 정확히
          진단받아보세요.
        </p>
        <p
          className="reveal-body mb-14"
          style={{
            fontSize: "15px",
            color: "rgba(255, 255, 255, 0.6)",
            wordBreak: "keep-all",
          }}
        >
          등록 대기 문의가 많아서 접수 순으로 순차 상담 진행 도움드리는 점 양해
          부탁드립니다.
        </p>

        <Link href="#register" className="cta-button reveal-body">
          <span>상담 신청하기</span>
          <ArrowRight
            className="h-5 w-5"
            aria-hidden
            strokeWidth={2.25}
          />
        </Link>
      </div>
    </section>
  );
}
