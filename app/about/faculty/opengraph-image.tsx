// 강사소개 페이지 OG 이미지 (1200×630).
import { OG_SIZE, makeOgResponse } from '@/lib/og-image'

export const runtime = 'nodejs'
export const size = OG_SIZE
export const contentType = 'image/png'
export const alt = 'PLS영재교육 강사소개'

export default function Image() {
  return makeOgResponse('강사소개', '초등레테·게이트입시 전문 강사진')
}
