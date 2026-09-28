// 강사 소개 매거진 리스트 섹션 — 사진 없이 에디토리얼 레이아웃으로 전시
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CVEntry {
  org: string;
  division?: string;
  role?: string;
}

interface FacultyProfile {
  name: string;
  role: string;
  highlights: string[];
  workExperience: CVEntry[];
  education: CVEntry[];
}

const profiles: FacultyProfile[] = [
  {
    name: "Daniel",
    role: "PLS영재교육 대표이사",
    highlights: [
      "게이트 입시",
      "초등 레테 입시",
      "Google",
      "연세대학교",
      "스탠퍼드대학교",
      "입시컨설팅",
    ],
    workExperience: [
      { org: "PLS영재교육", role: "대표이사" },
      { org: "PLS 대치/개포 전문관", role: "원장" },
      { org: "강남 게이트/초등레테 개인교습" },
      { org: "강남 특목고/자사고 입시 컨설팅" },
      { org: "Google", division: "Global M&A", role: "Manager" },
      { org: "주한미국대사관", division: "KUVA", role: "알럼나이" },
      { org: "국립국제교육원(NIIED)", role: "알럼나이" },
      { org: "appbackr, Palo Alto", role: "BD" },
    ],
    education: [
      { org: "스탠퍼드대학교", role: "Continuing Studies (Class '15)" },
      { org: "미국 국무부 주관 글로벌 장학생" },
      { org: "연세대학교", role: "경영학과 학사" },
    ],
  },
  {
    name: "Sun",
    role: "PLS영재교육 이사",
    highlights: [
      "게이트 입시",
      "초등 레테 입시",
      "Google",
      "압구정영어",
      "미국걸스카우트",
      "미국유치원",
    ],
    workExperience: [
      { org: "PLS영재교육", role: "이사" },
      { org: "PLS 대치/개포 전문관", role: "부원장" },
      { org: "강남 게이트/초등레테 개인교습" },
      { org: "Google", division: "Global gCare", role: "Manager" },
      { org: "강남 초/중등부 영어학원 강사" },
      { org: "미국 현지 걸스카우트", division: "Oklahoma", role: "코치" },
      { org: "미국 현지 유치원", division: "Oklahoma", role: "교사" },
    ],
    education: [
      { org: "University of Central Florida", role: "BBA" },
      { org: "McLoud High School", division: "Oklahoma" },
    ],
  },
  {
    name: "Sally",
    role: "PLS영재교육 수석강사",
    highlights: [
      "초등 레테 입시",
      "게이트 입시",
      "이중언어자",
      "성균관대학교",
      "캐나다사립학교",
      "영어영문학",
    ],
    workExperience: [
      { org: "PLS영재교육", role: "교육 R&D 담당" },
      { org: "PLS 대치/개포 전문관", role: "수석강사" },
      { org: "강남 게이트/초등레테 교습" },
      { org: "정철어학원 초등부 전임 강사" },
      { org: "전문 라이팅 교수법 기반 교육과정 설계 전문가" },
      { org: "원서 수업 커리큘럼 기획 및 설계" },
      { org: "국제 컨퍼런스 미팅 영·한 순차·동시 통역" },
      { org: "VIP 의전 및 C레벨 임원 수행통역" },
      { org: "프리랜서 통역사/번역가" },
    ],
    education: [
      { org: "성균관대학교", role: "문과대학 학사" },
      { org: "Langara College, Canada" },
    ],
  },
  {
    name: "David",
    role: "PLS영재교육 부원장",
    highlights: [
      "게이트 입시",
      "초등 레테 입시",
      "이중언어자",
      "미국사립학교",
      "대형어학원강사",
      "입시컨설팅",
    ],
    workExperience: [
      { org: "PLS영재교육", role: "이사" },
      { org: "PLS 대치/개포 전문관", role: "부원장" },
      { org: "강남 게이트/초등레테 개인교습" },
      { org: "청담에이프릴어학원 초등부 강사" },
      { org: "다수 어학원 초/중등부 강사" },
    ],
    education: [
      { org: "San Luis Obispo C. School", division: "Private School in USA" },
      { org: "Coastal C. School in", division: "Private School in USA" },
    ],
  },
  {
    name: "Hayden",
    role: "PLS영재교육 연구강사",
    highlights: [
      "초등레테 입시",
      "SAT 상위1%",
      "이중언어자",
      "연세대학교",
      "국제학교",
      "국제학부",
    ],
    workExperience: [
      { org: "PLS영재교육", role: "교육 R&D 담당" },
      { org: "PLS 대치/개포 전문관", role: "강사" },
      { org: "초등레테 개인교습" },
      { org: "Mock TOEFL 감독관" },
      { org: "TOEIC 학원" },
    ],
    education: [
      { org: "연세대학교 국제학부(UIC)", role: "학사" },
      { org: "미국 SAT 1530", role: "상위 1% 수준" },
      { org: "Shanghai High School International Division" },
    ],
  },
];

function CVList({ label, entries }: { label: string; entries: CVEntry[] }) {
  return (
    <div>
      <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-[var(--text-steel)] uppercase">
        <span
          aria-hidden
          className="inline-block h-px w-6"
          style={{ background: "var(--accent-gold)" }}
        />
        {label}
      </p>
      <ul className="space-y-2.5">
        {entries.map((entry, idx) => {
          const parts = [entry.org, entry.division, entry.role].filter(
            (p): p is string => Boolean(p)
          );
          return (
            <li
              key={`${entry.org}-${idx}`}
              className="flex items-start gap-2.5 text-[13.5px] leading-[1.6] md:text-[14px]"
              style={{ wordBreak: "keep-all" }}
            >
              <span
                aria-hidden
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: "var(--accent-gold)" }}
              />
              <span className="text-[var(--text-charcoal)]">
                {parts.map((part, i) => {
                  const isLast = i === parts.length - 1;
                  const hasMultiple = parts.length > 1;
                  return (
                    <span key={i}>
                      {i > 0 && (
                        <span className="text-[var(--text-steel)]">, </span>
                      )}
                      {isLast && hasMultiple ? (
                        <span className="font-semibold text-[var(--text-ink)]">
                          {part}
                        </span>
                      ) : (
                        <span>{part}</span>
                      )}
                    </span>
                  );
                })}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function FacultyRow({
  profile,
  facultyIndex,
  isFirst,
}: {
  profile: FacultyProfile;
  facultyIndex: number;
  isFirst: boolean;
}) {
  return (
    <article
      className={`grid gap-x-12 gap-y-6 py-12 md:grid-cols-[160px_1fr] md:py-14 ${
        isFirst ? "border-y" : "border-b"
      } border-[var(--border-hairline)]`}
    >
      {/* 좌측: 매거진 챕터 인덱스 */}
      <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-1 md:pt-1">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-[var(--accent-gold)] uppercase">
          Faculty {String(facultyIndex + 1).padStart(2, "0")}
        </p>
        <p
          className="font-light leading-none tracking-[-0.03em] text-[var(--primary-navy)] opacity-20 text-[52px] md:text-[72px]"
        >
          {String(facultyIndex + 1).padStart(2, "0")}
        </p>
      </div>

      {/* 우측: 본문 */}
      <div className="flex flex-col">
        <h3 className="mb-1 text-[28px] font-semibold tracking-[-0.01em] text-[var(--primary-navy)] md:text-[34px]">
          {profile.name}
        </h3>
        <p
          className="mb-5 text-[14px] font-medium leading-snug text-[var(--text-slate)] md:text-[15px]"
          style={{ wordBreak: "keep-all" }}
        >
          {profile.role}
        </p>

        <div className="mb-8 flex flex-wrap gap-1.5">
          {profile.highlights.map((h) => (
            <span
              key={h}
              className="rounded-full border border-[var(--accent-gold)]/45 bg-[var(--accent-sand)]/55 px-2.5 py-1 text-[11px] font-semibold tracking-tight text-[var(--primary-navy)]"
              style={{ wordBreak: "keep-all" }}
            >
              {h}
            </span>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <CVList label="Work Experience" entries={profile.workExperience} />
          <CVList label="Education" entries={profile.education} />
        </div>

        <Link
          href="/about/faculty"
          className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-[var(--primary-navy)] transition-colors hover:text-[var(--accent-gold)]"
        >
          <span>강사 소개 보기</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export default function FacultySection() {
  return (
    <section
      id="faculty"
      className="section-padding py-16 md:py-24 lg:py-[100px] scroll-mt-24 md:scroll-mt-16"
      style={{ backgroundColor: "var(--bg-canvas)" }}
    >
      <div className="container mx-auto max-w-5xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <span className="section-kicker reveal-body mb-5">Elite Faculty</span>
          <h2
            className="reveal-title mb-5 text-[26px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--text-ink)] md:text-[40px]"
            style={{ wordBreak: "keep-all" }}
          >
            PLS영재교육은
            <br />
            언어를 통해 직접{" "}
            <span className="highlight highlight-light">그 문</span>을
            열어본 강사들이 이끌어갑니다.
          </h2>
          <p
            className="reveal-body mb-0 text-base font-medium leading-relaxed text-[var(--text-charcoal)] md:text-[19px]"
            style={{ wordBreak: "keep-all" }}
          >
            우리의 &apos;성취 경험&apos;은, 아이에게 첫 &apos;성공의 경험&apos;
            으로 이어집니다.
          </p>
        </div>

        <div className="reveal-body">
          {profiles.map((profile, idx) => (
            <FacultyRow
              key={profile.name}
              profile={profile}
              facultyIndex={idx}
              isFirst={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
