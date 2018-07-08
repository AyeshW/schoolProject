var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')
var passport = require('passport');
var passportCover = require('./routes/passport.js');
var flash =require('connect-flash');


var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var student_dashboard = require('./routes/student_dashboard');
var mail_box = require('./routes/mailbox');
var signup = require('./routes/signup');
var admin_dashboard = require('./routes/admin_dashboard');
var create_user = require('./routes/create_user');
var successfully_created = require('./routes/successfully_created');
var science = require('./routes/science');
var buddhism = require('./routes/buddhism');
var history = require('./routes/history');
var buddhism=require('./routes/buddhism');
var teachers_apply_leave=require('./routes/Teachers_Apply_Leave_Form');

var teachers_registration=require('./routes/Teachers_registration');

var student_attendence_sheet=require('./routes/StudentAttendenceSheet');

var student_registration = require('./routes/student_registration');
var student_absentnote = require('./routes/student_absentnote');

var teachers_dashboard = require('./routes/teachers_dashboard');

var principals_dashboard = require('./routes/principals_dashboard')

var student_attendence_sheet=require('./routes/student_attendence_sheet');
var teachers_attendence=require('./routes/teachers_attendence');

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

//==========Passport configuration=============
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passportCover(passport);
app.use(flash()); // use connect-flash for flash messages stored in session

//=====Set current user=====
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});


app.use('/', index);
app.use('/users', users);
app.use('/login',login);
app.use('/dashboard',student_dashboard);
app.use('/mailbox',mail_box);
app.use('/signup',signup);
app.use('/admin_dashboard',admin_dashboard);
app.use('/create_user',create_user);
app.use('/science',science);
app.use('/buddhism',buddhism);
app.use('/history',history);
app.use('/buddhism',buddhism);
app.use('/successfully_created',successfully_created);

app.use('/Teachers_Apply_Leave_Form',teachers_apply_leave);
app.use('/StudentAttendenceSheet',student_attendence_sheet);
app.use('/student_registration',student_registration);
app.use('/student_absentnote',student_absentnote);
app.use('/teachers_dashboard',teachers_dashboard);
app.use('/principals_dashboard' ,principals_dashboard);

// route middleware to make sure
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
app.use('/Teachers_registration',teachers_registration);
app.use('/teachers_attendence',teachers_attendence);
// catch 404 and forward to error handler

//catch 404 and forward to error handler


// catch 404 and forward to error handler
app.use(function(req,res){
    res.render('404.jade');
});



module.exports = app;
