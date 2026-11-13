import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import FloatingConsultCTA from '@/components/FloatingConsultCTA'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import { getIndexingSiteUrl } from '@/lib/site-url'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(getIndexingSiteUrl()),
  title: {
    default: 'PLS영재교육',
    template: '%s | PLS영재교육',
  },
  description:
    'PLS영재교육은 읽은 것을 근거로 토론하고 자기 문장으로 답하는 대치동의 영어 논서술형 문해력 학원입니다.',
  keywords: ['PLS영재교육', '피엘에스영재교육'],
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
    title: 'PLS영재교육',
    description:
      'PLS영재교육은 읽은 것을 근거로 토론하고 자기 문장으로 답하는 대치동의 영어 논서술형 문해력 학원입니다.',
    type: 'website',
    locale: 'ko_KR',
    siteName: 'PLS영재교육',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PLS영재교육',
    description:
      'PLS영재교육은 읽은 것을 근거로 토론하고 자기 문장으로 답하는 대치동의 영어 논서술형 문해력 학원입니다.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const site = getIndexingSiteUrl()
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'EducationalOrganization'],
    name: 'PLS영재교육',
    alternateName: ['피엘에스영재교육', 'PLS프렙', '피엘에스프렙', 'PLS', '피엘에스'],
    description:
      'PLS영재교육은 읽은 것을 근거로 토론하고 자기 문장으로 답하는 대치동의 영어 논서술형 문해력 학원입니다.',
    url: site,
    logo: `${site}/images/pls-logo.png`,
    image: `${site}/opengraph-image`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '논현로10길 16 영재센터빌딩 4층',
      addressLocality: '강남구',
      addressRegion: '서울특별시',
      postalCode: '06039',
      addressCountry: 'KR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.474329,
      longitude: 127.049949,
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
        <FloatingConsultCTA />
        <ScrollToTopButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
