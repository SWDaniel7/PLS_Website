"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const menuItems = [
  {
    label: "About PLS",
    href: "#about",
    submenus: [
      { label: "기관소개", href: "#intro" },
      { label: "강사소개", href: "#teachers" },
      { label: "공지사항", href: "#notice" },
      { label: "위치&주차", href: "#location" },
    ],
  },
  {
    label: "입시정보/칼럼",
    href: "#admission",
    submenus: [],
  },
  {
    label: "대기등록",
    href: "#register",
    submenus: [],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

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

  const toggleMobileSubmenu = (label: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === label ? null : label);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
              alt="PLS - Phillips Academy of Little Scholars"
              width={180}
              height={45}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 py-2 text-sm font-medium transition-colors duration-300 relative
                    ${isScrolled || isMobileMenuOpen ? "text-[#2F3E5F]" : "text-white drop-shadow-[0_1px_2px_rgba(11,28,57,0.45)]"}
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
          className={`absolute top-[60px] left-0 right-0 bg-white shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto transition-all duration-300 ${
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
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
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-3.5 text-sm font-medium text-[#2F3E5F] transition-all duration-300 hover:bg-[#FAF8F4] active:bg-[#F5F3EF] active:text-[#D4B483] active:scale-[0.995]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
