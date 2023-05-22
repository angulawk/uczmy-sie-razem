/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    config.experiments = { layers: true, topLevelAwait: true };

    return config;
  }
};

module.exports = nextConfig;
