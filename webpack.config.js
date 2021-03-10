const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

require('dotenv').config();

const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: DEV ? 'js/bundle.js' : 'js/[name].[hash].js',
    publicPath: '/',
  },
  devServer: {
    port: 4000,
    hot: true,
    open: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.png', '.mp4'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@videos': path.resolve(__dirname, 'src/assets/videos'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(png|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: DEV ? 'assets/[name].[ext]' : 'assets/[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    DEV ?
      new webpack.HotModuleReplacementPlugin() :
      () => ({})
  ],
};
