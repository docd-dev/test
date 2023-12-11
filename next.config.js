/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.indonesiacomiccon.com",
        port: "",
        pathname: "/storage/files/**",
      },
    ],
  },
};

module.exports = nextConfig;
