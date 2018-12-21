const path = require('path')

module.exports = {
  entry: {
    index: './src/script/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/script'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/script')
        ],
        loader: 'babel-loader'
      }
    ]
  }
}