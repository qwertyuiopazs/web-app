const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require("html-webpack-plugin")

const srcRoot = path.resolve(__dirname, 'src');
const devRoot = path.resolve(__dirname, 'dev');
const pageDir = path.resolve(srcRoot, 'page');
const mainFile = 'index.js';

// 遍历所有html
function getHtmlArray(entryMap) {
  let htmlArray = [];
  Object.keys(entryMap).forEach((key) => {
    let fullPathName = path.resolve(pageDir, key)
    let fileName = path.resolve(fullPathName, key + '.html')
    if(fs.existsSync(fileName)){
      htmlArray.push(
        new HtmlWebpackPlugin({
          filename: key + '.html',
          template: fileName,
          chunks: [key]
          // chunks 表示当前html需要引入哪些js文件
        })
      )
    }
  })

  return htmlArray
}

// 遍历入口
function getEntry() {
  let entryMap = {};
  fs.readdirSync(pageDir).forEach(pathName => {
    let fullPathName = path.resolve(pageDir, pathName);
    let stat = fs.statSync(fullPathName); // 读取文件或者目录信息
    let fileName = path.resolve(fullPathName, mainFile); // js文件完整路径
    if (stat.isDirectory() && fs.existsSync(fileName)) {
      // stat.isDirectory() 是否是目录地址
      // existsSync 文件是否存在
      entryMap[pathName] = fileName;
    }
  });
  return entryMap;
}

const entryMap = getEntry()
const htmlArray = getHtmlArray(entryMap)
const config = {
  mode: 'development',
  entry: entryMap,
  output: {
    path: devRoot,
    filename: '[name].min.js' // 和入口文件的名字相同
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: devRoot,
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: [{loader: 'babel-loader'}, {loader: 'eslint-loader'}], include: srcRoot },
      { test: /\.css$/, use: ['style-loader', 'css-loader'], include: srcRoot },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader',
          {
            loader: 'sass-resources-loader', 
            options: {
              resources: srcRoot + '/style/common.scss'
            }
          }
        ],
        include: srcRoot
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: 'url-loader?limit=8192',
        include: srcRoot
      }
    ]
  },
  plugins: [].concat(htmlArray)
};

module.exports = config;
