module.exports = {
  reactStrictMode: true,
}

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  basePath: !debug ? '/pokemon-nextjs/' : '',
  assetPrefix: !debug ? '/pokemon-nextjs/' : '',
}
