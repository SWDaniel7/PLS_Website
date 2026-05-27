// 찾아오는 길 페이지 OG 이미지 (1200×630).
import { OG_SIZE, makeOgResponse } from '@/lib/og-image'

export const runtime = 'nodejs'
export const size = OG_SIZE
export const contentType = 'image/png'
export const alt = 'PLS영재교육 찾아오는 길'

export default function Image() {
  return makeOgResponse('찾아오는 길', '서울 강남구 논현로10길 16 영재센터빌딩 4층')
}
