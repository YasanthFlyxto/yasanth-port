/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/xban',
        destination: 'https://second-sphynx-984.notion.site/b06b5ffe2ff448018ee934034b791796?v=f3e1f07e6dcb420bae8610d45cc9249e', // Replace with the actual URL you want to redirect to
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
