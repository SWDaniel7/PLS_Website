// SEO·메타데이터와 구조화 데이터에서 공통으로 쓰는 사이트 기준 URL.

/** 색인용(sitemap, robots). `NEXT_PUBLIC_SITE_URL` 없을 때 Vercel 프리뷰 호스트로 나가지 않도록 공식 도메인 고정. */
const INDEXING_SITE_FALLBACK = "https://plsprep.com";

function normalizeSiteUrl(raw: string): string {
  const trimmed = raw.trim();
  const withProtocol = trimmed.startsWith("http")
    ? trimmed
    : `https://${trimmed}`;
  return withProtocol.replace(/\/$/, "");
}

/**
 * 사이트맵·robots 등 검색엔진에 노출되는 URL 전용.
 * `NEXT_PUBLIC_SITE_URL`만 사용하고, 없으면 공식 도메인(plsprep.com)으로 고정 (VERCEL_URL 미사용).
 */
export function getIndexingSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return normalizeSiteUrl(explicit);
  }
  return INDEXING_SITE_FALLBACK;
}

/**
 * 프로덕션 기준 절대 URL (호스트 기준, 경로 없음·루트는 `/` 별도).
 * 우선순위: `NEXT_PUBLIC_SITE_URL` → `VERCEL_URL` → 기본 배포 URL.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return normalizeSiteUrl(explicit);
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }

  return "https://pls-website-iota.vercel.app";
}

/** 경로를 사이트 기준 절대 URL로 만듭니다. `path`는 `/`로 시작하는 것을 권장합니다. */
export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path || path === "/") {
    return `${base}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
