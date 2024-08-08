/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    API_KEY_WEATHER: process.env.API_KEY_WEATHER,
    API_KEY_WEATHER_PROPS: process.env.API_KEY_WEATHER_PROPS,
  },
};

export default nextConfig;
