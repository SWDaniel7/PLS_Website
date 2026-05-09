import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NaverMapPanel from "@/components/NaverMapPanel";

export const metadata: Metadata = {
  title: "PLS영재교육 찾아오는길 | 위치 · 주차 안내",
  description:
    "PLS영재교육 찾아오는길 페이지입니다. 대치/개포 PLS영재교육 위치, 주소, 주차 정보를 확인하세요.",
  keywords: [
    "PLS영재교육",
    "피엘에스영재교육",
    "찾아오는길",
    "위치",
    "주차",
    "대치프렙",
    "대치동영어",
  ],
  openGraph: {
    title: "PLS영재교육 찾아오는길 | 위치 · 주차 안내",
    description:
      "PLS영재교육 찾아오는길 페이지입니다. 대치/개포 PLS영재교육 위치, 주소, 주차 정보를 확인하세요.",
    images: [
      {
        url: "/images/location-building.png",
        alt: "PLS영재교육 위치 및 주차 안내",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PLS영재교육 찾아오는길 | 위치 · 주차 안내",
    description:
      "PLS영재교육 찾아오는길 페이지입니다. 대치/개포 PLS영재교육 위치, 주소, 주차 정보를 확인하세요.",
    images: ["/images/location-building.png"],
  },
};

export default function LocationPage() {
  const locationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "PLS영재교육 찾아오는길 | 위치 · 주차 안내",
        description:
          "PLS영재교육 찾아오는길 페이지입니다. 대치/개포 PLS영재교육 위치, 주소, 주차 정보를 확인하세요.",
        url: "https://pls-website-iota.vercel.app/about/location",
        inLanguage: "ko-KR",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "홈",
            item: "https://pls-website-iota.vercel.app/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "찾아오는길",
            item: "https://pls-website-iota.vercel.app/about/location",
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

      <section className="pt-32 md:pt-36">
        <div className="mx-auto max-w-[1200px] px-6 pb-20 text-center md:px-8 md:pb-24">
          <p className="mb-3 text-[12px] font-semibold tracking-[0.22em] text-[var(--text-steel)] uppercase">
            About PLS
          </p>
          <h1
            className="mx-auto max-w-4xl text-[44px] font-semibold leading-[1.15] tracking-[-0.03em] text-[var(--text-ink)] md:text-[72px]"
            style={{ wordBreak: "keep-all" }}
          >
            위치 & 주차
          </h1>
          <p className="mt-4 text-[14px] text-[var(--text-steel)] md:text-[15px]">
            Phillips Academy of Little Scholars
          </p>
        </div>
      </section>

      <section
        className="px-6 pb-24 md:px-8 md:pb-28 lg:pb-32"
        style={{ backgroundColor: "var(--bg-canvas)" }}
      >
        <div className="mx-auto grid max-w-[1200px] grid-cols-[4fr_6fr] gap-12 items-start max-[968px]:grid-cols-1">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-3 text-[14px] font-semibold tracking-[0.05em] text-[var(--text-steel)] uppercase">
                Address
              </h3>
              <p
                className="text-[19px] font-semibold leading-[1.5] text-[var(--text-ink)]"
                style={{ wordBreak: "keep-all" }}
              >
                서울시 강남구 논현로 10길, 16
                <br />
                영재센터빌딩 4층
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

          <div
            className="w-full overflow-hidden rounded-3xl min-h-[600px] max-[968px]:min-h-[420px]"
            style={{
              boxShadow: "0 8px 32px rgba(18, 44, 81, 0.08)",
              backgroundColor: "var(--bg-surface-soft)",
            }}
          >
            <NaverMapPanel />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
