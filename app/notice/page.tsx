import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getNoticesFromNotion } from "@/lib/notion";

export const dynamic = "force-dynamic";

export default async function NoticePage() {
  const { notices, error } = await getNoticesFromNotion();

  return (
    <main className="min-h-screen bg-[var(--bg-canvas)]">
      <Header />

      <section className="pt-32 md:pt-36">
        <div className="mx-auto max-w-[1200px] px-6 pb-14 text-center md:px-8 md:pb-16">
          <p className="mb-3 text-[12px] font-semibold tracking-[0.22em] text-[var(--text-steel)] uppercase">
            About PLS
          </p>
          <h1
            className="mx-auto max-w-4xl text-[44px] font-semibold leading-[1.15] tracking-[-0.03em] text-[var(--text-ink)] md:text-[72px]"
            style={{ wordBreak: "keep-all" }}
          >
            공지사항
          </h1>
          <p className="mt-4 text-[14px] text-[var(--text-steel)] md:text-[15px]">
            Phillips Academy of Little Scholars
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
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
