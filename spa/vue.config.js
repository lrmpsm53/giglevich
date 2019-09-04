module.exports = {
    pwa: {
      iconPaths: {
         favicon32: 'img/favicon.png'
      },
      name: "Жиглевич",
      themeColor: "#ffffff"
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/giglevich/'
    : '/'
  }
