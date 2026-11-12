"use client";

// 바로 앞 형제 요소의 글(메일 주소)을 복사하는 작은 단추. /research 페이지에서 씁니다.
// 복사되면 «복사됨», 복사가 막히면 주소를 선택하고 «선택됨», 1.6초 뒤 «복사» 로 돌아옵니다.

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  ariaLabel: string;
};

export default function CopyButton({ text, ariaLabel }: Props) {
  const [label, setLabel] = useState("복사");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const flash = (next: string) => {
    setLabel(next);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setLabel("복사"), 1600);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.previousElementSibling;
    const fallback = () => {
      try {
        if (target) {
          const range = document.createRange();
          range.selectNodeContents(target);
          const selection = window.getSelection();
          selection?.removeAllRanges();
          selection?.addRange(range);
        }
      } catch {}
      flash("선택됨");
    };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => flash("복사됨"), fallback);
      } else {
        fallback();
      }
    } catch {
      fallback();
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="flex-none cursor-pointer border-0 bg-transparent p-0 text-[13.5px] font-semibold text-[var(--primary-navy)] underline decoration-[var(--accent-gold)] decoration-2 underline-offset-4 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--accent-gold)]"
    >
      {label}
    </button>
  );
}
