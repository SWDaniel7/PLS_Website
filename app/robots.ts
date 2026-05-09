// 검색엔진 크롤러 접근 정책과 사이트맵 위치를 정의하는 robots 설정.
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://pls-website-iota.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
