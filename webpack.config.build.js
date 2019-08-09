const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const srcRoot = path.resolve(__dirname, "src");
//  存放打包完成的文件  可放置服务器目录
const distRoot = path.resolve(__dirname, "dist"); 
const pageDir = path.resolve(srcRoot, "page");
const mainFile = "index.js";
// 它为每个包含CSS的JS文件创建一个CSS文件。
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 清空已打包的文件夹
const CleanWebpackPlugin = require("clean-webpack-plugin");
// 打包静态文件
const CopyPlugin = require('copy-webpack-plugin');

// 遍历所有html
function getHtmlArray(entryMap) {
  let htmlArray = [];
  Object.keys(entryMap).forEach(key => {
    let fullPathName = path.resolve(pageDir, key);
    let fileName = path.resolve(fullPathName, key + ".html");
    if (fs.existsSync(fileName)) {
      htmlArray.push(
        new HtmlWebpackPlugin({
          filename: key + ".html",
          template: fileName,
          chunks: ["common", key]
          // chunks 表示当前html需要引入哪些js文件
        })
      );
    }
  });

  return htmlArray;
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

const entryMap = getEntry();
const htmlArray = getHtmlArray(entryMap);
const config = {
  mode: "production",
  entry: entryMap,
  output: {
    path: distRoot,
    filename: "js/[name].[hash].min.js", // 和入口文件的名字相同
    publicPath: '/'
  },
  resolve: {
    // 引入问件时 可忽略文件后缀
    extensions: [".js", ".jsx"],
    alias: {
      components: path.resolve(srcRoot, "components")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{ loader: "babel-loader" }, { loader: "eslint-loader" }],
        include: srcRoot
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        include: srcRoot
      },
      // { test: /\.css$/, use: ['style-loader', 'css-loader'], include: srcRoot },

      {
        test: /\.scss$/,
        // MiniCssExtractPlugin.loader or 'style-loader'
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: {
            minimize: true
          } },
          "sass-loader",
          // use: ['style-loader', 'css-loader', 'sass-loader',

          {
            // 配置全局样式
            loader: "sass-resources-loader",
            options: {
              resources: srcRoot + "/style/common.scss"
            }
          }
        ],
        include: srcRoot
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: "url-loader?limit=8192&name=images/[name].[hash].[ext]",
        include: srcRoot
      }
    ]
  },
  // 分割common模块公用，并引入html插件
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: "common",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new CopyPlugin([
      { from: 'src/json', to: path.resolve(distRoot, "json"), force:true },
      { from: 'src/static', to: path.resolve(distRoot, "static"), force:true }
    ]),
    // 清除dist目录
    new CleanWebpackPlugin([distRoot], {allowExternal: true}),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "css/[name].[hash].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  ].concat(htmlArray)
};

module.exports = config;
