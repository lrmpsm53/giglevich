module.exports = {
    pwa: {
      iconPaths: {
         favicon32: 'img/favicon.png'
      }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/giglevich/'
    : '/'
  }
