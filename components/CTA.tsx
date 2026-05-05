import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="register" className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-navy-dark) 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 25%, rgba(212,180,131,0.10), transparent 50%), radial-gradient(circle at 80% 75%, rgba(242,239,233,0.06), transparent 55%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--accent-gold), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center md:px-8 md:py-28 lg:py-32">
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
          className="reveal-title mb-6 text-[28px] font-semibold leading-[1.3] tracking-[-0.02em] text-white md:text-4xl lg:text-[48px]"
          style={{ wordBreak: "keep-all" }}
        >
          우리 아이의 영재교육,
          <br />
          지금 시작하세요
        </h2>

        <p
          className="reveal-body mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
          style={{ wordBreak: "keep-all" }}
        >
          PLS와 함께 우리 아이의 가능성을 발견하고
          <br className="hidden sm:block" />
          맞춤형 교육으로 성장을 이끌어갑니다.
        </p>

        <Link
          href="#signup"
          className="reveal-body group inline-flex items-center gap-2 rounded-full bg-[var(--accent-gold)] px-9 py-4 text-base font-semibold text-[var(--primary-navy-dark)] shadow-[0_12px_32px_rgba(212,180,131,0.32)] transition-all duration-300 hover:bg-[#c9a673] hover:tracking-[0.02em] hover:shadow-[0_18px_44px_rgba(212,180,131,0.50)] active:bg-[#b8985a] active:translate-y-[1px] active:scale-[0.985] active:shadow-[0_8px_20px_rgba(212,180,131,0.35)]"
        >
          대기등록
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-0" />
        </Link>
      </div>
    </section>
  );
}
