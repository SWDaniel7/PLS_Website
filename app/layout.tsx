import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import FloatingConsultCTA from '@/components/FloatingConsultCTA'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import { absoluteUrl, getIndexingSiteUrl, getSiteUrl } from '@/lib/site-url'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(getIndexingSiteUrl()),
  title: {
    default: 'PLS영재교육 | 초등레테 입시 & 원서(노블)수업 영재교육센터',
    template: '%s | PLS영재교육',
  },
  description:
    'PLS영재교육(피엘에스영재교육, PLS프렙)은 초등레테·게이트입시·대치프렙 전문 교육기관입니다. 에디센·피아이(PI) 합격 실적, 에세이라이팅·원서수업·챕터북 중심의 통합사고형 문해력 수업을 제공합니다.',
  keywords: [
    'PLS영재교육',
    '피엘에스영재교육',
    'PLS프렙',
    '피엘에스프렙',
    'PLS',
    '피엘에스',
    '게이트입시',
    '초등레테',
    '대치프렙',
    '에세이라이팅',
    '7세에세이',
    '대치게이트',
    '서초게이트',
    '대치동영어',
    '원서수업',
    '레벨테스트',
    '초등어학원',
    '챕터북',
    '에디센',
    '에디센합격',
    '피아이',
    '피아이합격',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    other: {
      'naver-site-verification': '88e8f4f41292f29d4dd87d548a9e4475fa2a33d1',
    },
  },
  openGraph: {
    title: 'PLS영재교육 | 초등레테 입시 & 원서(노블)수업 영재교육센터',
    description:
      'PLS영재교육(피엘에스영재교육, PLS프렙)은 초등레테·게이트입시·대치프렙 전문 교육기관입니다. 에디센·피아이(PI) 합격 실적, 에세이라이팅·원서수업 중심의 통합사고형 문해력 수업을 제공합니다.',
    type: 'website',
    locale: 'ko_KR',
    siteName: 'PLS영재교육',
    images: [
      {
        url: '/images/hero-main-campus.png',
        width: 1200,
        height: 630,
        alt: 'PLS영재교육 메인 캠퍼스',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PLS영재교육 | 초등레테 입시 & 원서(노블)수업 영재교육센터',
    description:
      'PLS영재교육(피엘에스영재교육, PLS프렙)은 초등레테·게이트입시·대치프렙 전문 교육기관입니다. 에디센·피아이(PI) 합격 실적, 에세이라이팅·원서수업 중심의 통합사고형 문해력 수업을 제공합니다.',
    images: ['/images/hero-main-campus.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const site = getSiteUrl()
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PLS영재교육',
    alternateName: ['피엘에스영재교육', 'PLS프렙', '피엘에스프렙', 'PLS', '피엘에스'],
    url: site,
    logo: absoluteUrl('/images/pls-logo.png'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: '논현로10길 16 영재센터빌딩 4층',
      addressLocality: '강남구',
      addressRegion: '서울특별시',
      addressCountry: 'KR',
    },
    sameAs: ['https://blog.naver.com/ym_career'],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PLS영재교육',
    alternateName: 'Phillips Academy of Little Scholars',
    url: site,
    inLanguage: 'ko-KR',
  }

  const siteNavSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'PLS영재교육 사이트 메뉴',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: '기관소개',
        description: 'PLS영재교육 설립이념과 교육철학',
        url: `${site}/about/intro`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: '강사소개',
        description: '초등레테·게이트입시 전문 강사진 소개',
        url: `${site}/about/faculty`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: '재원생 사례·공지사항',
        description: 'PLS영재교육 재원생 합격 사례와 공지사항',
        url: `${site}/notice`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: '찾아오는길',
        description: 'PLS영재교육 위치 및 주차 안내',
        url: `${site}/about/location`,
      },
    ],
  }

  return (
    <html lang="ko" className="bg-[var(--bg-canvas)]">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({ '@graph': [orgSchema, websiteSchema, siteNavSchema] }),
          }}
        />
        {children}
        <FloatingConsultCTA />
        <ScrollToTopButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
