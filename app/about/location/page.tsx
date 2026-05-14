import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import { absoluteUrl } from "@/lib/site-url";
import Footer from "@/components/Footer";
import NaverMapPanel from "@/components/NaverMapPanel";

export const metadata: Metadata = {
  title: "찾아오는길 | 위치 · 주차 안내",
  description:
    "PLS영재교육(PLS프렙) 찾아오는길 안내입니다. 서울 강남구 논현로 영재센터빌딩 4층 위치, 대중교통 및 주차 정보를 확인하세요. 대치동영어·대치프렙 인근 초등레테·게이트입시 전문 영재교육센터입니다.",
  keywords: [
    "PLS영재교육",
    "피엘에스영재교육",
    "PLS프렙",
    "찾아오는길",
    "위치",
    "주차",
    "강남구",
    "논현로",
    "영재센터빌딩",
    "대치프렙",
    "대치동영어",
    "초등레테",
    "게이트입시",
  ],
  openGraph: {
    title: "찾아오는길 | 위치 · 주차 안내 | PLS영재교육",
    description:
      "PLS영재교육(PLS프렙) 찾아오는길 안내입니다. 서울 강남구 논현로 영재센터빌딩 4층 위치, 대중교통 및 주차 정보를 확인하세요.",
    images: [
      {
        url: "/images/location-building.png",
        width: 1200,
        height: 630,
        alt: "PLS영재교육 위치 및 주차 안내",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "찾아오는길 | 위치 · 주차 안내 | PLS영재교육",
    description:
      "PLS영재교육(PLS프렙) 찾아오는길 안내입니다. 서울 강남구 논현로 영재센터빌딩 4층 위치, 대중교통 및 주차 정보를 확인하세요.",
    images: ["/images/location-building.png"],
  },
  alternates: {
    canonical: "/about/location",
  },
};

export const dynamic = "force-dynamic";

export default function LocationPage() {
  const naverMapClientId =
    process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID?.trim() ?? "";

  const locationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "찾아오는길 | 위치 · 주차 안내 | PLS영재교육",
        description:
          "PLS영재교육 찾아오는길 페이지입니다. 대치/개포 PLS영재교육 위치, 주소, 주차 정보를 확인하세요.",
        url: absoluteUrl("/about/location"),
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
            name: "찾아오는길",
            item: absoluteUrl("/about/location"),
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--bg-canvas)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <Header />

      <section className="relative overflow-hidden pt-32 md:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/location-title-bg.png"
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
              위치 & 주차
            </h1>
            <p className="mt-4 text-[14px] text-[var(--primary-navy)]/65 md:text-[15px]">
              Phillips Academy of Little Scholars
            </p>
          </div>
        </div>
      </section>

      <section
        className="pt-6 px-6 pb-24 md:pt-10 md:px-8 md:pb-28 lg:pb-32"
        style={{ backgroundColor: "var(--bg-canvas)" }}
      >
        <div className="mx-auto grid max-w-[1200px] grid-cols-[4fr_6fr] gap-12 items-stretch max-[968px]:grid-cols-1">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-3 text-[14px] font-semibold tracking-[0.05em] text-[var(--text-steel)] uppercase">
                Address
              </h3>
              <p
                className="text-[19px] font-semibold leading-[1.5] text-[var(--text-ink)]"
                style={{ wordBreak: "keep-all" }}
              >
                서울시 강남구 논현로10길 16 영재센터빌딩 4층
                <br />
                <span className="text-[15px] font-normal text-[var(--text-slate)]">
                  (강남부동산 좌측 입구)
                </span>
              </p>
            </div>

            <div
              className="rounded-r-xl rounded-l-none p-6"
              style={{
                backgroundColor: "var(--bg-surface-soft)",
                borderLeft: "3px solid var(--accent-gold)",
              }}
            >
              <h3 className="mb-2 text-[14px] font-semibold tracking-[0.05em] text-[var(--text-steel)] uppercase">
                Parking Information
              </h3>
              <p className="mb-2 text-[15px] leading-[1.6] text-[var(--text-charcoal)]">
                <strong>영재센터빌딩은 주차 불가 합니다.</strong>
              </p>
              <p className="mb-0 text-[15px] leading-[1.6] text-[var(--text-charcoal)]">
                국악고 옆{" "}
                <span className="font-semibold text-[var(--primary-navy)]">
                  포이초교공영주차장
                </span>
                (도보 2분 거리)을 이용해 주세요.
              </p>
            </div>

            <div
              className="overflow-hidden rounded-2xl"
              style={{ boxShadow: "0 4px 20px rgba(18, 44, 81, 0.06)" }}
            >
              <Image
                src="/images/location-building.png"
                alt="영재센터빌딩 전경"
                width={800}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-[-18px] text-[13px] text-[var(--text-steel)]">
              영재센터빌딩 전경
            </p>
          </div>

          <div className="flex h-full flex-col gap-3 max-[968px]:h-auto">
            <div
              className="w-full flex-1 overflow-hidden rounded-3xl max-[968px]:min-h-[420px]"
              style={{
                boxShadow: "0 8px 32px rgba(18, 44, 81, 0.08)",
                backgroundColor: "var(--bg-surface-soft)",
              }}
            >
              <div className="h-full w-full min-h-0">
                <NaverMapPanel mapClientId={naverMapClientId} />
              </div>
            </div>
            <a
              href="https://map.naver.com/p/entry/place/2044921658"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[var(--border-hairline)] bg-white px-4 py-2 text-[13px] font-medium text-[var(--primary-navy)] shadow-sm transition-colors hover:border-[var(--primary-navy)]/25 hover:bg-[var(--bg-surface-soft)]"
            >
              <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              네이버 지도에서 열기
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
