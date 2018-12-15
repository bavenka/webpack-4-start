const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = devMode => ({
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? '[name].js' : '[name].[hash].js',
  },
  resolve: {
    extensions: ['.json', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|eot|ttf)$/,
        loader: 'file-loader',
        options: {
          name: devMode ? '[path][name].[ext]' : '[path][name].[ext]?[hash]',
          outputPath: 'images/',
          useRelativePath: !devMode,
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
});
