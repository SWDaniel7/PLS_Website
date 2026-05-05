"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [isFloating, setIsFloating] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const heroRef = useRef<HTMLElement>(null);

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
                href="#register"
                className="reveal-body group inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 bg-[var(--accent-gold)] text-[var(--primary-navy-dark)] rounded-full font-semibold text-xs sm:text-sm shadow-[0_4px_12px_rgba(11,28,57,0.18)] transition-all duration-300 hover:bg-[#c9a673] hover:shadow-[0_10px_24px_rgba(212,180,131,0.45)] hover:tracking-[0.02em] active:bg-[#b8985a] active:translate-y-[1px] active:scale-[0.98] active:shadow-[0_3px_10px_rgba(11,28,57,0.22)]"
              >
                대기등록
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-0" />
              </Link>
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

      {/* Floating Button - tuned for mobile visibility and touch feedback */}
      <Link
        href="#register"
        className={`group fixed right-4 sm:right-4 md:right-6 z-50 flex items-center gap-2 px-4 py-2.5 md:px-4 md:py-2.5 bg-[var(--accent-gold)] text-[var(--primary-navy-dark)] rounded-full font-semibold text-sm md:text-sm shadow-[0_12px_28px_rgba(11,28,57,0.24)] ring-1 ring-white/30 transition-[transform,opacity,background-color,box-shadow,letter-spacing] duration-300 md:hover:bg-[#c9a673] md:hover:shadow-[0_14px_32px_rgba(212,180,131,0.40)] md:hover:tracking-[0.02em] active:bg-[#c9a673] active:translate-y-[1px] active:scale-[0.98] active:shadow-[0_8px_20px_rgba(11,28,57,0.22)] ${
          isFloating 
            ? "bottom-[14vh] md:bottom-[14vh] opacity-100 translate-x-0" 
            : "bottom-[14vh] md:bottom-[14vh] opacity-0 translate-x-20 pointer-events-none"
        }`}
      >
        대기등록
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </>
  );
}
