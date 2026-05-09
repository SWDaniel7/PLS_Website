"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    label: "About PLS",
    href: "#about",
    submenus: [
      { label: "기관소개", href: "/about/intro" },
      { label: "강사소개", href: "/about/faculty" },
      { label: "공지사항", href: "/notice" },
      { label: "위치&주차", href: "/about/location" },
    ],
  },
  {
    label: "재원생 성과",
    href: "/#case",
    submenus: [],
  },
  {
    label: "RIIE Framework",
    href: "/#riie",
    submenus: [],
  },
  {
    label: "입시정보/칼럼",
    href: "https://blog.naver.com/PostList.naver?blogId=ym_career&from=postList&categoryNo=16",
    submenus: [],
  },
  {
    label: "대기 상담",
    href: "http://pf.kakao.com/_xdIwEn",
    submenus: [],
  },
];

type EnrollmentStatus = {
  currentMonth: number;
  nextMonth: number;
  toCount: number;
  isClosed: boolean;
};

function getEnrollmentStatus(): EnrollmentStatus {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
  const day = now.getDay();

  let toCount = 3;
  let isClosed = false;

  if (day === 6) {
    toCount = 0;
    isClosed = true;
  } else if (day === 5) {
    toCount = 1;
  } else if (day === 4 || day === 3) {
    toCount = 2;
  }

  return { currentMonth, nextMonth, toCount, isClosed };
}

export default function Header() {
  const MOBILE_MENU_TOP_ADJUST_PX = 4;
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const isSubPage = pathname !== "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const [mobileMenuTop, setMobileMenuTop] = useState(88);
  const { currentMonth, nextMonth, toCount, isClosed } = getEnrollmentStatus();
  const isStatusBarVisible = isScrolled || isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const updateMobileMenuTop = () => {
      const nextTop = headerRef.current?.getBoundingClientRect().height ?? 88;
      setMobileMenuTop(Math.round(nextTop + MOBILE_MENU_TOP_ADJUST_PX));
    };
    updateMobileMenuTop();
    window.addEventListener("resize", updateMobileMenuTop);
    return () => window.removeEventListener("resize", updateMobileMenuTop);
  }, [isScrolled, isMobileMenuOpen]);

  const toggleMobileSubmenu = (label: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === label ? null : label);
  };
  const isExternalLink = (href: string) =>
    href.startsWith("http://") || href.startsWith("https://");

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
        {/* Top status bar — admissions urgency (visible only when scrolled) */}
        <div
          className={`overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-out ${
            isStatusBarVisible
              ? "max-h-[60px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
          }`}
          aria-hidden={!isStatusBarVisible}
        >
          <a
            href="http://pf.kakao.com/_xdIwEn"
            target="_blank"
            rel="noreferrer"
            tabIndex={isStatusBarVisible ? 0 : -1}
            className="block bg-[var(--primary-navy-dark)] text-white transition-colors duration-300 hover:bg-[#0a1830]"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 px-4 py-1.5 md:py-2">
              <span className="status-dot" aria-hidden />
              {isClosed ? (
                <>
                  <span
                    className="hidden sm:inline text-[12px] md:text-[13px] tracking-[-0.005em]"
                    suppressHydrationWarning
                  >
                    <span className="font-semibold text-[var(--accent-gold)]">
                      {nextMonth}월 등록 대기 리스트
                    </span>
                    <span className="mx-2 text-white/35">·</span>
                    <span className="text-white/95">
                      이번 주 트라이얼 마감 - 다음 주 월요일 접수 재개
                    </span>
                  </span>
                  <span
                    className="sm:hidden text-[11.5px] tracking-[-0.005em]"
                    suppressHydrationWarning
                  >
                    <span className="font-semibold text-[var(--accent-gold)]">
                      {nextMonth}월 등록 대기 리스트
                    </span>
                    <span className="mx-1.5 text-white/35">·</span>
                    <span className="text-white/95">
                      이번 주 트라이얼 마감 - 다음 주 월요일 접수 재개
                    </span>
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="hidden sm:inline text-[12px] md:text-[13px] tracking-[-0.005em]"
                    suppressHydrationWarning
                  >
                    <span className="font-semibold text-[var(--accent-gold)]">
                      {nextMonth}월 등록 대기 리스트
                    </span>
                    <span className="mx-2 text-white/35">·</span>
                    <span className="text-white/95">
                      이번 주 트라이얼 클래스 잔여 여석{" "}
                      <span className="font-semibold text-[var(--accent-gold)]">
                        {toCount}석
                      </span>
                    </span>
                  </span>
                  <span
                    className="sm:hidden text-[11.5px] tracking-[-0.005em]"
                    suppressHydrationWarning
                  >
                    <span className="font-semibold text-[var(--accent-gold)]">
                      {nextMonth}월 등록 대기 리스트
                    </span>
                    <span className="mx-1.5 text-white/35">·</span>
                    <span className="text-white/95">
                      이번 주 트라이얼 클래스 잔여 여석{" "}
                      <span className="font-semibold text-[var(--accent-gold)]">
                        {toCount}석
                      </span>
                    </span>
                  </span>
                </>
              )}
            </div>
          </a>
        </div>

        <div
          className={`transition-all duration-300 ${
            isScrolled || isMobileMenuOpen
              ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
              : "bg-transparent py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/pls-logo.png"
              alt="PLS영재교육 - Phillips Academy of Little Scholars"
              width={180}
              height={45}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {isExternalLink(item.href) ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-1.5 py-2 text-sm font-medium transition-colors duration-300 relative
                      ${
                        isSubPage
                          ? "text-[#2F3E5F]"
                          : isScrolled || isMobileMenuOpen
                            ? "text-[#2F3E5F]"
                            : "text-white drop-shadow-[0_1px_2px_rgba(11,28,57,0.45)]"
                      }
                      hover:text-[#D4B483]
                    `}
                  >
                    {item.label}
                    {/* Hover underline effect */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4B483] transition-all duration-300 group-hover:w-full" />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 py-2 text-sm font-medium transition-colors duration-300 relative
                      ${
                        isSubPage
                          ? "text-[#2F3E5F]"
                          : isScrolled || isMobileMenuOpen
                            ? "text-[#2F3E5F]"
                            : "text-white drop-shadow-[0_1px_2px_rgba(11,28,57,0.45)]"
                      }
                      hover:text-[#D4B483]
                    `}
                  >
                    {item.label}
                    {item.submenus.length > 0 && (
                      <ChevronDown 
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeMenu === item.label ? "rotate-180" : ""
                        }`} 
                      />
                    )}
                    {/* Hover underline effect */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4B483] transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}

                {/* Elegant Submenu Dropdown */}
                {item.submenus.length > 0 && (
                  <div 
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                      activeMenu === item.label 
                        ? "opacity-100 visible translate-y-0" 
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {/* Connector arrow */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 -translate-y-full w-0 h-0 
                      border-l-8 border-r-8 border-b-8 
                      border-l-transparent border-r-transparent border-b-white"
                    />
                    <div className="bg-white rounded-xl shadow-xl border border-[#E8E6E1]/50 py-2 min-w-[160px] overflow-hidden">
                      {item.submenus.map((submenu, idx) => (
                        <Link
                          key={submenu.label}
                          href={submenu.href}
                          className={`block px-5 py-2.5 text-sm text-[#2F3E5F] transition-all duration-200
                            hover:bg-gradient-to-r hover:from-[#F5F3EF] hover:to-transparent hover:text-[#D4B483] hover:pl-6
                            ${idx !== item.submenus.length - 1 ? "border-b border-[#E8E6E1]/30" : ""}
                          `}
                        >
                          {submenu.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button - refined circular with morphing 2-line */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden relative h-10 w-10 rounded-full ring-1 transition-all duration-300 hover:ring-[#D4B483] active:scale-95 ${
              isScrolled || isMobileMenuOpen
                ? "bg-white/85 backdrop-blur-sm ring-[#E1E4E9] text-[#2F3E5F]"
                : "bg-white/10 backdrop-blur-md ring-white/35 text-white shadow-[0_4px_14px_rgba(11,28,57,0.18)]"
            }`}
            aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-[5px]">
              <span
                className={`block h-[1.5px] w-[18px] rounded-full bg-current transition-transform duration-300 origin-center ${
                  isMobileMenuOpen ? "translate-y-[3.25px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-[18px] rounded-full bg-current transition-transform duration-300 origin-center ${
                  isMobileMenuOpen ? "-translate-y-[3.25px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div 
          className={`absolute left-0 right-0 bg-white shadow-2xl overflow-y-auto transition-all duration-300 ${
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          style={{
            top: `${mobileMenuTop}px`,
            maxHeight: `calc(100vh - ${mobileMenuTop}px)`,
          }}
        >
          <nav className="py-2">
            {menuItems.map((item, idx) => (
              <div 
                key={item.label} 
                className={`${idx !== menuItems.length - 1 ? "border-b border-[#E8E6E1]/50" : ""}`}
              >
                {item.submenus.length > 0 ? (
                  <>
                    <button
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className={`w-full flex items-center justify-between px-6 py-3.5 text-sm font-medium transition-all duration-300 ${
                        activeMobileSubmenu === item.label
                          ? "text-[#D4B483] bg-gradient-to-r from-[#F7F4EE] to-white shadow-[inset_0_-1px_0_rgba(212,180,131,0.35)]"
                          : "text-[#2F3E5F] hover:bg-[#FAF8F4]"
                      } active:bg-[#F5F3EF] active:scale-[0.995]`}
                    >
                      <span className="relative">
                        {item.label}
                        <span 
                          className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4B483] transition-all duration-300 ${
                            activeMobileSubmenu === item.label ? "w-full" : "w-0"
                          }`} 
                        />
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#D4B483] transition-transform duration-200 ${
                          activeMobileSubmenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        activeMobileSubmenu === item.label 
                          ? "max-h-60 opacity-100" 
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="bg-gradient-to-b from-[#F9F8F6] to-[#F5F3EF] py-1">
                        {item.submenus.map((submenu) => (
                          <Link
                            key={submenu.label}
                            href={submenu.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-8 py-2.5 text-sm text-[#5A6A7A] rounded-sm transition-all duration-300 hover:text-[#D4B483] hover:bg-white/70 active:text-[#D4B483] active:bg-white/90 active:translate-x-0.5"
                          >
                            {submenu.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  isExternalLink(item.href) ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-6 py-3.5 text-sm font-medium text-[#2F3E5F] transition-all duration-300 hover:bg-[#FAF8F4] active:bg-[#F5F3EF] active:text-[#D4B483] active:scale-[0.995]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-6 py-3.5 text-sm font-medium text-[#2F3E5F] transition-all duration-300 hover:bg-[#FAF8F4] active:bg-[#F5F3EF] active:text-[#D4B483] active:scale-[0.995]"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
