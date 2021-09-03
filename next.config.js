module.exports = {
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  // poweredByHeader: false,
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  //   })
  //   return config
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // assetPrefix: process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '',
  // publicRuntimeConfig: {
  //   basePath: process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '',
  // },
  trailingSlash: true,
}
