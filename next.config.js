const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "mks-sistemas.nyc3.digitaloceanspaces.com",
        port: '',
        pathname: '/products/**'
      }
    ]
  },
  pageExtensions: ['!.test.ts(x)', '!.spec.ts(x)'],
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
