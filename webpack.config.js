const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
console.log(`Mode - ${process.env.NODE_ENV}`);

module.exports = {
  entry: './src/index.jsx?',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: 'commonjs react',
  },
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : 'inline-source-map',
  optimization: {
    minimize: isProd,
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: !isProd } },
          { loader: 'postcss-loader', options: { sourceMap: !isProd } },
          { loader: 'sass-loader', options: { sourceMap: !isProd } },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [new CleanWebpackPlugin()],
};
