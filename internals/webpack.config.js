const path = require('path');
const webpack = require('webpack');

module.exports = options => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'build/public'),
    publicPath: '/',
  }, options.output),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {test: /\.html$/, use: 'html-loader'},
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],
  },
  optimization: Object.assign({}, {
    namedModules: true,
  }, options.optimization),
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
});
