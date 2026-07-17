import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "결제 안내",
  description:
    "피엘에스(PLS)영재교육학원 수강 서비스 결제 안내 페이지입니다. 상품 정보, 환불 규정, 사업자 정보를 안내합니다.",
  // 심사자만 URL 직접 접근하는 페이지 — 검색엔진 비색인 (최고가·환불규정·사업자정보 검색노출 방지).
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

// 환불규정 정본 (기획서 §2). 바이트 단위 그대로 렌더 — 윤문·수정·재배치 금지.
const REFUND_POLICY = `[환불 규정]

피엘에스(PLS)영재교육학원의 환불 기준은 「학원의 설립·운영 및 과외교습에 관한 법률」
및 동 시행령 [별표 4] '교습비 등의 반환 기준'에 따릅니다.

■ 교습 시작 전
  - 납부한 교습비 전액 반환

■ 교습 시작 후 (12회 기준)
  - 총 교습시간의 1/3 경과 전 (4회차 이내): 교습비의 2/3 반환
  - 총 교습시간의 1/3 경과 후 ~ 1/2 경과 전 (4~6회차): 교습비의 1/2 반환
  - 총 교습시간의 1/2 경과 후 (6회차 초과): 반환하지 않음

※ 모든 환불 금액은 리워드 적용 전 정가를 기준으로 산정됩니다.
※ 서비스 제공기간: 결제일로부터 12주 (12회 수강 기준)`;

// 사업자정보 6종 (기획서 §3). 사업자등록증 표기 그대로. 학원등록번호와 별개.
const BUSINESS_INFO: { label: string; value: string }[] = [
  { label: "상호명", value: "피엘에스(PLS)영재교육학원" },
  { label: "대표자명", value: "김슬우" },
  { label: "사업자등록번호", value: "816-34-01637" },
  { label: "통신판매업신고번호", value: "(PG 계약 후 신고·기재 예정)" },
  {
    label: "사업장주소",
    value: "서울특별시 강남구 논현로10길 16, 영재빌딩 4층 (개포동)",
  },
  { label: "유선번호", value: "02-3463-0010" },
];

export default function PaymentInfoPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-canvas)]">
      <Header />

      {/* 페이지 타이틀 */}
      <section className="px-6 pt-32 md:px-8 md:pt-36">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="mb-3 text-[12px] font-semibold tracking-[0.22em] text-[var(--primary-navy)]/60 uppercase">
            Payment Information
          </p>
          <h1
            className="text-[32px] font-semibold leading-[1.2] tracking-[-0.03em] text-[var(--primary-navy)] md:text-[44px]"
            style={{ wordBreak: "keep-all" }}
          >
            결제 안내
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[1.7] text-[var(--text-slate)] md:text-[15px]">
            피엘에스(PLS)영재교육학원 수강 서비스의 상품 정보, 환불 규정,
            사업자 정보를 안내합니다.
          </p>
        </div>
      </section>

      {/* ── 섹션 1 : 상품(수강 서비스) 안내 ── */}
      <section className="px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-6 text-[13px] font-semibold tracking-[0.14em] text-[var(--text-steel)] uppercase">
            1. 상품 안내
          </h2>

          <div
            className="overflow-hidden rounded-2xl border bg-[var(--bg-canvas)]"
            style={{
              borderColor: "var(--border-hairline)",
              boxShadow: "0 4px 20px rgba(18, 44, 81, 0.06)",
            }}
          >
            <div
              className="border-b px-7 py-6"
              style={{
                borderColor: "var(--border-hairline)",
                backgroundColor: "var(--bg-surface-soft)",
              }}
            >
              <h3
                className="text-[20px] font-semibold leading-[1.4] text-[var(--text-ink)] md:text-[22px]"
                style={{ wordBreak: "keep-all" }}
              >
                영어 원서(노블) 통합사고형 문해력 수업 — 12회 과정
              </h3>
              <p
                className="mt-3 text-[14px] leading-[1.7] text-[var(--text-slate)] md:text-[15px]"
                style={{ wordBreak: "keep-all" }}
              >
                유초등 대상 정규 수업입니다. 원서·챕터북 기반의
                에세이라이팅과 원서수업을 중심으로, 총 12회로 진행되는
                통합사고형 문해력 커리큘럼입니다.
              </p>
            </div>

            {/* 상품 상세 표 */}
            <div className="px-7 py-6">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <div className="flex items-baseline justify-between border-b pb-3 sm:border-none sm:pb-0" style={{ borderColor: "var(--border-hairline)" }}>
                  <dt className="text-[14px] text-[var(--text-steel)]">결제모드</dt>
                  <dd className="text-[15px] font-semibold text-[var(--text-ink)]">12회</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-[14px] text-[var(--text-steel)]">결제금액</dt>
                  <dd className="text-[18px] font-bold text-[var(--primary-navy)]">1,800,000원</dd>
                </div>
              </dl>
            </div>

            {/* 제공기간 문구 (Q2 필수요건) */}
            <div
              className="px-7 py-5"
              style={{
                backgroundColor: "var(--bg-surface-soft)",
                borderTop: "3px solid var(--accent-gold)",
              }}
            >
              <p className="text-[14px] leading-[1.6] text-[var(--text-charcoal)] md:text-[15px]">
                <span className="font-semibold text-[var(--text-ink)]">서비스 제공기간</span>
                {" : "}
                결제일로부터 12주 (12회 수강 기준)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 섹션 2 : 환불규정 (정본 그대로) ── */}
      <section
        className="px-6 py-16 md:px-8 md:py-20"
        style={{ backgroundColor: "var(--bg-surface-soft)" }}
      >
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-6 text-[13px] font-semibold tracking-[0.14em] text-[var(--text-steel)] uppercase">
            2. 환불 규정
          </h2>
          <div
            className="rounded-2xl border bg-[var(--bg-canvas)] p-7 md:p-9"
            style={{
              borderColor: "var(--border-hairline)",
              boxShadow: "0 4px 20px rgba(18, 44, 81, 0.06)",
            }}
          >
            <p
              className="m-0 whitespace-pre-wrap text-[14px] leading-[1.9] text-[var(--text-charcoal)] md:text-[15px]"
              style={{ wordBreak: "keep-all" }}
            >
              {REFUND_POLICY}
            </p>
          </div>
        </div>
      </section>

      {/* ── 섹션 3 : 하단 사업자정보 6종 (이 페이지 전용 블록) ── */}
      <section
        className="px-6 py-16 md:px-8 md:py-20"
        style={{ backgroundColor: "var(--primary-navy-dark)" }}
      >
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-6 text-[13px] font-semibold tracking-[0.14em] text-white/50 uppercase">
            3. 사업자 정보
          </h2>
          <dl className="space-y-3">
            {BUSINESS_INFO.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 border-b border-white/10 pb-3 sm:flex-row sm:gap-6 sm:pb-3 last:border-none"
              >
                <dt className="w-full shrink-0 text-[13px] font-medium text-white/55 sm:w-[160px] md:text-[14px]">
                  {item.label}
                </dt>
                <dd
                  className="m-0 text-[14px] leading-[1.6] text-white/90 md:text-[15px]"
                  style={{ wordBreak: "keep-all" }}
                >
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-[12px] leading-[1.7] text-white/45">
            피엘에스(PLS)영재교육학원
          </p>
        </div>
      </section>
    </main>
  );
}
