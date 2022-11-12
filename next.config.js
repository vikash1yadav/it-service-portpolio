// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      tls: false,
      fs: false,
      http: false,
      https: false,
      stream: false,
    };

    return config;
  },
};
