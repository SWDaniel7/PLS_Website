"use client";

// 첫 화면 전용 «맨 위로» 단추. 기존 ScrollToTopButton 은 `/` 에서 동작하지 않으므로 같은 꼴로 따로 둡니다.

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function HomeScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > Math.max(280, window.innerHeight * 0.3));
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="페이지 상단으로 이동"
      tabIndex={visible ? 0 : -1}
      className={`group fixed right-4 bottom-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--primary-navy)] ring-1 ring-[var(--border-hairline)] shadow-[0_10px_22px_rgba(11,28,57,0.14)] backdrop-blur-sm transition-all duration-300 md:bottom-8 md:right-6 md:h-12 md:w-12 md:hover:text-[var(--accent-gold)] md:hover:ring-[var(--accent-gold)]/55 md:hover:shadow-[0_14px_30px_rgba(11,28,57,0.18)] md:hover:-translate-y-0.5 active:translate-y-[1px] active:scale-95 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-[15px] w-[15px] transition-transform duration-300 group-hover:-translate-y-0.5 md:h-[18px] md:w-[18px]" />
    </button>
  );
}
