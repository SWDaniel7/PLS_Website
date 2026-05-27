// 기관소개 페이지 OG 이미지 (1200×630).
import { OG_SIZE, makeOgResponse } from '@/lib/og-image'

export const runtime = 'nodejs'
export const size = OG_SIZE
export const contentType = 'image/png'
export const alt = 'PLS영재교육 기관소개'

export default function Image() {
  return makeOgResponse('기관소개', 'PLS영재교육 설립이념과 교육철학')
}
