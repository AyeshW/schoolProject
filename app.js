var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var student_dashboard = require('./routes/student_dashboard');
var mail_box = require('./routes/mailbox');
var signup = require('./routes/signup');
var admin_dashboard = require('./routes/admin_dashboard');
var create_user = require('./routes/create_user');
var successfully_created = require('./routes/successfully_created');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/login',login);
app.use('/dashboard',student_dashboard);
app.use('/mailbox',mail_box);
app.use('/signup',signup);
app.use('/admin_dashboard',admin_dashboard);
app.use('/create_user',create_user);
app.use('/successfully_created',successfully_created);


app.use(function(req,res){
    res.render('404.jade');
});



module.exports = app;
