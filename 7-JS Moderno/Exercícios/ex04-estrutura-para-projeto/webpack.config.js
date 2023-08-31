const path = require('path')

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist') //para o webpack-dev-server achar o diretório de saída
    }
  },
  entry: {
    index: './src/index.js',
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
    },
    {
      test: /\.css$/,
    use: ['style-loader', 'css-loader']
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  }
}