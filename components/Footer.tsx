import Link from "next/link";
import Image from "next/image";

const linkItems = [
  { label: "공식 카카오채널", href: "#kakao" },
  { label: "블로그", href: "#blog" },
  { label: "인스타그램", href: "#instagram" },
  { label: "오시는 길", href: "#location" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--bg-canvas)" }}>
      <div
        className="h-px w-full opacity-60"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent-gold), transparent)",
        }}
      />

      <div
        className="border-t py-12 md:py-14"
        style={{ borderColor: "var(--border-hairline)" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-flex items-center transition-opacity duration-300 hover:opacity-80"
            >
              <Image
                src="/images/pls-logo.png"
                alt="PLS영재교육 - Phillips Academy of Little Scholars"
                width={180}
                height={45}
                className="h-9 w-auto"
              />
            </Link>

            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {linkItems.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[var(--text-charcoal)] transition-colors duration-300 hover:text-[var(--accent-gold)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <p className="mb-0 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--text-slate)]">
              <span>
                상담문의{" "}
                <a
                  href="tel:0234630010"
                  className="font-medium text-[var(--text-charcoal)] transition-colors duration-300 hover:text-[var(--accent-gold)]"
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
              <span className="tracking-[0.04em] text-[var(--text-steel)]">
                Education for Gifted and Talented Children
              </span>
            </p>

            <p className="mb-0 pt-2 text-xs text-[var(--text-steel)]">
              &copy; 2026 PLS영재교육. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
