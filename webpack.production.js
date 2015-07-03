/**
 * Created by zhaopenghodoman on 15/7/3.
 */
var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);

// 分割文件
module.exports = {
    entry: {
        app: [path.resolve(ROOT_PATH, 'app/main.js')],
        vendors: ['react']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'dist'),
        filename: 'app.[chunkhash].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[chunkhash].js')
    ]
};