// 홈 페이지 OG 이미지 (1200×630).
import { OG_SIZE, makeOgResponse } from '@/lib/og-image'

export const runtime = 'nodejs'
export const size = OG_SIZE
export const contentType = 'image/png'
export const alt = 'PLS영재교육 — 초등레테·게이트입시 영재교육센터'

export default function Image() {
  return makeOgResponse('초등레테·게이트입시\n영재교육센터', 'PLS영재교육 (PLS프렙)')
}
