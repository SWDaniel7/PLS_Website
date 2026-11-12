import type { Metadata, Viewport } from "next";
import Image from "next/image";
import CopyButton from "@/components/CopyButton";

// 원장님 조사 안내 페이지 (원장 결정 2026-11-12).
// 판매·홍보 페이지가 아니므로 <Header />·<Footer /> 를 쓰지 않고 머리띠·바닥글을 이 안에 직접 둡니다.
// proxy.ts 의 임시 503 차단에서 이 경로만 빠져 있습니다.

export const metadata: Metadata = {
  title: "원장님 조사 안내",
  description: "PLS영재교육이 초등 영어 원장님께 여쭙는 운영 인터뷰 조사 안내입니다.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/research" },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

const WRAP =
  "mx-auto max-w-[1200px] pl-[max(24px,env(safe-area-inset-left,0px))] pr-[max(24px,env(safe-area-inset-right,0px))] md:px-8 lg:px-12";
const SEC =
  "grid gap-[22px] py-14 min-[880px]:grid-cols-[300px_minmax(0,1fr)] min-[880px]:gap-12 min-[880px]:py-[88px]";
const HEAD =
  "grid content-start justify-items-start gap-3.5 min-[880px]:sticky min-[880px]:top-8 min-[880px]:self-start";
const H2 = "text-[clamp(1.5rem,2.6vw,1.875rem)] leading-[1.35] tracking-[-0.03em]";
const CONTENT = "grid min-w-0 max-w-[680px] gap-7";
const BODY_P = "text-[1.0625rem]";
const BIG = "text-[1.0625rem] font-medium leading-[1.6] tracking-[-0.03em]";
const LABEL = "text-[12px] font-semibold tracking-[.05em] text-[var(--text-steel)]";
const CARD =
  "rounded-3xl border border-[var(--border-hairline)] bg-white shadow-[0_10px_30px_rgba(18,44,81,.08)]";
const HAIRLINE = "border-[var(--border-hairline)]";
const NAVY_LINE = "border-white/[.14]";

const FACTS = [
  { dt: "시간", v: "45분 안팎", s: "수업이 없는 시간에" },
  { dt: "녹음", v: "동의하실 때만", s: "원치 않으시면 받아 적기" },
  { dt: "익명", v: "코드로 정리", s: "학원명·성함은 쓰지 않음" },
  { dt: "만남", v: "찾아뵙습니다", s: "원하시면 화상·전화로" },
];

const MANAGERS = [
  { name: "김희유", mail: "julia.kim@plsprep.com" },
  { name: "이성호", mail: "david.lee@plsprep.com" },
];

const STEPS = [
  { title: "일정 잡기", body: "편하신 날짜와 시간을 알려 주시면 수업이 없는 시간으로 맞춥니다." },
  {
    title: "45분 이야기",
    body: "원장님 학원으로 찾아뵙습니다. 원하시면 화상이나 전화로도 진행합니다. 미리 준비하실 것은 없습니다.",
  },
  { title: "익명으로 정리", body: "학원명과 성함은 코드로 바꿔 정리합니다." },
  {
    title: "결과 받기",
    body: "2026년 12월 말까지, 참여해 주신 원장님들이 같은 질문에 어떻게 답하셨는지를 익명으로 정리한 요약 리포트를 보내 드립니다. 학원명은 어디에도 들어가지 않습니다.",
  },
];

const TOPICS = [
  "초등부 반 하나를 기준으로 한 수업과 운영 방식",
  "요즘 가장 신경 쓰이는 운영 문제",
  "학원 밖에서 가져와 쓰시는 교재·자료·프로그램과 대략의 비용",
  "수업에서 손이 가장 많이 가는 부분",
  "교재나 프로그램을 새로 들이거나 바꾸신 경험",
];

const ROWS = [
  { dt: "녹음", dd: "시작할 때 여쭙고, 동의하실 때만 합니다. 원하지 않으시면 손으로 받아 적습니다." },
  {
    dt: "보관",
    dd: "녹음과 기록은 파일럿 팀만 보는 내부 기록 공간에 두고, 학원 정보를 다른 곳에 공유하지 않습니다. 정리에는 AI 도구를 쓰며, 학원명과 성함을 가린 뒤에만 씁니다.",
  },
  { dt: "결과", dd: "학원명을 쓰지 않습니다. 여러 원장님 이야기를 묶어 어느 학원인지 알 수 없게 정리합니다." },
  { dt: "답변", dd: "답하기 곤란한 질문은 넘어가셔도 되고, 중간에 언제든 그만두셔도 됩니다." },
  { dt: "삭제", dd: "나중에라도 녹음이나 기록을 지워 달라고 말씀해 주시면 원장이 직접 확인해 지웁니다." },
];

export default function ResearchPage() {
  return (
    <div className="text-[16px] leading-[1.75] tracking-[-0.01em] text-[var(--text-charcoal)] [overflow-wrap:anywhere] [word-break:keep-all] [&_p]:mb-0">
      <div className={`border-b ${HAIRLINE} bg-white/95`}>
        <div className={`${WRAP} flex items-center justify-between gap-4 py-3`}>
          <Image
            src="/images/pls-logo.png"
            alt="PLS영재교육 - Phillips Academy of Little Scholars"
            width={180}
            height={39}
            className="block h-[26px] w-auto md:h-9"
            priority
          />
          <span className="whitespace-nowrap text-[12.5px] font-semibold text-[var(--text-slate)]">
            원장님 조사 안내
          </span>
        </div>
      </div>

      <header className="bg-[var(--primary-navy-dark)] text-white">
        <div
          className={`${WRAP} grid justify-items-start gap-[22px] pb-11 pt-14 min-[880px]:gap-7 min-[880px]:pb-[72px] min-[880px]:pt-24`}
        >
          <span className="section-kicker section-kicker--dark">PLS영재교육</span>
          <h1 className="max-w-[15em] text-balance text-[clamp(2rem,5.4vw,3.5rem)] leading-[1.22] tracking-[-0.03em] text-white">
            초등 영어 원장님들께
            <br />
            운영 이야기를 여쭙고 있습니다.
          </h1>
          <p className="max-w-[36em] text-[1.0625rem] leading-[1.8] text-white/[.72] min-[880px]:text-[1.125rem]">
            대치동에서 초등 영어 학원을 운영하는 PLS영재교육이 원장님 몇 분께 직접 여쭙는 조사입니다. 연락을 받고 이
            페이지를 여셨다면, 누가 왜 무엇을 여쭙는지 여기서 확인하실 수 있습니다.
          </p>
        </div>
        <div className={WRAP}>
          <dl className="grid grid-cols-2 gap-x-5 gap-y-7 pb-14 min-[720px]:grid-cols-4 min-[720px]:gap-6 min-[720px]:pb-20">
            {FACTS.map((f) => (
              <div key={f.dt} className={`grid min-w-0 content-start gap-1 border-t ${NAVY_LINE} pt-4`}>
                <dt className="text-[12px] font-semibold tracking-[.05em] text-[var(--accent-gold)]">{f.dt}</dt>
                <dd className="grid gap-0.5">
                  <span className="text-[1.25rem] font-semibold leading-[1.4] tracking-[-0.03em] text-white">{f.v}</span>
                  <span className="text-[13.5px] leading-[1.55] text-white/60">{f.s}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <main className={WRAP}>
        <section id="who" className={`${SEC} border-t ${HAIRLINE} first:border-t-0`}>
          <div className={HEAD}>
            <span className="section-kicker">01</span>
            <h2 className={H2}>누가 연락드렸나요</h2>
          </div>
          <div className={CONTENT}>
            <p className={BODY_P}>
              PLS영재교육은 서울 대치동에서 초등 영어 학원을 운영합니다. 이번 조사는 리서치 매니저 두 사람이 맡고 있고, 둘
              중 한 사람이 연락드립니다.
            </p>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3">
              {MANAGERS.map((m) => (
                <li key={m.mail} className={`${CARD} grid min-w-0 gap-0.5 p-6`}>
                  <p className="text-[13.5px] text-[var(--text-steel)]">PLS영재교육 리서치 매니저</p>
                  <p className="text-[1.375rem] font-semibold tracking-[-0.03em] text-[var(--text-ink)]">{m.name}</p>
                  <p className="mt-5 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-[15px] text-[var(--text-ink)]">
                    <span className="min-w-0">{m.mail}</span>
                    <CopyButton text={m.mail} ariaLabel={`${m.name} 메일 주소 복사`} />
                  </p>
                </li>
              ))}
            </ul>
            <div className="grid gap-2.5">
              <p className={LABEL}>PLS영재교육 더 알아보기</p>
              <dl className={`border-b ${HAIRLINE}`}>
                <div className={`flex justify-between gap-4 border-t ${HAIRLINE} py-3.5 text-[15px]`}>
                  <dt className="font-medium text-[var(--text-ink)]">홈페이지</dt>
                  <dd>
                    <a
                      href="https://plsprep.com"
                      className="font-medium text-[var(--primary-navy)] underline decoration-[var(--accent-gold)] decoration-2 underline-offset-4 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--accent-gold)]"
                    >
                      plsprep.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="why" className={`${SEC} border-t ${HAIRLINE}`}>
          <div className={HEAD}>
            <span className="section-kicker">02</span>
            <h2 className={H2}>왜 하나요</h2>
          </div>
          <div className={CONTENT}>
            <p className={`${BIG} text-[var(--text-ink)]`}>
              PLS영재교육 원장님이 같은 초등 영어 원장님들께서 수업과 운영을 실제로 어떻게 하시는지 직접 듣고 배우고 싶어
              시작한 조사입니다.
            </p>
            <p className={BODY_P}>
              판매나 홍보, 학생 모집과는 관계없습니다. 지금은 팔 것이 없고, 이 조사로 연락드려 무언가를 권하지 않습니다.
            </p>
          </div>
        </section>

        <section id="steps" className={`${SEC} border-t ${HAIRLINE}`}>
          <div className={HEAD}>
            <span className="section-kicker">03</span>
            <h2 className={H2}>
              참여하시면
              <br />
              이렇게 진행됩니다
            </h2>
          </div>
          <div className={CONTENT}>
            <ol className="grid">
              {STEPS.map((s, i) => {
                const last = i === STEPS.length - 1;
                return (
                  <li
                    key={s.title}
                    className={`relative grid min-w-0 grid-cols-[40px_minmax(0,1fr)] gap-x-5 gap-y-1 ${
                      last
                        ? "pb-0"
                        : `pb-9 after:absolute after:bottom-0 after:left-[19px] after:top-10 after:w-0.5 after:bg-[var(--border-hairline)] after:content-['']`
                    }`}
                  >
                    <span
                      className={`relative z-[1] row-span-2 grid h-10 w-10 place-items-center self-start rounded-full text-[15px] font-semibold tracking-normal ${
                        last
                          ? "bg-[var(--accent-gold)] text-[var(--primary-navy-dark)]"
                          : "bg-[var(--primary-navy)] text-white"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <h3 className="pt-2 text-[1.0625rem] tracking-[-0.02em]">{s.title}</h3>
                    <p className="text-[15px] leading-[1.7]">{s.body}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section id="what" className={`${SEC} border-t ${HAIRLINE}`}>
          <div className={HEAD}>
            <span className="section-kicker">04</span>
            <h2 className={H2}>무엇을 여쭙나요</h2>
          </div>
          <div className={CONTENT}>
            <ul className={`border-b ${HAIRLINE}`}>
              {TOPICS.map((t) => (
                <li key={t} className={`border-t ${HAIRLINE} py-4 text-[1.0625rem] text-[var(--text-ink)]`}>
                  {t}
                </li>
              ))}
            </ul>
            <p className="rounded-r-xl border-l-[3px] border-l-[var(--accent-gold)] bg-[var(--bg-surface-soft)] px-6 py-[22px] text-[1.0625rem] leading-[1.75] text-[var(--text-ink)]">
              생각이나 의견보다 최근에 실제로 있었던 일을 여쭙습니다. 정답이 있는 질문은 없습니다.
            </p>
          </div>
        </section>

        <section id="privacy" className={`${SEC} border-t ${HAIRLINE}`}>
          <div className={HEAD}>
            <span className="section-kicker">05</span>
            <h2 className={H2}>녹음과 익명 처리</h2>
          </div>
          <div className={CONTENT}>
            <div className={`${CARD} grid gap-3.5 p-[26px]`}>
              <p className={LABEL}>정리할 때는 이렇게 적습니다</p>
              <div
                role="img"
                aria-label="예시: ○○영어학원 김○○ 원장님은 기록에 A-01로 적습니다"
                className="flex flex-wrap items-center gap-x-4 gap-y-2"
              >
                <span className="text-[1.0625rem] text-[var(--text-steel)] line-through decoration-1">
                  ○○영어학원 · 김○○ 원장님
                </span>
                <svg
                  width="28"
                  height="14"
                  viewBox="0 0 28 14"
                  aria-hidden="true"
                  className="flex-none text-[var(--accent-gold)]"
                >
                  <path
                    d="M1 7h24M19 1l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <code className="font-sans text-[1.75rem] font-bold leading-[1.2] tracking-[.02em] text-[var(--primary-navy)] tabular-nums">
                  A-01
                </code>
              </div>
            </div>
            <dl className={`border-b ${HAIRLINE}`}>
              {ROWS.map((r) => (
                <div key={r.dt} className={`grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 border-t ${HAIRLINE} py-4`}>
                  <dt className="font-semibold text-[var(--text-ink)]">{r.dt}</dt>
                  <dd>{r.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--primary-navy-dark)] text-white">
        <div className={WRAP}>
          <section id="contact" className={SEC}>
            <div className={HEAD}>
              <span className="section-kicker section-kicker--dark">06</span>
              <h2 className={`${H2} text-white`}>
                문의, 연락을
                <br />
                원치 않으실 때
              </h2>
            </div>
            <div className={`${CONTENT} text-white/70`}>
              <p className={`${BIG} text-white`}>궁금하신 점은 연락드린 담당자에게 메일로 편하게 물어 주세요.</p>
              <ul className={`border-b ${NAVY_LINE}`}>
                {MANAGERS.map((m) => (
                  <li
                    key={m.mail}
                    className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 border-t ${NAVY_LINE} py-[18px]`}
                  >
                    <span className="text-[14px] text-white/60">{m.name} · 리서치 매니저</span>
                    <span className="text-[1.1875rem] font-medium text-white">{m.mail}</span>
                  </li>
                ))}
              </ul>
              <p className={`${BODY_P} text-white/70`}>
                연락을 원치 않으시면 받으신 메시지에 ‘수신거부’라고 답해 주세요. 다시 연락드리지 않겠습니다.
              </p>
            </div>
          </section>
        </div>
        <div className="h-px bg-[linear-gradient(90deg,transparent,rgba(212,180,131,.8),transparent)] opacity-60" />
        <div className={`${WRAP} grid justify-items-center gap-[18px] pb-[52px] pt-11 text-center`}>
          <Image
            src="/images/pls-logo-footer-invert.png"
            alt="PLS영재교육 - Phillips Academy of Little Scholars"
            width={232}
            height={56}
            className="block h-12 w-auto md:h-14"
          />
          <p className="text-[12px] leading-[1.7] text-white/70">원장님 조사 안내 · 2026년 11월</p>
          <p className="text-[12px] leading-[1.7] text-white/55">
            서울특별시 강남구 논현로10길 16 영재센터빌딩 4층
            <br />
            서울특별시강남서초교육지원청 등록 제 15022호 피엘에스(PLS)영재교육학원
          </p>
          <p className="text-[12px] leading-[1.7] text-white/55">&copy; 2026 PLS영재교육. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
