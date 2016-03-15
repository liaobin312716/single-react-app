/**
 * @file server.js
 * @description webpack-dev-ser and api server based on koajs
 *
 * **/

/** webpack server **/
var webpack = require('webpack'),
    config = require('./webpack.config'),
    WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
      publicPath: config.output.publicPath,
      hot: true,
      historyApiFallback: true,
      proxy: {
        '/api/*': {
          target: 'http://localhost:3001',
          rewrite: function(req) {
            req.url = req.url.replace(/^\/api/, '');
          }
        }
      }
    }).listen(3000, 'localhost', function (err, result) {
          if (err) {
            console.log(err);
          }
          console.log('page listening at localhost:3000');
        });

/** api server **/

var koa = require('koa'),
    router = require('koa-router')(),
    app = koa();

var controllers = require('require-all')(__dirname + '/api');

setRoutes(controllers, router);

app.use(router.routes());

app.listen(3001,function(){
  console.log('api listening at localhost:3001')
});

// 递归添加路由配置
function setRoutes(map, router) {
  Object.keys(map).forEach(function(key){
    var action = map[key];
    switch (typeof action) {
      case 'function':
        action(router);
        break;
      case 'object':
        setRoutes(action, router);
        break;
    }
  });
}

