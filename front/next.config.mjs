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
    NEXT_PUBLIC_WEATHER_PROPS: process.env.NEXT_PUBLIC_WEATHER_PROPS,
  },
};

export default nextConfig;
