/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     remotePatterns: ['fakestoreapi.com'],
    //   },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
            pathname: '**',
          },
        ],
      },
}

module.exports = nextConfig
