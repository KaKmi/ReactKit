var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('../webpack.config');
new WebpackDevServer(webpack(config),{
    contentBase: __dirname,
    publicPath:config.output.publicPath,
    historyApiFallback:true,

    hot:true,
    stats:{
        color:true
    }
}).listen(config.port,config.ip, function (err) {
        if(err){
            return console.log(err);
        }
        console.log('Listening at ' +config.ip+':'+config.port);
    });