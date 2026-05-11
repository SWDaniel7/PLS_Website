/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/pls영재교육pls프렙/about-pls',
        destination: '/about/intro',
        permanent: true,
      },
      {
        source: '/pls%EC%98%81%EC%9E%AC%EA%B5%90%EC%9C%A1pls%ED%94%84%EB%A0%99/about-pls',
        destination: '/about/intro',
        permanent: true,
      },
      {
        source: '/pls영재교육pls프렙/instructor',
        destination: '/about/faculty',
        permanent: true,
      },
      {
        source: '/pls%EC%98%81%EC%9E%AC%EA%B5%90%EC%9C%A1pls%ED%94%84%EB%A0%99/instructor',
        destination: '/about/faculty',
        permanent: true,
      },
      {
        source: '/신규-수정중-pls프렙피엘에스프렙/찾아오는-길',
        destination: '/about/location',
        permanent: true,
      },
      {
        source:
          '/%EC%8B%A0%EA%B7%9C-%EC%88%98%EC%A0%95%EC%A4%91-pls%ED%94%84%EB%A0%99%ED%94%BC%EC%97%98%EC%97%90%EC%8A%A4%ED%94%84%EB%A0%99/%EC%B0%BE%EC%95%84%EC%98%A4%EB%8A%94-%EA%B8%B8',
        destination: '/about/location',
        permanent: true,
      },
      {
        source: '/신규-수정중-pls프렙피엘에스프렙/notice',
        destination: '/notice',
        permanent: true,
      },
      {
        source:
          '/%EC%8B%A0%EA%B7%9C-%EC%88%98%EC%A0%95%EC%A4%91-pls%ED%94%84%EB%A0%99%ED%94%BC%EC%97%98%EC%97%90%EC%8A%A4%ED%94%84%EB%A0%99/notice',
        destination: '/notice',
        permanent: true,
      },
      {
        source: '/pls-prep/4y-curriculum',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
