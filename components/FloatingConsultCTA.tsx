"use client";

// About PLS 하위 페이지에서 메인과 동일한 카카오 대기 상담 플로팅 버튼을 표시합니다.

import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function isAboutPlsSubPage(pathname: string): boolean {
  return pathname.startsWith("/about/") || pathname === "/notice";
}

export default function FloatingConsultCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isAboutPlsSubPage(pathname)) return;

    const update = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const threshold = Math.max(280, vh * 0.3);
      const pastThreshold = y > threshold;

      const footer = document.getElementById("site-footer");
      let nearFooter = false;
      if (footer) {
        const top = footer.getBoundingClientRect().top;
        nearFooter = top < vh * 0.92;
      }

      setVisible(pastThreshold && !nearFooter);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  if (!isAboutPlsSubPage(pathname)) return null;

  return (
    <a
      href="https://pf.kakao.com/_xdIwEn"
      target="_blank"
      rel="noopener noreferrer"
      className={`group fixed bottom-[14vh] right-4 z-50 inline-flex items-center gap-2 md:gap-2.5 rounded-full bg-[var(--accent-gold)] px-5 py-3 text-sm font-semibold text-[var(--primary-navy-dark)] shadow-[0_14px_36px_rgba(11,28,57,0.32)] ring-2 ring-[var(--primary-navy)]/25 transition-[opacity,transform,background-color,box-shadow,letter-spacing] duration-300 md:right-6 md:px-7 md:py-4 md:text-[15px] md:hover:-translate-y-0.5 md:hover:bg-[#c9a673] md:hover:tracking-[0.02em] md:hover:shadow-[0_18px_44px_rgba(212,180,131,0.55)] active:translate-y-[1px] active:scale-[0.98] active:bg-[#c9a673] active:shadow-[0_8px_20px_rgba(11,28,57,0.22)] ${
        visible
          ? "translate-x-0 opacity-100"
          : "pointer-events-none translate-x-20 opacity-0"
      }`}
    >
      <span
        aria-hidden
        className="floating-cta-halo pointer-events-none absolute -inset-2 rounded-full -z-10"
      />
      <MessageCircle className="h-4 w-4 md:h-[18px] md:w-[18px]" strokeWidth={2.2} />
      대기 상담
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 md:h-[18px] md:w-[18px]" />
    </a>
  );
}
