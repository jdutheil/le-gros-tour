/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/qrcode',
        destination: 'https://fr.ulule.com/legrostour-album-live',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
