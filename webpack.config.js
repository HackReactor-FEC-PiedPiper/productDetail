
module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/public'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        }
      },
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    publicPath: '/assets/',
    contentBase: __dirname + '/client/public'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
