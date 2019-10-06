const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = env => {
  if (!env) {
    env = {}
  }
  let plugins = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './app/views/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ];
  if (env.production) {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new MiniCssExtractPlugin({
        filename: "style.css"
      }),
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions:{
          preset:['default', {
				        discardComments: {
				            removeAll: true,
				        },
				        normalizeUnicode: false
				    }]
        },
        canPrint: true
      })

    )
  }
  return {
    entry: ['./app/js/viewport.js', './app/js/main.js'],
    devServer: {
      contentBase: './dist',
      hot: true,
      compress: true,
      port: 9000,
      clientLogLevel: "none",
      quiet: true
    },
    module: {
      rules: [{
        test: /\.html$/,
        use: ['cache-loader', 'html-loader']
      }, {
        test: /\.vue$/,
        use: [
          'cache-loader',
          'vue-loader'
        ]
      }, {
        test: /\.scss$/,
        oneOf: [{
          resourceQuery: /module/,
          use: [
            env.production ? MiniCssExtractPlugin.loader : 'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]_[hash:base64:5]'
              }
            }, {
              loader: 'px2rem-loader',
              options: {
                remUnit: 40,
                remPrecision: 8
              }
            },
            'sass-loader'
          ]
        }, {
          use: [
            env.production ? MiniCssExtractPlugin.loader : 'vue-style-loader',
            'css-loader', {
              loader: 'px2rem-loader',
              options: {
                remUnit: 40,
                remPrecision: 8
              }
            },
            'sass-loader'
          ]
        }],
      }, {
        test: /\.css$/,
        use: [env.production ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader']
      }]
    },
    resolve: {
      extensions: [
        '.js', '.vue', '.json'
      ],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    mode: 'development',
    plugins,
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
};
