var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var mgdRouter = require('./routes/mgd');
var logRouter = require('./routes/log');
var lessonmgdRouter = require('./routes/lessonmgd');
var personalRouter = require('./routes/personal');
var xiugaiRouter = require('./routes/xiugai');
var xuankeRouter = require('./routes/xuanke');
var checkRouter = require('./routes/check');
var delRouter = require('./routes/del');
var delRouter = require('./routes/del');
var headRouter = require('./routes/head');
var gonggaoRouter = require('./routes/gonggao');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/good', mgdRouter);
app.use('/good', logRouter);
app.use('/good', lessonmgdRouter);
app.use('/good', personalRouter);
app.use('/good', xiugaiRouter);
app.use('/good', xuankeRouter);
app.use('/good', checkRouter);
app.use('/good', delRouter);
app.use('/good', headRouter);
app.use('/good', gonggaoRouter);

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
require('./routes/socketh.js').socket();
require('./routes/notice.js').socket();

module.exports = app;
