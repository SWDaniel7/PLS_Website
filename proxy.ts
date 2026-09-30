import { NextResponse } from 'next/server'

// 10/1 학원법 시행 대응 임시 리뉴얼 안내 페이지 (원장 결정 2026-10-01).
// 모든 페이지 요청에 이 HTML 을 503 으로 직접 응답한다. 해제 = 이 파일을 추가한 커밋 revert.
const MAINTENANCE_HTML = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>PLS영재교육 | 홈페이지 리뉴얼 중</title>
<style>
html,body{margin:0;height:100%}
body{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding:0 16px;box-sizing:border-box;background:#F5F0E4;color:#0D0F36;font-family:-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Noto Sans KR","Malgun Gothic",sans-serif;text-align:center;word-break:keep-all}
.main{margin:0;font-size:19px;font-weight:700;line-height:1.5}
.btns{display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%;max-width:440px;margin:24px 0 0}
.btn{display:flex;align-items:center;justify-content:center;min-height:48px;padding:0 16px;box-sizing:border-box;background:#0D0F36;color:#F5F0E4;border-radius:6px;font-size:15px;font-weight:700;text-decoration:none}
@media (max-width:360px){.btns{grid-template-columns:1fr}}
.sub{margin:20px 0 0;font-size:14px;opacity:0.7}
.sub a{color:inherit;text-decoration:underline}
</style>
</head>
<body>
<p class="main">PLS영재교육 홈페이지는 더 나은 안내를 위해 리뉴얼 중입니다.</p>
<div class="btns">
<a class="btn" href="https://smore.im/form/O9ojDtkDhP" target="_blank" rel="noopener">초등부 판독 신청</a>
<a class="btn" href="https://smore.im/form/zEkmY69tY7" target="_blank" rel="noopener">미취학 체험수업 신청</a>
</div>
<p class="sub"><a href="http://pf.kakao.com/_xdIwEn" target="_blank" rel="noopener">수업 문의 · 카카오톡 채널 「PLS영재교육」</a></p>
</body>
</html>
`

export function proxy() {
  return new NextResponse(MAINTENANCE_HTML, {
    status: 503,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Retry-After': '86400',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex',
    },
  })
}

export const config = {
  matcher: ['/((?!_next/|api/|favicon\\.ico$|robots\\.txt$|sitemap\\.xml$|.*\\.[^/]+$).*)'],
}
