const postcssAmpCustom = require('postcss-amp-custom')

module.exports = () => ({
  plugins: [
    postcssAmpCustom({
      enableByteLimit: true
    })
  ]
})
