import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pls-website-iota.vercel.app'),
  title: 'PLS영재교육 | 초등레테 입시 & 원서(노블)수업 영재교육센터',
  description:
    'PLS영재교육(피엘에스영재교육)은 PLS프렙(피엘에스프렙) 기반의 게이트입시·초등레테·대치프렙 전문 교육기관으로, 원서수업과 에세이라이팅 중심의 통합사고형 문해력 수업을 제공합니다.',
  keywords: [
    'PLS영재교육',
    '피엘에스영재교육',
    'PLS프렙',
    '피엘에스프렙',
    '게이트입시',
    '초등레테',
    '대치프렙',
    '에세이라이팅',
    '7세에세이',
    '대치게이트',
    '대치동영어',
    '원서수업',
    '레벨테스트',
    '초등어학원',
    '챕터북',
  ],
  openGraph: {
    title: 'PLS영재교육 | 초등레테 입시 & 원서(노블)수업 영재교육센터',
    description:
      'PLS영재교육(피엘에스영재교육)은 PLS프렙(피엘에스프렙) 기반의 게이트입시·초등레테·대치프렙 전문 교육기관으로, 원서수업과 에세이라이팅 중심의 통합사고형 문해력 수업을 제공합니다.',
    type: 'website',
    locale: 'ko_KR',
    siteName: 'PLS영재교육',
    images: [
      {
        url: '/images/hero-main-campus.png',
        alt: 'PLS영재교육 메인 캠퍼스',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PLS영재교육 | 초등레테 입시 & 원서(노블)수업 영재교육센터',
    description:
      'PLS영재교육(피엘에스영재교육)은 PLS프렙(피엘에스프렙) 기반의 게이트입시·초등레테·대치프렙 전문 교육기관으로, 원서수업과 에세이라이팅 중심의 통합사고형 문해력 수업을 제공합니다.',
    images: ['/images/hero-main-campus.png'],
  },
  alternates: {
    canonical: '/',
  },
  generator: 'v0.app',
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
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PLS영재교육',
    alternateName: ['피엘에스영재교육', 'PLS프렙', '피엘에스프렙'],
    url: 'https://pls-website-iota.vercel.app',
    logo: 'https://pls-website-iota.vercel.app/images/pls-logo.png',
    sameAs: ['https://blog.naver.com/ym_career'],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PLS영재교육',
    alternateName: 'Phillips Academy of Little Scholars',
    url: 'https://pls-website-iota.vercel.app',
    inLanguage: 'ko-KR',
  }

  return (
    <html lang="ko" className="bg-[var(--bg-canvas)]">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({ '@graph': [orgSchema, websiteSchema] }),
          }}
        />
        {children}
        <ScrollToTopButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
