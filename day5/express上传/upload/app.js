var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var filesRouter = require('./routes/file');

var app = express();
// 中间件
app.use(logger('dev'));
// 处理你的req的json格式
app.use(express.json());
// 处理你req url
app.use(express.urlencoded({ extended: false }));
// 处理cookie
app.use(cookieParser());
// 设置一个public文件夹，作为静态资源文件夹
app.use(express.static(path.join(__dirname, 'public')));
// 进入路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/file', filesRouter);

// 如果有错误的话404
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
