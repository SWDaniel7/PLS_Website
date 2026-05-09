"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

interface CVEntry {
  org: string;
  division?: string;
  role?: string;
}

interface FacultyProfile {
  name: string;
  role: string;
  imageSrc?: string;
  imageAlt: string;
  placeholder?: { gender: "male" | "female" };
  highlights: string[];
  workExperience: CVEntry[];
  education: CVEntry[];
}

const profiles: FacultyProfile[] = [
  {
    name: "Daniel",
    role: "PLS영재교육 대표이사",
    imageSrc: "/images/faculty-daniel.png",
    imageAlt: "Daniel — PLS영재교육 대표이사",
    highlights: [
      "게이트 입시",
      "예비초레테 입시",
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
    role: "PLS영재교육 부원장",
    imageSrc: "/images/faculty-sun.png",
    imageAlt: "Sun — PLS영재교육 부원장",
    highlights: [
      "게이트 입시",
      "예비초레테 입시",
      "Google",
      "압구정영어",
      "미국걸스카우트",
      "미국유치원",
    ],
    workExperience: [
      { org: "PLS영재교육", role: "부원장" },
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
    imageSrc: "/images/faculty-placeholder.png",
    placeholder: { gender: "female" },
    imageAlt: "Sally — PLS영재교육 수석강사",
    highlights: [
      "예비초레테 입시",
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
    ],
    education: [
      { org: "성균관대학교", role: "문과대학 학사" },
      { org: "Langara College, Canada" },
    ],
  },
  {
    name: "David",
    role: "PLS영재교육 부원장",
    imageSrc: "/images/faculty-david.png",
    placeholder: { gender: "male" },
    imageAlt: "David — PLS영재교육 부원장",
    highlights: [
      "게이트 입시",
      "예비초레테 입시",
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
    imageSrc: "/images/faculty-placeholder.png",
    placeholder: { gender: "male" },
    imageAlt: "Hayden — PLS영재교육 연구강사",
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

function SilhouettePlaceholder({
  gender,
  size,
}: {
  gender: "male" | "female";
  size: string;
}) {
  return (
    <div
      className={`relative aspect-square ${size} overflow-hidden rounded-2xl ring-1 ring-[var(--border-hairline)]`}
      style={{
        background:
          "radial-gradient(ellipse 85% 70% at 50% 28%, rgba(212,180,131,0.22) 0%, var(--accent-sand) 42%, #D8CFC0 100%)",
      }}
    >
      <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {gender === "female" ? (
          <g fill="var(--primary-navy)">
            <ellipse cx="60" cy="38" rx="22" ry="18" opacity="0.34" />
            <path
              opacity="0.48"
              d="M60 30c-10.5 0-19 6.5-21.5 16-.8 3.3-.6 6.8.6 10 1.5 4 4.7 7 8.6 8.4L44 68c-5 1.6-9 5.8-10.7 11L28 118h64l-5.3-39c-1.7-5.2-5.7-9.4-10.7-11L72 64.4c3.9-1.4 7.1-4.4 8.6-8.4 1.2-3.2 1.4-6.7.6-10C79 36.5 70.5 30 60 30zm0 6.5c6.6 0 12 4.3 13.7 10.2.4 1.3.6 2.7.6 4.1 0 7.2-5.9 13.2-13.2 13.4h-.2C53.6 64 47.7 58 47.7 50.8c0-1.4.2-2.8.6-4.1C50 40.8 55.4 36.5 60 36.5z"
            />
          </g>
        ) : (
          <g fill="var(--primary-navy)">
            <path
              opacity="0.45"
              d="M60 22c-10 0-19 6-22 16-2 6-1 13 2 18 4 6 11 10 20 10s16-4 20-10c3-5 4-12 2-18-3-10-12-16-22-16z"
            />
            <path opacity="0.5" d="M52 52h16v8l8 4 10 38H34l10-38 8-4v-8z" />
            <path
              opacity="0.55"
              d="M48 28c4-6 10-9 16-8 2 4 3 8 2 13-6-2-12-3-18-5z"
            />
          </g>
        )}
      </svg>
      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-[var(--primary-navy)] uppercase shadow-sm ring-1 ring-[var(--border-hairline)]">
        <span
          aria-hidden
          className="h-1 w-1 rounded-full"
          style={{ background: "var(--accent-gold)" }}
        />
        Photo soon
      </span>
    </div>
  );
}

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

function FacultyCard({
  profile,
  facultyIndex,
  imagePriority,
  onPhotoZoom,
}: {
  profile: FacultyProfile;
  facultyIndex: number;
  imagePriority: boolean;
  onPhotoZoom?: () => void;
}) {
  const photoSize =
    "w-[200px] sm:w-[230px] md:w-[260px] lg:w-[260px] xl:w-[280px]";
  const isDaniel = profile.name === "Daniel";

  return (
    <article className="group flex h-full min-h-[46rem] flex-col overflow-hidden rounded-3xl border border-[var(--border-hairline)] bg-white p-6 shadow-[0_8px_24px_rgba(18,44,81,0.06)] sm:min-h-[50rem] md:min-h-[52rem] lg:min-h-[54rem] md:p-8">
      <div className="mb-7 flex shrink-0 flex-col items-start gap-6 sm:flex-row sm:gap-7">
        {profile.imageSrc ? (
          <button
            type="button"
            onClick={onPhotoZoom}
            className="relative shrink-0 cursor-zoom-in overflow-hidden rounded-2xl bg-[var(--bg-surface-soft)] text-left ring-1 ring-[var(--border-hairline)] transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-navy)]"
            aria-label={`${profile.name} 프로필 사진 확대 보기`}
          >
            <div className={`aspect-square ${photoSize}`}>
              <Image
                src={profile.imageSrc}
                alt={profile.imageAlt}
                width={560}
                height={560}
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 280px"
                className="h-full w-full object-cover grayscale"
                style={
                  isDaniel
                    ? { objectPosition: "52% 50%", transform: "scale(1.12)" }
                    : undefined
                }
                priority={imagePriority}
              />
            </div>
          </button>
        ) : (
          <SilhouettePlaceholder
            gender={profile.placeholder?.gender ?? "male"}
            size={photoSize}
          />
        )}

        <div className="flex flex-1 flex-col">
          <p className="mb-2 text-[11px] font-semibold tracking-[0.18em] text-[var(--accent-gold)] uppercase">
            Faculty {String(facultyIndex + 1).padStart(2, "0")}
          </p>
          <h3 className="mb-1 text-[28px] font-semibold tracking-[-0.01em] text-[var(--primary-navy)] md:text-[32px]">
            {profile.name}
          </h3>
          <p
            className="mb-4 text-[14px] font-medium leading-snug text-[var(--text-slate)] md:text-[15px]"
            style={{ wordBreak: "keep-all" }}
          >
            {profile.role}
          </p>
          <div className="flex flex-wrap gap-1.5">
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
        </div>
      </div>

      <div className="mb-6 flex flex-1 flex-col space-y-6">
        <CVList label="Work Experience" entries={profile.workExperience} />
        <CVList label="Education" entries={profile.education} />
      </div>

      <Link
        href="/about/faculty"
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-200 hover:bg-[var(--primary-navy)] hover:text-white"
        style={{
          backgroundColor: "var(--bg-surface)",
          color: "var(--text-charcoal)",
        }}
      >
        <span>강사 소개 보기</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

export default function FacultySection() {
  const displayProfiles = profiles;
  const count = displayProfiles.length;
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [zoomFacultyIndex, setZoomFacultyIndex] = useState<number | null>(
    null
  );

  const goPrev = () => setPage((p) => (p - 1 + count) % count);
  const goNext = () => setPage((p) => (p + 1) % count);

  const closeZoom = useCallback(() => setZoomFacultyIndex(null), []);

  useEffect(() => {
    if (zoomFacultyIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeZoom();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [zoomFacultyIndex, closeZoom]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const cardsPerView = isMobile ? 2 : 4;
  const visibleIndices = Array.from({ length: cardsPerView }, (_, offset) => {
    return (page + offset) % count;
  });
  const zoomProfile =
    zoomFacultyIndex !== null ? displayProfiles[zoomFacultyIndex] : null;

  return (
    <section
      id="faculty"
      className="section-padding py-16 md:py-24 lg:py-[100px] scroll-mt-24 md:scroll-mt-16"
      style={{ backgroundColor: "var(--bg-canvas)" }}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
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

        <div className="reveal-body relative mt-8 px-2 sm:px-6 md:mt-10 md:px-10">
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 top-[200px] z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-hairline)] bg-white text-[var(--primary-navy)] shadow-[0_6px_20px_rgba(18,44,81,0.1)] transition-colors hover:bg-[var(--bg-surface-soft)] sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0 md:h-11 md:w-11"
            aria-label="이전 강사"
          >
            <ChevronLeft className="h-5 w-5 shrink-0" strokeWidth={2.25} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 top-[200px] z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-hairline)] bg-white text-[var(--primary-navy)] shadow-[0_6px_20px_rgba(18,44,81,0.1)] transition-colors hover:bg-[var(--bg-surface-soft)] sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0 md:h-11 md:w-11"
            aria-label="다음 강사"
          >
            <ChevronRight className="h-5 w-5 shrink-0" strokeWidth={2.25} />
          </button>

          <div className="grid min-h-0 gap-8 md:grid-cols-2 md:gap-9 lg:gap-10 lg:items-stretch">
            {visibleIndices.map((profileIdx, cardPos) => (
              <FacultyCard
                key={`${profileIdx}-${page}-${cardPos}`}
                profile={displayProfiles[profileIdx]}
                facultyIndex={profileIdx}
                imagePriority={page === 0 && profileIdx < 2}
                onPhotoZoom={
                  displayProfiles[profileIdx].imageSrc
                    ? () => setZoomFacultyIndex(profileIdx)
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </div>

      {zoomProfile?.imageSrc ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="프로필 사진 확대"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--primary-navy-dark)]/70 p-4 sm:p-6 supports-[backdrop-filter]:bg-[var(--primary-navy-dark)]/46 supports-[backdrop-filter]:backdrop-blur-xl"
          onClick={closeZoom}
        >
          <div
            className="relative flex w-full max-w-[min(96vw,920px)] flex-col overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface-soft)] shadow-[0_24px_64px_-8px_rgba(11,28,57,0.2),0_8px_24px_-6px_rgba(11,28,57,0.08)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeZoom}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary-navy-dark)]/45 text-white ring-1 ring-[var(--primary-navy)]/20 backdrop-blur-sm transition-colors hover:bg-[var(--primary-navy-dark)]/62 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-navy)]"
              aria-label="닫기"
            >
              <X className="h-4 w-4" strokeWidth={2.25} />
            </button>
            <div className="relative bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-surface-soft)] px-4 pb-5 pt-11 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55)] sm:px-8 sm:pb-7 sm:pt-12">
              <div className="relative mx-auto flex min-h-[min(50dvh,400px)] w-full max-w-full items-center justify-center sm:min-h-[min(56dvh,500px)]">
                <Image
                  src={zoomProfile.imageSrc}
                  alt={zoomProfile.imageAlt}
                  width={1200}
                  height={1200}
                  sizes="(max-width: 1024px) 92vw, 840px"
                  className="relative z-[1] mx-auto h-auto max-h-[min(60dvh,720px)] w-auto max-w-full rounded-lg object-contain shadow-[0_12px_40px_rgba(11,28,57,0.12)] ring-1 ring-black/[0.06]"
                  priority
                />
              </div>
            </div>
            <div className="border-t border-[var(--border-hairline)] bg-[color-mix(in_srgb,var(--accent-sand)_38%,var(--bg-canvas))] px-5 py-5 sm:px-8 sm:py-6">
              <p className="mb-1.5 text-[10px] font-semibold tracking-[0.22em] text-[var(--text-steel)] uppercase">
                Faculty {String(zoomFacultyIndex + 1).padStart(2, "0")}
              </p>
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--text-ink)] sm:text-2xl">
                {zoomProfile.name}
              </h3>
              <p
                className="mt-1 text-[14px] font-medium leading-snug text-[var(--text-slate)] sm:text-[15px]"
                style={{ wordBreak: "keep-all" }}
              >
                {zoomProfile.role}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {zoomProfile.highlights.slice(0, 6).map((h) => (
                  <span
                    key={h}
                    className="rounded-md border border-[var(--border-hairline)] bg-white/85 px-2.5 py-1 text-[10px] font-medium text-[var(--text-charcoal)] sm:text-[11px]"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
