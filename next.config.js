// next.config.js (પ્રોજેક્ટ રૂટ)
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'palegoldenrod-goshawk-183296.hostingersite.com' // <-- તુ અહીં 자신의 image URL નો hostname મૂકી દેજો
    ],
    // alternate (જો તમે wildcard અથવા અન્ય ડોમેન જોઈએ તો):
    // remotePatterns: [{ protocol: 'https', hostname: '**.hostingersite.com' }]
  },
};

module.exports = nextConfig;