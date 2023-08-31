const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/, // arquivos que terminam em .css
      use: [MiniCssExtractPlugin.loader, 'css-loader'] // para importar direto do js, usar o style-loader no lugar no MiniCssExtractPlugin.loader
    }]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}