/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "digital-hippo-production-ff84.up.railway.app"],
    // remotePatterns: [
    // 	{
    // 		protocol: "http",
    // 		hostname: "localhost",
    // 	},
    // 	{
    // 		protocol: "https",
    // 		hostname: "digital-hippo-production-ff84.up.railway.app",
    // 	},
    // ],
  },
};

module.exports = nextConfig;
