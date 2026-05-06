"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const linkItems = [
  { label: "공식카카오채널", href: "http://pf.kakao.com/_xdIwEn" },
  {
    label: "블로그",
    href: "https://blog.naver.com/PostList.naver?blogId=ym_career&from=postList&categoryNo=16",
  },
  { label: "인스타그램", href: "https://www.instagram.com/pls_eng_prep/" },
  { label: "오시는 길", href: "https://vide-coding-website.vercel.app/about/location" },
];

export default function Footer() {
  const pathname = usePathname();
  const isSubPage = pathname !== "/";
  const isExternalLink = (href: string) =>
    href.startsWith("http://") || href.startsWith("https://");

  return (
    <footer
      style={{
        backgroundColor: isSubPage
          ? "var(--primary-navy-dark)"
          : "var(--bg-canvas)",
      }}
    >
      <div
        className="h-px w-full opacity-60"
        style={{
          background:
            isSubPage
              ? "linear-gradient(90deg, transparent, rgba(212,180,131,0.8), transparent)"
              : "linear-gradient(90deg, transparent, var(--accent-gold), transparent)",
        }}
      />

      <div
        className="border-t py-12 md:py-14"
        style={{ borderColor: "var(--border-hairline)" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="space-y-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center transition-opacity duration-300 hover:opacity-80"
            >
              <Image
                src={
                  isSubPage
                    ? "/images/pls-logo-footer-invert.png"
                    : "/images/pls-logo.png"
                }
                alt="PLS영재교육 - Phillips Academy of Little Scholars"
                width={240}
                height={60}
                className="h-12 w-auto md:h-14"
              />
            </Link>

            <nav className="grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-3">
              {linkItems.map((link) =>
                isExternalLink(link.href) && link.label !== "오시는 길" ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-sm font-medium transition-colors duration-300 hover:text-[var(--accent-gold)] ${
                      isSubPage ? "text-white/85" : "text-[var(--text-charcoal)]"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-300 hover:text-[var(--accent-gold)] ${
                      isSubPage ? "text-white/85" : "text-[var(--text-charcoal)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <p
              className={`mb-0 flex items-center justify-center gap-x-2 whitespace-nowrap text-[12px] ${
                isSubPage ? "text-white/70" : "text-[var(--text-slate)]"
              }`}
            >
              <span>
                상담문의{" "}
                <a
                  href="tel:0234630010"
                  className={`font-medium transition-colors duration-300 hover:text-[var(--accent-gold)] ${
                    isSubPage ? "text-white" : "text-[var(--text-charcoal)]"
                  }`}
                >
                  02-3463-0010
                </a>
              </span>
              <span
                aria-hidden
                className="text-[var(--border-hairline)]"
                style={{ color: "var(--text-steel)" }}
              >
                ·
              </span>
              <span>
                이메일{" "}
                <a
                  href="mailto:support@plsprep.com"
                  className={`font-medium transition-colors duration-300 hover:text-[var(--accent-gold)] ${
                    isSubPage ? "text-white" : "text-[var(--text-charcoal)]"
                  }`}
                >
                  support@plsprep.com
                </a>
              </span>
            </p>

            <p
              className={`mb-0 text-[12px] leading-relaxed ${
                isSubPage ? "text-white/55" : "text-[var(--text-steel)]"
              }`}
            >
              <span className="block md:hidden">서울특별시강남서초교육지원청</span>
              <span className="block md:hidden">
                등록 제 15022호 피엘에스(PLS)영재교육학원
              </span>
              <span className="hidden md:block">
                서울특별시강남서초교육지원청 등록 제 15022호
                피엘에스(PLS)영재교육학원
              </span>
            </p>

            <p
              className={`mb-0 pt-1 text-[12px] leading-relaxed ${
                isSubPage ? "text-white/55" : "text-[var(--text-steel)]"
              }`}
            >
              <span className="block md:hidden">
                &copy; 2026 PLS영재교육. All rights reserved.
              </span>
              <span className="block md:hidden">
                Education for Gifted and Talented Children
              </span>
              <span className="hidden md:block">
                Education for Gifted and Talented Children &copy; 2026
                PLS영재교육. All rights reserved.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
