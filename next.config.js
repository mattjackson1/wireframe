/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'search3.openobjects.com',
          port: '',
          pathname: '/mediamanager/suffolk/enterprise/images/**',
        },
      ],
    },
  }

module.exports = nextConfig;
