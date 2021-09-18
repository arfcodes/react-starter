/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

//
// Setup .env
const dotenv = require('dotenv');

// call dotenv and it will return an Object with a parsed key
const env = dotenv.config().parsed;
// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  // eslint-disable-next-line no-param-reassign
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = (options) => ({
  mode: options.mode,
  entry: [
    require.resolve('react-app-polyfill/ie11'),
    path.join(process.cwd(), 'src/index.js'),
  ],
  // eslint-disable-next-line prefer-object-spread
  output: Object.assign(
    {
      // Compile into js/build.js
      path: path.resolve(process.cwd(), 'build'),
      publicPath: env.APP_BASENAME,
    },
    options.output,
  ), // Merge with env dependent settings
  optimization: options.optimization,
  devServer: {
    port: env.SERVER_PORT || 3000,
    contentBase: path.resolve(process.cwd(), 'build'),
    historyApiFallback: true,
    compress: true,
    clientLogLevel: 'silent',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transform all .js and .jsx files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: options.babelQuery,
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        type: 'asset/resource',
      },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: 'svg-url-loader',
      //       options: {
      //         // Inline files smaller than 10 kB
      //         // limit: 10 * 1024,
      //         noquotes: true,
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(jpg|jpeg|png|gif)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         // Inline files smaller than 10 kB
      //         // limit: 10 * 1024,
      //       },
      //     },
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         mozjpeg: {
      //           enabled: false,
      //           // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
      //           // Try enabling it in your environment by switching the config to:
      //           // enabled: true,
      //           // progressive: true,
      //         },
      //         gifsicle: {
      //           interlaced: false,
      //         },
      //         optipng: {
      //           optimizationLevel: 7,
      //         },
      //         pngquant: {
      //           quality: [0.65, 0.9],
      //           speed: 4,
      //         },
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins: options.plugins.concat([
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; Terser will automatically
    // drop any unreachable code.
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
    new webpack.DefinePlugin(envKeys),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: 'styles.css',
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/assets/.htaccess', to: '' }],
    }),
    // Ignore all locale files of moment.js
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]),
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx', '.react.js'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    alias: {
      '@': resolve('src'),
      moment$: resolve('node_modules/moment/moment.js'),
    },
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
});
