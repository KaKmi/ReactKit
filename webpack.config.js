var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var TARGET = process.env.TARGET;
var ROOT_PATH =path.resolve(__dirname);
var common ={
  entry: [path.resolve(ROOT_PATH, 'app/main')],
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  resolve:{
    extensions:['','.js','jsx'],
  }
};

if(TARGET ==='build'){
  module.exports = merge(common,{
    module:{
      loaders:[

        {
          text:/\.jsx?$/,
          loader:'babel?stage=1',
          include:path.resolve(ROOT_PATH,'app')
        },
        {
          test: /\.css$/,
          loaders: ['style', 'css']
        },
      ]
    },
    plugins:[
        new HtmlWebpackPlugin({
          title:'Kanban app'
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress:{
            warnings:false
          }
        }),
        new webpack.DefinePlugin({
          'process.env':{
            'NODE_ENV':JSON.stringify('production')
          }
        }),
    ]
  });
}

if(TARGET==='dev'){

  var IP ='0.0.0.0';
  var PORT = 8000;
  console.log(merge(common,{
    ip:IP,
    port:PORT,
    entry:[
      'webpack-dev-server/client?http://' + IP + ':' + PORT,
      'webpack/hot/only-dev-server'
    ],
    module:{
      loaders:[
        {
          test:/\.js/,
          loaders:['react-hot','babel?stage=1'],
          include:path.resolve(ROOT_PATH,'app')
        },
        {
          test: /\.css$/,
          loaders: ['style', 'css']
        },
      ]
    },
    output:{
      path:ROOT_PATH,
      filename:'bundle.js',
      publicPath:'/'

    },
    plugins:[
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin(),
    ]
  }));
  module.exports =merge(common,{
    ip:IP,
    port:PORT,
    entry:[
      'webpack-dev-server/client?http://' + IP + ':' + PORT,
      'webpack/hot/only-dev-server'
    ],
    module:{
      loaders:[
        {
          test:/\.js/,
          loaders:['react-hot','babel?stage=1'],
          include:path.resolve(ROOT_PATH,'app')
        },
        {
          test: /\.css$/,
          loaders: ['style', 'css']
        },
      ]
    },
    output:{
      path:ROOT_PATH,
      filename:'bundle.js',
      publicPath:'/'

    },
    plugins:[
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin(),
    ]
  });

}
