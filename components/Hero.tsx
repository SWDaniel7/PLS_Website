"use client";

import { ArrowRight, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [isFloating, setIsFloating] = useState(false);
  const [isUpVisible, setIsUpVisible] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (buttonRef.current && heroRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const heroRect = heroRef.current.getBoundingClientRect();

        const pastHero =
          buttonRect.bottom < 100 ||
          heroRect.bottom < window.innerHeight * 0.5;

        const ctaEl = document.getElementById("final-cta");
        const ctaReached = ctaEl
          ? ctaEl.getBoundingClientRect().top < window.innerHeight * 0.85
          : false;

        setIsFloating(pastHero && !ctaReached);
        setIsUpVisible(pastHero);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-between">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat [background-position:65%_30%] md:[background-position:50%_50%]"
          style={{
            backgroundImage: "url('/images/hero-students.png')",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(11,28,57,0.78) 0%, rgba(11,28,57,0.50) 40%, rgba(11,28,57,0.22) 70%, rgba(11,28,57,0.05) 100%)",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="max-w-lg">
              <h1
                className="reveal-title text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-semibold text-white leading-[1.25] tracking-[-0.02em] mb-4 md:mb-6"
                style={{ wordBreak: "keep-all" }}
              >
                어머님, 지금까지
                <br />
                혼자 고민 많으셨죠?
              </h1>
              <p className="reveal-body text-sm sm:text-base md:text-lg text-white/80 mb-6 md:mb-8 leading-relaxed">
                이제 우리 아이의 초등 어학원 준비,
                <br />
                저희가 부모님과 함께하겠습니다.
              </p>
              <Link
                ref={buttonRef}
                href="#final-cta"
                className="reveal-body group inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 bg-[var(--accent-gold)] text-[var(--primary-navy-dark)] rounded-full font-semibold text-xs sm:text-sm shadow-[0_4px_12px_rgba(11,28,57,0.18)] transition-all duration-300 hover:bg-[#c9a673] hover:shadow-[0_10px_24px_rgba(212,180,131,0.45)] hover:tracking-[0.02em] active:bg-[#b8985a] active:translate-y-[1px] active:scale-[0.98] active:shadow-[0_3px_10px_rgba(11,28,57,0.22)]"
              >
                대기 상담
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-0" />
              </Link>
              <p
                className="reveal-body mt-3.5 flex items-center gap-2 text-[12px] sm:text-[13px] tracking-[-0.005em] text-white/75"
                style={{ wordBreak: "keep-all" }}
              >
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ background: "var(--accent-gold)" }}
                />
                잔여 TO는 접수 순서대로 우선 안내드립니다
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="relative z-10 w-full border-t border-white/20">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-4 md:py-6">
            <p className="text-xs sm:text-sm tracking-[0.15em] text-white/60 font-light uppercase text-center md:text-left">
              Education for Gifted and talented children
            </p>
          </div>
        </div>
      </section>

      {/* Primary CTA — mid-right floating */}
      <Link
        href="#final-cta"
        className={`group fixed right-4 md:right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[var(--accent-gold)] text-[var(--primary-navy-dark)] font-semibold px-4 py-2.5 text-sm md:px-6 md:py-3.5 md:text-[15px] shadow-[0_12px_28px_rgba(11,28,57,0.24)] ring-1 ring-white/30 transition-[opacity,transform,background-color,box-shadow,letter-spacing] duration-300 md:hover:bg-[#c9a673] md:hover:shadow-[0_16px_36px_rgba(212,180,131,0.45)] md:hover:tracking-[0.02em] md:hover:-translate-y-0.5 active:bg-[#c9a673] active:translate-y-[1px] active:scale-[0.98] active:shadow-[0_8px_20px_rgba(11,28,57,0.22)] ${
          isFloating
            ? "bottom-[14vh] opacity-100 translate-x-0"
            : "bottom-[14vh] opacity-0 translate-x-20 pointer-events-none"
        }`}
      >
        대기 상담
        <ArrowRight className="w-3.5 h-3.5 md:w-[18px] md:h-[18px] transition-transform duration-300 group-hover:translate-x-1" />
      </Link>

      {/* Scroll-to-top — bottom-right corner, independent visibility */}
      <button
        type="button"
        onClick={handleScrollToTop}
        aria-label="페이지 상단으로 이동"
        className={`group fixed right-4 md:right-6 bottom-6 md:bottom-8 z-50 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white text-[var(--primary-navy)] ring-1 ring-[var(--border-hairline)] shadow-[0_10px_22px_rgba(11,28,57,0.14)] backdrop-blur-sm transition-all duration-300 md:hover:text-[var(--accent-gold)] md:hover:ring-[var(--accent-gold)]/55 md:hover:shadow-[0_14px_30px_rgba(11,28,57,0.18)] md:hover:-translate-y-0.5 active:translate-y-[1px] active:scale-95 ${
          isUpVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-[15px] h-[15px] md:w-[18px] md:h-[18px] transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
    </>
  );
}
