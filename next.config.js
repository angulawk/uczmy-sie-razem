/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          options: {
            titleProp: true
          },
          loader: "@svgr/webpack"
        }
      ]
    });

    return config;
  }
};

module.exports = nextConfig;
