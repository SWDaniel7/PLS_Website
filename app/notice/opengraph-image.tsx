// 재원생 사례·공지사항 페이지 OG 이미지 (1200×630).
import { OG_SIZE, makeOgResponse } from '@/lib/og-image'

export const runtime = 'nodejs'
export const size = OG_SIZE
export const contentType = 'image/png'
export const alt = 'PLS영재교육 재원생 사례·공지사항'

export default function Image() {
  return makeOgResponse('재원생 사례·공지사항', '에디센·피아이(PI) 합격 실적')
}
