// 네이버·SNS 검색결과 카드용 OG 이미지를 생성하는 공유 헬퍼.
import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import path from 'path'

export const OG_SIZE = { width: 1200, height: 630 }

const NAVY = '#0B1C39'
const GOLD = '#D4B483'
const WHITE = '#FFFFFF'
const NAVY_MID = '#122C51'

function loadAssets() {
  const fontPath = path.join(
    process.cwd(),
    'node_modules/pretendard/dist/public/static/Pretendard-Bold.otf',
  )
  const fontRegPath = path.join(
    process.cwd(),
    'node_modules/pretendard/dist/public/static/Pretendard-Regular.otf',
  )
  const logoPath = path.join(
    process.cwd(),
    'public/images/pls-logo-footer-invert.png',
  )

  const fontBold = readFileSync(fontPath)
  const fontReg = readFileSync(fontRegPath)
  const logoData = readFileSync(logoPath)
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return { fontBold, fontReg, logoSrc }
}

export function makeOgResponse(title: string, subtitle: string): ImageResponse {
  const { fontBold, fontReg, logoSrc } = loadAssets()

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: NAVY,
          padding: '72px 80px',
          fontFamily: 'Pretendard',
        }}
      >
        {/* 상단 골드 포인트 바 */}
        <div
          style={{
            display: 'flex',
            width: '48px',
            height: '4px',
            backgroundColor: GOLD,
            marginBottom: '40px',
            borderRadius: '2px',
          }}
        />

        {/* 로고 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={260}
          height={63}
          alt="PLS영재교육"
          style={{ objectFit: 'contain' }}
        />

        {/* 제목 */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'flex-end',
            paddingBottom: '8px',
          }}
        >
          <div
            style={{
              fontSize: '68px',
              fontWeight: 700,
              color: WHITE,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>
        </div>

        {/* 골드 구분선 */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '1.5px',
            backgroundColor: NAVY_MID,
            margin: '28px 0 24px',
          }}
        />

        {/* 하단 줄 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              fontSize: '26px',
              color: GOLD,
              fontWeight: 400,
              letterSpacing: '0.01em',
            }}
          >
            {subtitle}
          </div>
          <div
            style={{
              fontSize: '22px',
              color: `${WHITE}80`,
              fontWeight: 400,
            }}
          >
            plsprep.com
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: 'Pretendard', data: fontBold, weight: 700 },
        { name: 'Pretendard', data: fontReg, weight: 400 },
      ],
    },
  )
}
