"use strict";
exports.__esModule = true;
var path = require("path");
var webpack = require("webpack");
var webpackMiddleware = require("koa-webpack");
var send = require("koa-send");
var webpackConfig = require("../../internals/webpack.dev.config.js");
var logger_1 = require("../utils/logger");
function addDevMiddlewares(app) {
    var compiler = webpack(webpackConfig);
    var middleware = webpackMiddleware({ compiler: compiler });
    var fs = middleware.dev.fileSystem;
    app.use(middleware);
    app.use(function (ctx) {
        fs.readFile(path.join(compiler.outputPath, 'index.html'), function (err, file) {
            if (err) {
                logger_1["default"].error(err);
                ctx["throw"](404);
            }
            else {
                logger_1["default"].info(file.toString());
                send(ctx, file.toString());
            }
        });
    });
}
exports["default"] = addDevMiddlewares;
