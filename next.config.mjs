import withPWA from 'next-pwa';

const pwa = withPWA({
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};

export default pwa(nextConfig);
