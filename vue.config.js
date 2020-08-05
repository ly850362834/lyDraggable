const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    publicPath: './',
    configureWebpack: config => {
        config.entry.app = ["babel-polyfill", "./src/main.ts"];
    },
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //       compress: {
    //         warnings: false
    //       }
    //     })
    // ]
      
}