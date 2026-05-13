import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import { absoluteUrl } from "@/lib/site-url";
import Footer from "@/components/Footer";
import { getNoticesFromNotion } from "@/lib/notion";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "재원생 사례 · 공지사항",
  description:
    "PLS영재교육(PLS프렙) 재원생 합격 사례와 공지사항을 확인하세요. 에디센합격·피아이(PI)합격, 초등레테·게이트입시·대치프렙·서초게이트 합격 소식, 원서수업·레벨테스트 관련 최신 안내를 제공합니다.",
  keywords: [
    "PLS영재교육",
    "피엘에스영재교육",
    "재원생 사례",
    "공지사항",
    "PLS프렙",
    "레벨테스트",
    "초등어학원",
    "에디센",
    "에디센합격",
    "피아이",
    "피아이합격",
    "초등레테",
    "게이트입시",
    "서초게이트",
    "대치게이트",
    "에세이라이팅",
    "원서수업",
  ],
  openGraph: {
    title: "재원생 사례 · 공지사항 | PLS영재교육",
    description:
      "PLS영재교육(PLS프렙) 재원생 합격 사례와 공지사항을 확인하세요. 에디센합격·피아이(PI)합격, 초등레테·게이트입시·대치프렙·서초게이트 합격 소식, 원서수업·레벨테스트 관련 최신 안내를 제공합니다.",
    images: [
      {
        url: "/images/hero-background.png",
        width: 1200,
        height: 630,
        alt: "PLS영재교육 공지사항 및 재원생 소식",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "재원생 사례 · 공지사항 | PLS영재교육",
    description:
      "PLS영재교육(PLS프렙) 재원생 합격 사례와 공지사항을 확인하세요. 에디센합격·피아이(PI)합격, 초등레테·게이트입시·대치프렙·서초게이트 합격 소식, 원서수업·레벨테스트 관련 최신 안내를 제공합니다.",
    images: ["/images/hero-background.png"],
  },
  alternates: {
    canonical: "/notice",
  },
};

export default async function NoticePage() {
  const noticeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "재원생 사례 · 공지사항 | PLS영재교육",
        description:
          "PLS영재교육 공지사항과 재원생 관련 소식을 확인하세요. 레테·원서수업·학부모 안내 등 최신 정보를 제공합니다.",
        url: absoluteUrl("/notice"),
        inLanguage: "ko-KR",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "홈",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "공지사항",
            item: absoluteUrl("/notice"),
          },
        ],
      },
    ],
  };

  const { notices, error } = await getNoticesFromNotion();

  return (
    <main className="min-h-screen bg-[var(--bg-canvas)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(noticeSchema) }}
      />
      <Header />

      <section className="relative overflow-hidden pt-32 md:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-background.png"
            alt=""
            fill
            className="object-cover"
            priority
            aria-hidden
          />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-6 pb-28 text-center md:px-8 md:pb-32">
          <div className="mx-auto inline-block rounded-2xl border border-white/70 bg-white/72 px-6 py-5 backdrop-blur-[1.5px]">
            <p className="mb-3 text-[12px] font-semibold tracking-[0.22em] text-[var(--primary-navy)]/70 uppercase">
              About PLS
            </p>
            <h1
              className="mx-auto max-w-4xl text-[44px] font-semibold leading-[1.15] tracking-[-0.03em] text-[var(--primary-navy)] md:text-[72px]"
              style={{ wordBreak: "keep-all" }}
            >
              공지사항
            </h1>
            <p className="mt-4 text-[14px] text-[var(--primary-navy)]/65 md:text-[15px]">
              Phillips Academy of Little Scholars
            </p>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-16 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="overflow-hidden rounded-3xl border border-[var(--border-hairline)] bg-white">
            <div className="grid grid-cols-[120px_1fr_140px_120px] border-b border-[var(--border-hairline)] bg-[var(--bg-surface-soft)] px-6 py-4 text-[12px] font-semibold tracking-[0.08em] text-[var(--text-steel)] uppercase md:grid-cols-[140px_1fr_180px_120px]">
              <div>구분</div>
              <div>제목</div>
              <div>작성일</div>
              <div>링크</div>
            </div>

            {error ? (
              <div className="px-6 py-8 text-[15px] leading-relaxed text-[var(--text-charcoal)]">
                <p className="mb-2 font-semibold text-[var(--primary-navy)]">
                  노션 데이터 연결 상태를 확인해주세요.
                </p>
                <p className="mb-0 text-[var(--text-slate)]">{error}</p>
              </div>
            ) : notices.length === 0 ? (
              <div className="px-6 py-8 text-[15px] text-[var(--text-slate)]">
                등록된 공지사항이 없습니다.
              </div>
            ) : (
              <ul>
                {notices.map((notice) => (
                  <li
                    key={notice.id}
                    className="grid grid-cols-[120px_1fr_140px_120px] items-start gap-3 border-b border-[var(--border-hairline)] px-6 py-5 last:border-b-0 md:grid-cols-[140px_1fr_180px_120px]"
                  >
                    <div>
                      <span className="inline-flex rounded-full border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3 py-1 text-[12px] font-medium text-[var(--text-charcoal)]">
                        {notice.category ?? "공지"}
                      </span>
                      {notice.pinned ? (
                        <p className="mt-2 text-[11px] font-semibold tracking-[0.14em] text-[var(--accent-gold)] uppercase">
                          Pinned
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <p
                        className="mb-1 text-[16px] font-semibold text-[var(--text-ink)]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {notice.title}
                      </p>
                      {notice.summary ? (
                        <p
                          className="mb-0 text-[14px] leading-relaxed text-[var(--text-slate)]"
                          style={{ wordBreak: "keep-all" }}
                        >
                          {notice.summary}
                        </p>
                      ) : null}
                    </div>

                    <div className="pt-1 text-[14px] text-[var(--text-slate)]">
                      {notice.date || "-"}
                    </div>

                    <div>
                      <a
                        href={notice.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-full border border-[var(--border-hairline)] px-4 py-2 text-[13px] font-medium text-[var(--primary-navy)] transition-colors hover:bg-[var(--bg-surface-soft)]"
                      >
                        원문 보기
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
