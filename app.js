var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var scriptsRouter = require('./routes/scripts');
var apiRouter = require('./api/api');


var app = express();

app.use('/', indexRouter);
app.use('/scripts', scriptsRouter);
app.use('/api', apiRouter);

const PORT  = process.env.PORT || 3050
app.listen(PORT,()=> console.info(`Server has started on ${PORT}`))


module.exports = app;