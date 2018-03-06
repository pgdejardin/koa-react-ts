const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('./webpack.config')({
  // In production, we skip all hot-reloading stuff
  // mode: 'production',
  cache: true,
  entry: [
    path.resolve(process.cwd(), 'app/index.tsx'),
  ],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  // optimization: {
  //   runtimeChunk: true,
  //   splitChunks: {
  //     chunks: 'async',
  //     // minSize: 30000,
  //     // minChunks: 2,
  //     // maxAsyncRequests: 5,
  //     // maxInitialRequests: 3,
  //     // name: true,
  //     // cacheGroups: {
  //     //   default: false,
  //     //   main: {
  //     //     chunks: 'async',
  //     //     minChunks: 1,
  //     //   },
  //     //   commons: {
  //     //     reuseExistingChunk: true,
  //     //     name: 'commons',
  //     //     chunks: 'async'
  //     //   },
  //     //   vendors: {
  //     //     test: /[\\/]node_modules[\\/]/,
  //     //     priority: -10,
  //     //     minChunks: 2,
  //     //     chunks: 'async'
  //     //   }
  //     // }
  //   },
  // },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
  ],
  performance: {
    assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  },
});
