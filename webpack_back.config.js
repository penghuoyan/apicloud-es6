const path = require('path');
const glob = require("glob");
const webpack = require('webpack')
module.exports = {
    entry: getEntry(),
    output: {
      filename: '[name]',
      path: path.resolve(__dirname, 'build')
    },
    plugins: [
      new webpack.ProvidePlugin({
        Promise: 'es6-promise-promise',
      })
    ],
    watchOptions: {
      aggregateTimeout: 500,
      poll: 1000,
      ignored: /node_modules/
    },
    module:{
      rules:[
          {
              test:/.css$/,
              use:[
                  //注意：这里的顺序很重要，不要乱了顺序
                  'style-loader',
                  'css-loader'
              ]
          },
          {
              test:/.(jpg|png|gif|svg)$/,
              use:[
                  'file-loader'
              ]
          },
          {
              test:/\.js$/,
              exclude:/(node_modules|bower_components)/,//排除掉node_module目录
              use:{
                  loader:'babel-loader',
                  options:{
                      presets: ['@babel/preset-env'],
                      plugins: ['@babel/transform-runtime']
                  }
              }
          }
      ],
    },
};

function getEntry () {
  let globPath = 'scripts/**/*.js'
  let files = glob.sync(globPath)
  let entries = {}
  let p = path.resolve(__dirname,files[0])
  for (let i = 0; i < files.length; i++) {
    entries[files[i]] = path.resolve(__dirname,files[i])
  }
  return entries
}
getEntry();