"use client";

// 홈을 제외한 페이지에서 메인과 동일한 스타일로 상단 이동 버튼을 표시합니다.

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function shouldShowScrollTop(): boolean {
  if (typeof window === "undefined") return false;
  const y = window.scrollY;
  const vh = window.innerHeight;
  return y > Math.max(280, vh * 0.3);
}

export default function ScrollToTopButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname === "/") return;

    const onScroll = () => {
      setVisible(shouldShowScrollTop());
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (pathname === "/") return null;

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label="페이지 상단으로 이동"
      className={`group fixed right-4 bottom-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--primary-navy)] ring-1 ring-[var(--border-hairline)] shadow-[0_10px_22px_rgba(11,28,57,0.14)] backdrop-blur-sm transition-all duration-300 md:bottom-8 md:right-6 md:h-12 md:w-12 md:hover:text-[var(--accent-gold)] md:hover:ring-[var(--accent-gold)]/55 md:hover:shadow-[0_14px_30px_rgba(11,28,57,0.18)] md:hover:-translate-y-0.5 active:translate-y-[1px] active:scale-95 ${
        visible
          ? "opacity-100 translate-y-0"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-[15px] w-[15px] transition-transform duration-300 group-hover:-translate-y-0.5 md:h-[18px] md:w-[18px]" />
    </button>
  );
}
