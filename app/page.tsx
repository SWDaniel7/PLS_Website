// plsprep.com 첫 화면 «한 판» (2026-11-13 원장 결정) — 기존 홈페이지 구성 요소의 꼴을 그대로 씁니다.
import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpen,
  MessagesSquare,
  Newspaper,
  ListChecks,
  PenTool,
  SearchCheck,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

const questions = ["진도는 나가는데, 왜 틀릴까?", "추론(Inference) 문제는 왜 막힐까?", "말은 잘하는데, 왜 쓰기는 안 될까?"];

const dos = [
  { t: "한 편을 깊이 읽습니다", d: "한 편의 글을 끝까지 따라가며 읽습니다." },
  { t: "말로 먼저 세웁니다", d: "쓰기 전에 생각과 이유를 말로 꺼내 흐름을 세웁니다." },
  { t: "자기 문장으로 씁니다", d: "스스로 세운 구조와 아이디어를 자기 문장으로 옮깁니다." },
];

const concepts = [
  { icon: Newspaper, axis: "읽기", label: "논픽션 독해 훈련", caption: "Non-fiction Reading", desc: "정보를 다루는 글을 읽고 중심 내용과 근거, 글의 구조를 짚습니다." },
  { icon: BookOpen, axis: "읽기", label: "이야기 글 읽기", caption: "Fiction · Novel", desc: "원서로 인물의 감정과 원인, 관계처럼 적혀 있지 않은 것을 추론합니다." },
  { icon: MessagesSquare, axis: "토론", label: "토론", caption: "Discussion", desc: "읽은 글을 두고 자기 생각과 이유를 말로 먼저 세웁니다." },
  { icon: ListChecks, axis: "서술", label: "서술형 리딩", caption: "Written Response", desc: "글에 대한 질문에 고르는 답이 아니라 문장으로 답합니다." },
  { icon: PenTool, axis: "서술", label: "서술형 쓰기", caption: "Essay Writing", desc: "구조와 아이디어를 스스로 세워 한 편의 글로 씁니다." },
];

const flow = [
  { icon: BookOpen, tag: "Read", title: "읽고, 묻습니다", body: "이야기 글과 논픽션을 읽고, 추론을 묻는 질문을 받습니다.", chips: ["논픽션 독해", "이야기 글", "추론 질문"] },
  { icon: MessagesSquare, tag: "Discuss", title: "말로 먼저 세웁니다", body: "읽은 내용을 자기 말로 다시 세우고, 생각과 이유를 말로 꺼내 키워드로 구조화합니다.", chips: ["Retell", "토론", "Brainstorming"] },
  { icon: PenTool, tag: "Write", title: "자기 문장으로 답합니다", body: "구조화한 흐름을 자기 문장으로 씁니다. 질문에는 고르는 답이 아니라 문장으로 답합니다.", chips: ["서술형 리딩", "서술형 쓰기"] },
  { icon: SearchCheck, tag: "Revise", title: "쓴 글 안에서 고칩니다", body: "그래머와 보카는 아이가 쓴 글 안에서 발견하고 수정합니다.", chips: ["Grammar", "Vocabulary"] },
];

const riie = [
  { l: "R", name: "Recognition", desc: "글의 구조와 정보를 이해합니다." },
  { l: "I", name: "Inference", desc: "적혀 있지 않은 맥락과 인과를 추론합니다." },
  { l: "I", name: "Integration", desc: "읽은 것을 자기 경험과 연결합니다." },
  { l: "E", name: "Expression", desc: "이해한 것을 말과 글로 표현합니다." },
];

type P = { name: string; role: string; photo?: string; teach: string[]; edu: string[]; other: string[] };

const people: P[] = [
  {
    name: "Daniel",
    role: "PLS영재교육 대표이사 · 원장",
    photo: "/images/faculty-daniel.png",
    teach: ["PLS 대치/개포 전문관 원장", "강남 특목고/자사고 입시 컨설팅"],
    edu: ["연세대학교 경영학과 학사", "스탠퍼드대학교 Continuing Studies (Class '15)", "미국 국무부 주관 글로벌 장학생"],
    other: ["Google Global M&A, Manager", "appbackr (Palo Alto), BD", "주한미국대사관 KUVA 알럼나이", "국립국제교육원(NIIED) 알럼나이"],
  },
  {
    name: "Sun",
    role: "PLS영재교육 이사",
    photo: "/images/faculty-sun.png",
    teach: ["미국 현지 유치원 교사 (Oklahoma)", "미국 현지 걸스카우트 코치 (Oklahoma)", "강남 초/중등부 영어학원 강사"],
    edu: ["University of Central Florida, BBA", "McLoud High School (Oklahoma)"],
    other: ["Google Global gCare, Manager"],
  },
  {
    name: "Sally",
    role: "PLS영재교육 수석강사 · 교육 R&D 담당",
    photo: "/images/faculty-sally.png",
    teach: ["라이팅 교수법 기반 교육과정 설계", "원서 수업 커리큘럼 기획 및 설계", "정철어학원 초등부 전임 강사"],
    edu: ["성균관대학교 문과대학 학사", "Langara College (Canada)"],
    other: ["국제 컨퍼런스 영·한 순차·동시 통역", "C레벨 임원 수행통역"],
  },
  {
    name: "David",
    role: "PLS영재교육 부원장",
    photo: "/images/faculty-david.png",
    teach: ["청담에이프릴어학원 초등부 강사", "다수 어학원 초/중등부 강사"],
    edu: ["San Luis Obispo C. School (Private School in USA)", "Coastal C. School (Private School in USA)"],
    other: [],
  },
  {
    name: "Hayden",
    role: "PLS영재교육 연구강사 · 교육 R&D 담당",
    teach: ["Mock TOEFL 감독관", "TOEIC 학원"],
    edu: ["연세대학교 국제학부(UIC) 학사", "Shanghai High School International Division"],
    other: [],
  },
];

const cats: { key: "teach" | "edu" | "other"; ko: string; en: string }[] = [
  { key: "teach", ko: "가르친 경험", en: "Teaching" },
  { key: "edu", ko: "학력", en: "Education" },
  { key: "other", ko: "그 밖의 경력", en: "Career" },
];

function Photo({ p, cls }: { p: P; cls: string }) {
  return p.photo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={p.photo} alt="" className={`${cls} object-cover object-top bg-[var(--bg-surface-soft)]`} />
  ) : (
    <span className={`${cls} flex items-center justify-center bg-[var(--bg-surface-soft)] text-[var(--primary-navy)]/40 font-semibold`} style={{ fontSize: "28px" }}>
      {p.name[0]}
    </span>
  );
}

function Dots({ items }: { items: string[] }) {
  return (
    <ul className="m-0 list-none space-y-2 p-0">
      {items.map((t) => (
        <li key={t} className="flex gap-2.5 text-[14px] leading-[1.55] text-[var(--text-charcoal)]" style={{ wordBreak: "keep-all" }}>
          <span aria-hidden className="mt-[8px] h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "var(--accent-gold)" }} />
          {t}
        </li>
      ))}
    </ul>
  );
}

function CatLabel({ ko, en }: { ko: string; en: string }) {
  return (
    <p className="mb-3 flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-steel)]">
      <span aria-hidden className="mr-2.5 inline-block h-px w-6" style={{ background: "var(--accent-gold)" }} />
      {ko} <span className="ml-2 text-[var(--accent-gold)]">{en}</span>
    </p>
  );
}

const DESC = "PLS영재교육은 읽은 것을 근거로 토론하고 자기 문장으로 답하는 대치동의 영어 논서술형 문해력 학원입니다.";

export const metadata: Metadata = {
  title: { absolute: "PLS영재교육" },
  description: DESC,
  keywords: ["PLS영재교육", "피엘에스영재교육"],
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
  openGraph: { title: "PLS영재교육", description: DESC, type: "website", locale: "ko_KR", siteName: "PLS영재교육", url: "/" },
  twitter: { card: "summary", title: "PLS영재교육", description: DESC },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero — 기존 Hero 와 같은 꼴. 메뉴 대신 «신청 안내» 글자 링크 하나, 채운 단추 없음 */}
      <section className="relative min-h-screen flex flex-col justify-between">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat [background-position:61%_30%] md:[background-position:50%_50%]"
          style={{ backgroundImage: "url('/images/hero-students.png')" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(11,28,57,0.78) 0%, rgba(11,28,57,0.50) 40%, rgba(11,28,57,0.22) 70%, rgba(11,28,57,0.05) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 py-2">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between">
            <Image
              src="/images/pls-logo.png"
              alt="PLS영재교육 - Phillips Academy of Little Scholars"
              width={180}
              height={45}
              className="h-6 md:h-9 w-auto"
              priority
            />
            <a
              href="#apply"
              className="flex items-center gap-1.5 py-2 text-sm font-medium text-white drop-shadow-[0_1px_2px_rgba(11,28,57,0.45)]"
            >
              신청 안내
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="relative z-10 flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32">
            <div className="max-w-lg">
              <h1
                className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-semibold text-white leading-[1.25] tracking-[-0.02em] mb-4 md:mb-6"
                style={{ wordBreak: "keep-all" }}
              >
                읽고, 생각하고,
                <br />
                자기 문장으로 씁니다.
              </h1>
              <p
                className="text-sm sm:text-base md:text-lg text-white/80 mb-6 md:mb-8 leading-relaxed"
                style={{ wordBreak: "keep-all" }}
              >
                읽은 것을 근거로 토론하고, 자기 문장으로 답합니다.
                <br className="hidden sm:block" /> PLS영재교육은 대치동의 영어 논서술형 문해력 학원입니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {["논픽션 독해", "토론", "서술형 리딩", "서술형 쓰기"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p
                className="mt-4 flex items-center gap-2 text-[12px] sm:text-[13px] tracking-[-0.005em] text-white/75"
                style={{ wordBreak: "keep-all" }}
              >
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ background: "var(--accent-gold)" }}
                />
                서울특별시강남서초교육지원청 등록 제 15022호
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full border-t border-white/20">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-4 md:py-6">
            <p className="mb-0 text-xs sm:text-sm tracking-[0.15em] text-white/60 font-light uppercase text-center md:text-left">
              Education for Gifted and talented children
            </p>
          </div>
        </div>
      </section>

      {/* 학부모의 질문 — 기존 «Parent's Anxiety» 번호 카드 꼴. 질문 문구는 기존 홈페이지 것 */}
      <section className="py-16 md:py-24 lg:py-[100px]" style={{ backgroundColor: "var(--bg-canvas)" }}>
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <span className="section-kicker mb-4">Parent&apos;s Question</span>
              <p className="mb-2 text-base text-[var(--text-slate)]">읽기는 되는데,</p>
              <h2 className="mb-8 text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--text-ink)] md:mb-10 md:text-5xl">
                <span className="highlight highlight-light">쓰는 답</span>은
                <br />
                왜 어려울까요?
              </h2>
              <p className="mb-6 flex items-center text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--text-steel)] md:mb-7">
                <span aria-hidden className="mr-3 inline-block h-px w-8" style={{ background: "var(--accent-gold)" }} />
                학부모님께서 가장 자주 던지시는 질문
              </p>
              <div className="mb-10 grid gap-4 sm:grid-cols-3 md:mb-12 md:gap-5">
                {questions.map((q, i) => (
                  <article
                    key={q}
                    className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-[var(--border-hairline)] shadow-[0_8px_22px_rgba(18,44,81,0.06)] md:p-7"
                  >
                    <span aria-hidden className="absolute left-0 right-0 top-0 h-[3px]" style={{ background: "linear-gradient(90deg, var(--accent-gold) 0%, #E1C99A 60%, transparent 100%)" }} />
                    <span className="mb-5 font-semibold leading-none tracking-tight text-[var(--accent-gold)]" style={{ fontSize: "30px" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mb-4 text-[18px] font-semibold leading-[1.45] text-[var(--text-ink)] md:text-[19px]" style={{ wordBreak: "keep-all" }}>
                      {q}
                    </p>
                    <div className="mt-auto flex items-center gap-2">
                      <span aria-hidden className="h-px w-6" style={{ background: "var(--accent-gold)" }} />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-steel)]">Parent&apos;s voice</span>
                    </div>
                  </article>
                ))}
              </div>
              <div className="rounded-2xl border-l-[3px] bg-[var(--bg-surface-soft)] px-6 py-6 md:px-7 md:py-7" style={{ borderColor: "var(--primary-navy)" }}>
                <p className="mb-3 text-[15.5px] leading-[1.75] text-[var(--text-charcoal)] md:text-[16.5px]" style={{ wordBreak: "keep-all" }}>
                  진도와 단어량은 눈에 보입니다. 아이의 생각이 <span className="font-semibold text-[var(--primary-navy)]">어디에서 멈추는지</span>는 잘 보이지 않습니다.
                </p>
                <p className="mb-0 text-[15px] font-semibold leading-[1.6] text-[var(--primary-navy)]" style={{ wordBreak: "keep-all" }}>
                  쓰는 답은 읽고, 말로 세우고, 문장으로 옮기는 순서에서 나옵니다.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(18,44,81,0.08)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/parent-anxiety.png" alt="" className="block w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 논서술형 — 기존 «Core Principles» 남색 섹션 꼴. 다섯 개념을 읽기·말하기·쓰기 한 줄기로 */}
      <section className="py-16 md:py-24 lg:py-[100px]" style={{ backgroundColor: "var(--primary-navy)", color: "#FFFFFF" }}>
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="mb-5 text-center">
            <span className="section-kicker section-kicker--dark inline-flex">논서술형 대비</span>
          </div>
          <h2
            className="mb-6 mx-auto max-w-5xl text-center font-semibold leading-[1.4] text-white"
            style={{ fontSize: "clamp(24px, 4.2vw, 30px)", wordBreak: "keep-all" }}
          >
            고르는 답이 아니라,
            <br />
            <span style={{ color: "var(--accent-gold)", fontSize: "clamp(28px, 4.8vw, 34px)" }}>쓰는 답을 준비합니다.</span>
          </h2>
          <p
            className="mb-12 mx-auto max-w-3xl text-center text-white/85 md:mb-14"
            style={{ fontSize: "clamp(15px, 2.8vw, 17px)", lineHeight: 1.75, wordBreak: "keep-all" }}
          >
            서술형·논술형 문항은 읽은 것을 근거로, 자기 문장으로 답하기를 요구합니다.
            <br className="hidden sm:block" /> PLS영재교육의 수업은 읽기에서 시작해 토론을 거쳐 서술로 끝납니다.
          </p>

          <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-10">
            <div className="mb-7 flex items-center gap-3 md:mb-8">
              <span aria-hidden className="inline-block h-px w-8" style={{ background: "rgba(212, 180, 131, 0.55)" }} />
              <p className="mb-0 text-[11px] font-semibold tracking-[0.18em] text-[var(--accent-gold)] uppercase md:text-[12px]">
                읽기 · 토론 · 서술 — 다섯 가지 수업
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-5">
              {concepts.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="relative h-full rounded-2xl bg-[var(--primary-navy-dark)] p-5 ring-1 ring-white/10">
                    <div className="mb-3 flex items-center justify-between">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full ring-1"
                        style={{ background: "rgba(212, 180, 131, 0.14)", borderColor: "rgba(212, 180, 131, 0.28)", color: "var(--accent-gold)" }}
                      >
                        <Icon className="h-[17px] w-[17px]" strokeWidth={1.7} />
                      </span>
                      <span className="text-[10.5px] font-semibold tracking-[0.18em] text-[var(--accent-gold)]/80 uppercase">{c.axis}</span>
                    </div>
                    <p className="mb-0.5 text-[16px] font-semibold text-white md:text-[17px]" style={{ wordBreak: "keep-all" }}>
                      {c.label}
                    </p>
                    <p className="mb-3 text-[10.5px] tracking-[0.06em] text-white/50 md:text-[11px]">{c.caption}</p>
                    <p className="mb-0 text-[13.5px] leading-[1.6] text-white/75" style={{ wordBreak: "keep-all" }}>
                      {c.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-4 flex items-center justify-center gap-3">
            <span aria-hidden className="inline-block h-px w-8" style={{ background: "rgba(212, 180, 131, 0.55)" }} />
            <p className="mb-0 text-[11px] font-semibold tracking-[0.18em] text-[var(--accent-gold)] uppercase md:text-[12px]">
              서술형 답안이 요구하는 것
            </p>
            <span aria-hidden className="inline-block h-px w-8" style={{ background: "rgba(212, 180, 131, 0.55)" }} />
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { tag: "근거", label: "글에서 근거를 찾습니다" },
              { tag: "이유", label: "왜 그런지 말로 설명합니다" },
              { tag: "구조", label: "쓰기 전에 흐름을 세웁니다" },
              { tag: "문장", label: "자기 문장으로 답합니다" },
            ].map((dim) => (
              <div key={dim.label} className="rounded-xl bg-white/[0.04] p-4 ring-1 ring-white/10">
                <div className="mb-1.5 flex items-center gap-2">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-gold)" }} />
                  <span className="text-[10.5px] font-semibold tracking-[0.16em] text-white/55 uppercase">{dim.tag}</span>
                </div>
                <p className="mb-0 text-[14.5px] font-medium text-white md:text-[15px]" style={{ wordBreak: "keep-all" }}>
                  {dim.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 mx-auto max-w-4xl md:mt-14">
            <div
              className="overflow-hidden rounded-2xl px-6 py-7 md:px-9 md:py-9"
              style={{ borderLeft: "3px solid var(--accent-gold)", background: "rgba(255, 255, 255, 0.04)" }}
            >
              <p className="mb-2 text-center text-[11.5px] font-semibold tracking-[0.18em] uppercase md:text-[12px]" style={{ color: "var(--accent-gold)" }}>
                <span aria-hidden className="mr-2.5 inline-block h-px w-7 align-middle" style={{ background: "var(--accent-gold)" }} />
                쓰기 전에, 말로 먼저
              </p>
              <p className="mb-0 text-center font-medium leading-[1.55] text-white" style={{ fontSize: "clamp(17px, 3vw, 21px)", wordBreak: "keep-all" }}>
                말로 세운 생각이 글이 됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 무편집 원고 + 하지 않는 것 — 기존 «Parent's Anxiety» 꼴 */}
      <section className="py-16 md:py-24 lg:py-[100px]" style={{ backgroundColor: "var(--bg-canvas)" }}>
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <span className="section-kicker mb-4">Unedited Writing</span>
              <p className="mb-2 text-base text-[var(--text-slate)]">수업 안에서 쓴 글,</p>
              <h2 className="mb-8 text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--text-ink)] md:mb-10 md:text-5xl">
                아이가 쓴
                <br />
                <span className="highlight highlight-light">그대로 보여드립니다.</span>
              </h2>

              <div
                className="mb-10 rounded-2xl border-l-[3px] bg-[var(--bg-surface-soft)] px-6 py-6 md:mb-12 md:px-7 md:py-7"
                style={{ borderColor: "var(--primary-navy)" }}
              >
                <p
                  className="mb-3 text-[15.5px] font-semibold leading-[1.7] text-[var(--primary-navy)] md:text-[16.5px]"
                  style={{ wordBreak: "keep-all" }}
                >
                  수업 안에서 아이가 스스로 생각해낸 구조와 아이디어로 쓴 글 그대로입니다.
                </p>
                <p
                  className="mb-0 text-[14.5px] leading-[1.7] text-[var(--text-slate)]"
                  style={{ wordBreak: "keep-all" }}
                >
                  수정하거나 다듬지 않았습니다. 선생님이 불러준 문장도, 샘플을 채워넣은 것도 아닙니다.
                </p>
              </div>

              <p className="mb-6 flex items-center text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--text-steel)] md:mb-7">
                <span aria-hidden className="mr-3 inline-block h-px w-8" style={{ background: "var(--accent-gold)" }} />
                수업에서 하는 것
              </p>
              <div className="grid gap-4 sm:grid-cols-3 md:gap-5">
                {dos.map((n, i) => (
                  <article
                    key={n.t}
                    className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-5 ring-1 ring-[var(--border-hairline)] shadow-[0_8px_22px_rgba(18,44,81,0.06)] md:p-6"
                  >
                    <span aria-hidden className="absolute left-0 right-0 top-0 h-[3px]" style={{ background: "linear-gradient(90deg, var(--accent-gold) 0%, #E1C99A 60%, transparent 100%)" }} />
                    <span className="mb-3 font-semibold leading-none tracking-tight text-[var(--accent-gold)]" style={{ fontSize: "24px" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mb-2 text-[17px] font-semibold leading-[1.45] text-[var(--text-ink)] md:text-[18px]" style={{ wordBreak: "keep-all" }}>
                      {n.t}
                    </p>
                    <p className="mb-0 text-[14px] leading-[1.65] text-[var(--text-slate)]" style={{ wordBreak: "keep-all" }}>
                      {n.d}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-4">
                {[
                  { src: "/images/writing-after.png", cap: "같은 아이의 글 · 먼저 쓴 것" },
                  { src: "/images/writing-before.png", cap: "같은 아이의 글 · 나중에 쓴 것" },
                ].map((w) => (
                  <figure
                    key={w.src}
                    className="overflow-hidden rounded-3xl bg-white ring-1 ring-[var(--border-hairline)] shadow-[0_10px_30px_rgba(18,44,81,0.08)]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={w.src} alt="아이가 손으로 쓴 영어 이야기 원고" className="block w-full h-auto" />
                    <figcaption className="border-t border-[var(--border-hairline)] px-5 py-3 text-[13px] text-[var(--text-slate)]">
                      {w.cap}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 한 회차 수업 — 기존 «The PLS영재교육 Approach» STEP 카드 꼴 */}
      <section className="py-16 md:py-24 lg:py-[100px]" style={{ backgroundColor: "var(--bg-surface-soft)" }}>
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
            <span className="section-kicker mb-5">One Class</span>
            <h2
              className="mb-5 text-[26px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--text-ink)] md:text-[40px]"
              style={{ wordBreak: "keep-all" }}
            >
              한 회차 수업은
              <br />
              <span className="highlight highlight-light">읽기에서 서술까지</span> 갑니다.
            </h2>
            <p className="mb-0 text-base leading-relaxed text-[var(--text-slate)] md:text-lg" style={{ wordBreak: "keep-all" }}>
              읽은 글 한 편이 자기 문장의 답 한 편이 되기까지, 네 단계를 한 수업 안에서 지납니다.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {flow.map((s, i) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className="relative overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-[var(--border-hairline)] shadow-[0_8px_22px_rgba(18,44,81,0.06)] md:p-8"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 top-0 h-[3px]"
                    style={{ background: "linear-gradient(90deg, var(--accent-gold) 0%, #E1C99A 60%, transparent 100%)" }}
                  />
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <p className="mb-2 flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-steel)]">
                        <span aria-hidden className="mr-2.5 inline-block h-px w-6" style={{ background: "var(--accent-gold)" }} />
                        Step {String(i + 1).padStart(2, "0")} · {s.tag}
                      </p>
                      <p className="mb-0 font-semibold leading-none tracking-tight text-[var(--accent-gold)]" style={{ fontSize: "40px" }}>
                        {String(i + 1).padStart(2, "0")}
                      </p>
                    </div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--bg-surface-soft)] ring-1 ring-[var(--border-hairline)] text-[var(--primary-navy)]">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                  </div>
                  <h3 className="mb-4 text-[20px] font-semibold leading-[1.4] text-[var(--text-ink)] md:text-[23px]" style={{ wordBreak: "keep-all" }}>
                    {s.title}
                  </h3>
                  <div className="mb-4 h-px w-full bg-[var(--border-hairline)]" />
                  <p className="mb-5 text-[15px] leading-[1.75] text-[var(--text-charcoal)]" style={{ wordBreak: "keep-all" }}>
                    {s.body}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.chips.map((c) => (
                      <span key={c} className="rounded-full border border-[var(--border-hairline)] bg-[var(--bg-surface-soft)] px-3 py-1 text-[12px] font-medium text-[var(--text-charcoal)]">
                        {c}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--border-hairline)] bg-white p-6 md:mt-10 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
              <div>
                <p className="mb-3 text-[12px] font-semibold tracking-[0.18em] text-[var(--accent-gold)] uppercase">RIIE Framework</p>
                <p className="mb-2 text-[17px] font-semibold leading-[1.5] text-[var(--text-ink)] md:text-[19px]" style={{ wordBreak: "keep-all" }}>
                  수업 안에서, <span className="highlight highlight-light">생각이 멈추는 자리</span>를 읽습니다.
                </p>
                <p className="mb-0 text-[15px] leading-relaxed text-[var(--text-charcoal)]" style={{ wordBreak: "keep-all" }}>
                  아이의 생각이 어디에서 멈추는지 읽어 다음 수업을 설계합니다. 수업에 쓰는 교재는 직접 만들고, 수업의 과정은 라이팅 성장 리포트로 가정에 전합니다.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 md:w-[340px]">
                {riie.map((r) => (
                  <div key={r.name} className="flex items-center gap-2.5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface-soft)] px-3 py-2.5">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white" style={{ background: "var(--primary-navy)" }}>
                      {r.l}
                    </span>
                    <span className="text-[13px] font-semibold text-[var(--text-ink)]">{r.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 사람 — 기존 «Elite Faculty» 목록 꼴 + 사진, «가르친 경험 / 학력 / 그 밖의 경력» 세 칸 */}
      <section className="py-16 md:py-24 lg:py-[100px]" style={{ backgroundColor: "var(--bg-canvas)" }}>
        <div className="container mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
            <span className="section-kicker mb-5">Faculty</span>
            <h2 className="mb-0 text-[26px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--text-ink)] md:text-[40px]">
              <span className="highlight highlight-light">가르치는 사람</span>
            </h2>
          </div>
          {people.map((p, idx) => (
            <div key={p.name} className={`grid gap-x-10 gap-y-5 py-9 md:grid-cols-[150px_1fr] md:py-11 border-b border-[var(--border-hairline)] ${idx === 0 ? "border-t" : ""}`}>
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
                <Photo p={p} cls="h-20 w-20 rounded-full md:h-28 md:w-28" />
                <p className="mb-0 text-[11px] font-semibold tracking-[0.18em] text-[var(--accent-gold)] uppercase">Faculty {String(idx + 1).padStart(2, "0")}</p>
              </div>
              <div>
                <h3 className="mb-1 text-[28px] font-semibold tracking-[-0.01em] text-[var(--primary-navy)] md:text-[34px]">{p.name}</h3>
                <p className="mb-6 text-[14px] font-medium text-[var(--text-slate)] md:text-[15px]">{p.role}</p>
                <div className="grid gap-7 md:grid-cols-3 md:gap-8">
                  {cats.filter((c) => p[c.key].length).map((c) => (
                    <div key={c.key}>
                      <CatLabel ko={c.ko} en={c.en} />
                      <Dots items={p[c.key]} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 신청 안내 — 기존 마지막 남색 띠 꼴. 채운 금색 단추 대신 테두리 단추 두 개 */}
      <section id="apply" className="cta-section scroll-mt-24 md:scroll-mt-16">
        <div className="cta-container">
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-12" style={{ background: "rgba(212,180,131,0.55)" }} />
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-gold)" }} />
            <span className="h-px w-12" style={{ background: "rgba(212,180,131,0.55)" }} />
          </div>
          <h2
            className="mb-4 font-semibold text-white"
            style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.4, letterSpacing: "-0.02em", wordBreak: "keep-all" }}
          >
            읽고, 토론하고,
            <br />
            <span style={{ color: "var(--accent-gold)" }}>자기 문장으로 답하는 아이</span>
          </h2>
          <p className="mb-10" style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(255, 255, 255, 0.9)", wordBreak: "keep-all" }}>
            신청은 아이에게 맞는 쪽에서 시작합니다.
          </p>

          <div className="mx-auto grid max-w-3xl gap-4 text-left sm:grid-cols-2">
            {[
              { who: "영유 재원생", line: "아이를 평가하지 않습니다.", btn: "영유 재원생 체험수업 신청", href: "https://smore.im/form/zEkmY69tY7" },
              { who: "초등부", line: "초등부 대상 1:1 프로그램입니다.", btn: "초등부 판독 신청", href: "https://smore.im/form/O9ojDtkDhP" },
            ].map((c) => (
              <div key={c.btn} className="flex flex-col rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
                <div className="mb-2 flex items-center gap-2">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-gold)" }} />
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-white/55 uppercase">{c.who}</span>
                </div>
                <p className="mb-5 text-[15px] font-medium text-white" style={{ wordBreak: "keep-all" }}>
                  {c.line}
                </p>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 self-start rounded-full border border-[var(--accent-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--accent-gold)]"
                >
                  {c.btn}
                  <ArrowRight className="h-4 w-4" aria-hidden strokeWidth={2.25} />
                </a>
              </div>
            ))}
          </div>
          <p className="mt-8 mb-0" style={{ fontSize: "clamp(13px, 1.8vw, 15px)", color: "rgba(255, 255, 255, 0.6)" }}>
            수업 문의 ·{" "}
            <a href="http://pf.kakao.com/_xdIwEn" target="_blank" rel="noreferrer" className="underline underline-offset-4" style={{ color: "rgba(255,255,255,0.9)" }}>
              카카오톡 채널 「PLS영재교육」
            </a>
          </p>
        </div>
      </section>

      {/* 바닥글 — 기존 홈 바닥글 꼴. 블로그·인스타 링크는 점검 전이라 뺌, 주소 추가 */}
      <footer style={{ backgroundColor: "var(--bg-canvas)" }}>
        <div className="h-px w-full opacity-60" style={{ background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)" }} />
        <div className="border-t py-12 md:py-14" style={{ borderColor: "var(--border-hairline)" }}>
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center">
                <Image src="/images/pls-logo.png" alt="PLS영재교육 - Phillips Academy of Little Scholars" width={240} height={60} className="h-12 w-auto md:h-14" />
              </div>
              <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                <a href="http://pf.kakao.com/_xdIwEn" target="_blank" rel="noreferrer" className="text-sm font-medium text-[var(--text-charcoal)]">
                  공식카카오채널
                </a>
              </nav>
              <p className="mb-0 flex flex-wrap items-center justify-center gap-x-2 text-[12px] text-[var(--text-slate)]">
                <span>
                  상담문의 <span className="font-medium text-[var(--text-charcoal)]">02-3463-0010</span>
                </span>
                <span aria-hidden style={{ color: "var(--text-steel)" }}>·</span>
                <span>
                  이메일 <span className="font-medium text-[var(--text-charcoal)]">support@plsprep.com</span>
                </span>
              </p>
              <p className="mb-0 text-[12px] leading-relaxed text-[var(--text-steel)]" style={{ wordBreak: "keep-all" }}>
                서울특별시 강남구 논현로10길 16 영재센터빌딩 4층
                <br />
                서울특별시강남서초교육지원청 등록 제 15022호 피엘에스(PLS)영재교육학원
              </p>
              <p className="mb-0 pt-1 text-[12px] leading-relaxed text-[var(--text-steel)]">
                Education for Gifted and Talented Children &copy; 2026 PLS영재교육. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
