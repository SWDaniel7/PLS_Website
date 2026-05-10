import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import { absoluteUrl } from "@/lib/site-url";
import Footer from "@/components/Footer";

type FacultyProfile = {
  name: string;
  role: string;
  imageSrc?: string;
  placeholderGender?: "male" | "female";
  workExperience: string[];
  education: string[];
  lead: string;
  story: string[];
};

export const metadata: Metadata = {
  title: "PLS영재교육 강사소개 | 레테·게이트 입시 전문 강사진",
  description:
    "PLS영재교육 강사소개 페이지입니다. 초등레테·게이트입시 현장 경험을 갖춘 강사진의 이력과 교육 철학을 확인하세요.",
  keywords: [
    "PLS영재교육",
    "피엘에스영재교육",
    "강사소개",
    "PLS프렙",
    "게이트입시",
    "초등레테",
    "대치프렙",
    "대치게이트",
  ],
  openGraph: {
    title: "PLS영재교육 강사소개 | 레테·게이트 입시 전문 강사진",
    description:
      "PLS영재교육 강사소개 페이지입니다. 초등레테·게이트입시 현장 경험을 갖춘 강사진의 이력과 교육 철학을 확인하세요.",
    images: [
      {
        url: "/images/faculty-daniel.png",
        alt: "PLS영재교육 강사소개",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PLS영재교육 강사소개 | 레테·게이트 입시 전문 강사진",
    description:
      "PLS영재교육 강사소개 페이지입니다. 초등레테·게이트입시 현장 경험을 갖춘 강사진의 이력과 교육 철학을 확인하세요.",
    images: ["/images/faculty-daniel.png"],
  },
};

const facultyProfiles: FacultyProfile[] = [
  {
    name: "Daniel",
    role: "대표 원장",
    imageSrc: "/images/faculty-daniel.png",
    workExperience: [
      "PLS영재교육, 대표이사",
      "PLS 대치/개포 전문관, 원장",
      "강남 게이트/초등레테 개인교습",
      "강남 특목고/자사고 입시 컨설팅",
      "Google, Global M&A, Manager",
      "주한미국대사관, KUVA, 알럼나이",
      "교육부 소속 국립국제교육원(NIIED), WEST 알럼나이",
      "appbackr, Palo Alto(실리콘밸리), BD",
    ],
    education: [
      "스탠퍼드대학교, Continuing Studies, Education & Entrepreneurship (Class '15)",
      "미국 국무부/대한민국 외교부 주관 글로벌 장학생",
      "연세대학교, 경영학과 학사",
    ],
    lead: "Google·Stanford·장학생 출신 원장이 직접 설계한, 레테를 통과하는 사고 구조",
    story: [
      "Daniel 원장은 연세대학교 경영학과 졸업 후 미국 국무부·대한민국 외교부 장학 프로그램 장학생으로 선발되었으며, Google Global M&A팀에서 데이터 분석(Data Analytics) 기반 업무를 담당하며 글로벌 기준의 분석 능력과 모델링 역량을 쌓았습니다. 이 경험을 바탕으로 영어권 교습 현장의 문해력 모델(Novel-based Literacy Model)과 미국·영국의 아동 문해력 관련 논문을 체계적으로 분석하고, 한국 아동 발달 단계에 맞게 재모델링한 문해력·사고력 성장 구조(RIIE 기반)를 설계했습니다. 교육 연구–데이터 모델링–현장 적용이 결합된 이 접근법은 PLS영재교육만의 독창적인 강점입니다.",
      "Stanford University Continuing Studies 과정을 통해 국제적 관점과 최신 학문 흐름을 지속적으로 확장해 왔으며, 미국 대사관 주관 KUVA(한미비전협회) 프로그램 멘토, 교육부 산하 국립국제교육원(NIIED) 프로그램 멘토로 활동하며 다양한 글로벌 교육 환경을 경험했습니다. 이러한 경험들은 조기 교육의 방향성을 설정하고 글로벌 기준을 반영한 학습 환경을 설계하는 데 중요한 기반이 되고 있습니다.",
      "강남 지역 초등 레벨테스트(레테) 대비와 사고형 문해력 교육에서 다수의 성취 사례를 만들어온 것은 이 구조 위에서 가능했습니다. 단순한 입시 준비가 아닌, 아이의 사고 구조를 실질적으로 변화시켜 학습 성취가 자연스럽게 따라오도록 설계하는 것. 그것이 Daniel 원장이 PLS영재교육을 통해 일관되게 해온 일입니다.",
    ],
  },
  {
    name: "Sun",
    role: "부원장",
    imageSrc: "/images/faculty-sun.png",
    workExperience: [
      "PLS영재교육, 이사",
      "PLS프렙 대치/개포 전문관, 부원장",
      "강남 게이트/초등레테 개인교습",
      "Google, Global gCare, Manager",
      "강남 초/중등부 영어학원 강사",
      "미국 현지 걸스카우트, Oklahoma, 코치",
      "미국 현지 유치원/어린이집(Pre-K), Oklahoma, 교사",
    ],
    education: [
      "University of Central Florida, BBA",
      "McLoud High School, Oklahoma",
    ],
    lead: "미국 교실에서 직접 가르치고, Google에서 검증한 언어 발달 전문가",
    story: [
      "Sun 부원장은 Google Global gCare팀 Senior Manager로서 데이터 기반 의사결정과 커뮤니케이션 구조화를 담당하며 글로벌 기준의 전문성을 쌓았습니다. 그 이전에는 미국 오클라호마에서 Pre-K 유치원과 어린이집 교사로 직접 교실을 이끌며, 영유아기 언어 발달과 초기 문해력 교육을 현장에서 지도했습니다. 단순한 영어 노출이 아닌 '이해를 기반으로 한 언어 습득'의 중요성을 몸으로 익힌 교육자입니다.",
      "미국 현지에서 걸스카우트 코치로 활동하며 아이들의 사회성, 정서 발달, 협력적 사고 구조에 대한 이해도 쌓았습니다. 언어 학습이 단순한 기술이 아니라 아이의 전인적 성장을 바탕으로 이루어져야 한다는 관점은 이 경험에서 확립되었으며, PLS영재교육의 교수 설계에 그대로 반영되고 있습니다.",
      "Google에서 구축한 구조적 사고와 문제 해결 방식은 수업 안에서도 살아 있습니다. 아이들의 사고 과정이 '읽기 → 이해 → 사고 → 표현'으로 논리적으로 연결되도록 정교하게 설계하는 것, 그리고 강남 지역 초등 레벨테스트 지도를 통해 쌓은 현장 통찰이 그 위에 더해집니다.",
      "미국 현장 경험을 가진 교사가 국내 레테 구조까지 이해하는 경우는 드뭅니다. Sun 부원장이 PLS영재교육 수업에서 만들어온 성취가 그 증거입니다.",
    ],
  },
  {
    name: "Sally",
    role: "수석강사",
    imageSrc: "/images/faculty-sally.png",
    workExperience: [
      "PLS영재교육, 교육 R&D 담당",
      "PLS 대치/개포 전문관, 수석강사",
      "강남 게이트/초등레테 교습",
      "정철어학원 초등부 전임 강사",
      "전문 라이팅 교수법 기반 교육과정 설계 전문가",
      "원서 수업 커리큘럼 기획 및 설계",
      "국제 컨퍼런스 미팅 영·한 순차·동시 통역",
      "VIP 의전 및 C레벨 임원 수행통역",
      "프리랜서 통역사/번역가",
    ],
    education: ["성균관대학교, 문과대학 학사", "Langara College, Canada"],
    lead: "캐나다 사립학교를 나온 이중언어자가 직접 설계하고 가르치는 레테 수업",
    story: [
      "Sally 선생님은 캐나다 사립학교와 Langara College를 거치며 영어를 '배운 것'이 아닌 '살아온' 언어로 체화한 이중언어자입니다. 성균관대학교 문과대학에서 한국어 기반 언어·문학적 사고까지 깊이 쌓았습니다. 두 언어를 모두 모국어 수준으로 구사한다는 것은 수업 안에서 결정적인 강점이 됩니다. 아이가 어디서 막히는지, 한국어 사고 구조가 영어 표현에 어떻게 간섭하는지를 정확하게 읽어낼 수 있기 때문입니다.",
      "정철어학원 초등부 전임강사를 거쳐 강남 게이트·초등레테 지도 경험을 쌓으며 레테 현장에 대한 실전 통찰을 확보했습니다. 어떤 아이가 어떤 문항 유형에서 막히는지, 그 지점을 어떻게 뚫어주는지를 누구보다 현장에서 직접 다뤄온 선생님입니다.",
      "현재는 수석강사로 수업을 이끄는 동시에 PLS영재교육의 교육 R&D를 담당하며 원서 수업 커리큘럼 기획과 설계, 전문 라이팅 교수법 기반 교육과정 설계까지 맡고 있습니다. 수업을 잘 가르치는 강사가 아니라, 수업 자체를 만드는 사람입니다.",
      "아이의 언어 구조를 두 언어로 동시에 읽고, 레테 현장을 직접 통과시켜온 경험이 Sally 선생님이 PLS영재교육 수업에서 만들어온 성취의 기반입니다.",
    ],
  },
  {
    name: "David",
    role: "부원장",
    imageSrc: "/images/faculty-david.png",
    workExperience: [
      "PLS영재교육, 이사",
      "PLS 대치/개포 전문관, 부원장",
      "강남 게이트/초등레테 개인교습",
      "청담에이프릴어학원 초등부 강사",
      "다수 어학원 초/중등부 강사",
    ],
    education: [
      "San Luis Obispo C. School, Private School in USA",
      "Coastal C. School in, Private School in USA",
    ],
    lead: "미국 사립학교를 직접 경험한 이중언어자가 설계하는, 강남 레테 입시 전략",
    story: [
      "David 부원장은 미국 사립학교(San Luis Obispo C. School, Coastal C. School)를 거치며 영어를 학습 언어가 아닌 사고의 도구로 체득한 이중언어자입니다. 단순한 영어 노출이 아니라, 미국 교육 현장에서 직접 읽고 쓰고 토론하며 언어 구조 자체를 몸으로 익혔습니다. 이 경험은 아이가 어느 지점에서 언어적으로 막히는지를 정확히 짚어낼 수 있는 감각으로 이어집니다.",
      "청담에이프릴어학원 초등부 강사를 시작으로 다수의 대형 어학원 초·중등부 강사로 현장 경험을 쌓은 뒤, 강남 게이트·초등레테 개인교습을 통해 입시 현장의 실전 통찰을 키웠습니다. 어떤 아이가 어떤 문항 유형에서 흔들리는지, 그 지점을 어떻게 채워야 탑반 배정으로 이어지는지를 가장 가까이서 다뤄온 전문가입니다.",
      "현재 PLS영재교육 부원장으로서 대치·개포 전문관의 입시 전략 전반을 총괄하며, 게이트 입시와 예비초레테 입시 두 축을 동시에 설계하고 있습니다. 수업 방향 설정부터 학부모 상담, 입시 컨설팅까지 유기적으로 연결하는 것이 David 부원장이 맡고 있는 일입니다.",
      "미국 사립학교에서 체득한 언어 구조의 감각과, 강남 레테 현장에서 쌓아온 입시 통찰을 동시에 갖춘 것,그것이 David 부원장이 PLS영재교육에서 만들어온 성취의 기반입니다.",
    ],
  },
];

function ProfileSection({ profile }: { profile: FacultyProfile }) {
  return (
    <section
      className="border-b border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-6 py-14 md:px-8 md:py-20 lg:px-12 lg:py-24"
      style={{ overflowAnchor: "none" }}
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[35%_65%] lg:gap-20">
        <aside className="max-[968px]:static lg:sticky lg:top-[120px] lg:self-start">
          <div className="mb-8 overflow-hidden rounded-2xl ring-1 ring-[var(--border-hairline)]">
            {profile.imageSrc ? (
              <Image
                src={profile.imageSrc}
                alt={`${profile.name} 프로필 사진`}
                width={900}
                height={1125}
                className="h-auto w-full grayscale"
                priority={profile.name === "Daniel"}
              />
            ) : (
              <div
                className="relative aspect-[4/5] w-full"
                style={{
                  background:
                    "radial-gradient(ellipse 85% 70% at 50% 28%, rgba(212,180,131,0.22) 0%, var(--accent-sand) 42%, #D8CFC0 100%)",
                }}
                aria-label={`${profile.name} 프로필 준비중`}
              >
                <svg
                  viewBox="0 0 120 120"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden
                >
                  {profile.placeholderGender === "female" ? (
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
                      <path
                        opacity="0.5"
                        d="M52 52h16v8l8 4 10 38H34l10-38 8-4v-8z"
                      />
                      <path
                        opacity="0.55"
                        d="M48 28c4-6 10-9 16-8 2 4 3 8 2 13-6-2-12-3-18-5z"
                      />
                    </g>
                  )}
                </svg>
              </div>
            )}
          </div>

          <h2 className="mb-1 text-[34px] font-semibold tracking-[-0.02em] text-[var(--text-ink)]">
            {profile.name}
          </h2>
          <p className="mb-8 text-[16px] font-medium text-[var(--text-slate)]">
            {profile.role}
          </p>

          <div>
            <h3 className="mb-4 border-b border-[var(--border-hairline)] pb-2 text-[13px] font-semibold tracking-[0.06em] text-[var(--text-steel)] uppercase">
              Work Experience
            </h3>
            <div className="space-y-2.5">
              {profile.workExperience.map((item) => (
                <p
                  key={item}
                  className="mb-0 text-[14px] leading-relaxed text-[var(--text-charcoal)]"
                  style={{ wordBreak: "keep-all" }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 border-b border-[var(--border-hairline)] pb-2 text-[13px] font-semibold tracking-[0.06em] text-[var(--text-steel)] uppercase">
              Education
            </h3>
            <div className="space-y-2.5">
              {profile.education.map((item) => (
                <p
                  key={item}
                  className="mb-0 text-[14px] leading-relaxed text-[var(--text-charcoal)]"
                  style={{ wordBreak: "keep-all" }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </aside>

        <article className="relative overflow-hidden pt-2 md:pt-4">
          <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 h-[68%] w-[88%] -translate-x-1/2 -translate-y-1/2 opacity-[0.045]">
              <Image
                src="/images/faculty-bg-logo.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="mb-8 text-[20px] font-semibold leading-[1.7] tracking-[-0.01em] text-[var(--primary-navy)]">
            {profile.lead}
          </p>
          {profile.story.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-8 text-[17px] leading-[1.7] text-[var(--text-charcoal)]"
              style={{ wordBreak: "keep-all" }}
            >
              {paragraph}
            </p>
          ))}
        </article>
      </div>
    </section>
  );
}

export default function FacultyPage() {
  const facultySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "PLS영재교육 강사소개 | 레테·게이트 입시 전문 강사진",
        description:
          "PLS영재교육 강사소개 페이지입니다. 초등레테·게이트입시 현장 경험을 갖춘 강사진의 이력과 교육 철학을 확인하세요.",
        url: absoluteUrl("/about/faculty"),
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
            name: "강사소개",
            item: absoluteUrl("/about/faculty"),
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--bg-canvas)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(facultySchema) }}
      />
      <Header />

      <section className="relative overflow-hidden pt-32 md:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/faculty-title-bg.png"
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
              강사소개
            </h1>
            <p className="mt-4 text-[14px] text-[var(--primary-navy)]/65 md:text-[15px]">
              Phillips Academy of Little Scholars
            </p>
          </div>
        </div>
      </section>

      {facultyProfiles.map((profile) => (
        <ProfileSection key={profile.name} profile={profile} />
      ))}

      <Footer />
    </main>
  );
}
