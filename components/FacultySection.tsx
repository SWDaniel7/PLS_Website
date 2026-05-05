"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CVEntry {
  org: string;
  role?: string;
}

interface FacultyProfile {
  name: string;
  imageSrc: string;
  imageAlt: string;
  workExperience: CVEntry[];
  education: CVEntry[];
}

const profiles: FacultyProfile[] = [
  {
    name: "Daniel",
    imageSrc: "/images/faculty-daniel.png",
    imageAlt: "Daniel — PLS영재교육 대표이사",
    workExperience: [
      { org: "PLS영재교육", role: "대표이사" },
      { org: "PLS 대치/개포 전문관", role: "원장" },
      { org: "강남 게이트/초등레테 개인교습" },
      { org: "강남 특목고/자사고 입시 컨설팅" },
      { org: "Google, Global M&A", role: "Manager" },
      { org: "주한미국대사관, ALWA", role: "알럼나이" },
      { org: "국립국제교육원(NIIED)", role: "영어에디터" },
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
    imageSrc: "/images/faculty-sun.png",
    imageAlt: "Sun — PLS영재교육 이사",
    workExperience: [
      { org: "PLS영재교육", role: "이사" },
      { org: "PLS 대치/개포 전문관", role: "부원장" },
      { org: "강남 게이트/초등레테 개인교습" },
      { org: "Google, Global gCare", role: "Manager" },
      { org: "강남 초/중등부 영어학원 강사" },
      { org: "미국 현지 걸스카우트, Oklahoma", role: "코치" },
      { org: "미국 현지 유치원, Oklahoma", role: "교사" },
    ],
    education: [
      { org: "University of Central Florida", role: "BBA" },
      { org: "McLoud High School, Oklahoma" },
    ],
  },
];

function CVList({ label, entries }: { label: string; entries: CVEntry[] }) {
  return (
    <div>
      <p className="mb-4 mt-8 text-[12px] font-semibold tracking-[0.16em] text-[var(--text-steel)] uppercase md:mt-10">
        {label}
      </p>
      <div className="border-t border-[var(--bg-surface)]">
        {entries.map((entry, idx) => (
          <div
            key={`${entry.org}-${idx}`}
            className="flex items-baseline justify-between gap-4 border-b border-[var(--bg-surface)] py-3"
          >
            <span
              className="text-[14px] leading-relaxed text-[var(--text-charcoal)] md:text-[15px]"
              style={{ wordBreak: "keep-all" }}
            >
              {entry.org}
            </span>
            {entry.role && (
              <span
                className="shrink-0 text-right text-[14px] font-medium text-[var(--text-ink)] md:text-[15px]"
                style={{ wordBreak: "keep-all" }}
              >
                {entry.role}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FacultySection() {
  return (
    <section
      id="faculty"
      className="section-padding py-16 md:py-24 lg:py-[100px]"
      style={{ backgroundColor: "var(--bg-canvas)" }}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <span className="section-kicker reveal-body mb-5">Elite Faculty</span>
          <h2
            className="reveal-title mb-5 text-[26px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--text-ink)] md:text-[40px]"
            style={{ wordBreak: "keep-all" }}
          >
            PLS영재교육은
            <br />
            언어를 통해 직접{" "}
            <span className="highlight highlight-light">최상위 1%의 문</span>을
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

        <div className="grid gap-14 md:gap-16 lg:grid-cols-2">
          {profiles.map((p) => (
            <article key={p.name} className="reveal-body">
              <div
                className="group mb-8 overflow-hidden rounded-2xl"
                style={{ backgroundColor: "var(--bg-surface-soft)" }}
              >
                <div className="aspect-[4/5] w-full">
                  <Image
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    width={1024}
                    height={1280}
                    className="h-full w-full scale-100 object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
                    priority={false}
                  />
                </div>
              </div>

              <h3 className="mb-0 border-b-2 border-[var(--text-ink)] pb-4 text-[26px] font-semibold tracking-[-0.01em] text-[var(--primary-navy)] md:text-[28px]">
                {p.name}
              </h3>

              <CVList label="Work Experience" entries={p.workExperience} />
              <CVList label="Education" entries={p.education} />

              <Link
                href="#"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 md:mt-10"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  color: "var(--text-charcoal)",
                }}
              >
                <span className="transition-colors duration-300 group-hover:text-[var(--primary-navy)]">
                  More
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary-navy)]" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
