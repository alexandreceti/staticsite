const path = require('path')

module.exports = {
  entry: {
    bundle: './assets/js/main1.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  rules: [{
    test: /\.(png|jpg|gif)$/i,
    use: [{
      loader: 'url-loader',
      options: {
        limit: 8192
      }
    }]
  }]
};