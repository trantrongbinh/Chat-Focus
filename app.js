'use strict';

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const i18n = require('i18n');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

const settings = require('./config/settings');
const database = require('./config/database');

const index = require('./routes/index');
const api = require('./routes/api');

const app = express();

mongoose.connect(database.db, {useNewUrlParser: true});
mongoose.connection.on('error', function(err) {
    console.log('Error connect to Database: ' + err);
});

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

i18n.configure({
    locales: ['en', 'vi'],
    register: global,
    fallbacks: { 'vi': 'en' },
    cookie: 'language', // Tên của cookie trên browser
    queryParameter: 'lang', // params trên url dùng thay đổi ngôn ngữ 
    defaultLocale: 'en', // Ngôn ngữ mặc định khi init nó sẽ tự tìm các chuỗi nằm trong hàm __ và __n để tự thêm vào file json
    directory: __dirname + '/languages',
    directoryPermissions: '755', // Thiết lập quyền ghi cho các file ngôn ngữ (chỉ dùng cho hệ thống nodejs trên linux)
    autoReload: true,
    updateFiles: true,
    api: {
        '__': '__',
        '__n': '__n'
    }
});

app.use(session({
    secret: settings.secured_key,
    resave: false,
    saveUninitialized: false
}));

app.use(function(req, res, next) {
    i18n.init(req, res, next);
});

app.use(function(req, res, next) {
    res.locals.clanguage = req.getLocale(); // Ngôn ngữ hiện tại
    res.locals.languages = i18n.getLocales(); // Danh sách ngôn ngữ khai báo trong phần cấu hình bên trên.
    res.locals.settings = settings;
    // res.locals.logged = req.isAuthenticated();
    // res.locals.member = req.user;
    next();
});

app.use('/', index);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    console.log(err.message);
    // if using view engine
    // res.render('error'); 
});

module.exports = app;
