/**
 * Created by Hasitha Isuru on 04/04/2018.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var login = require('../routes/login');
var student_name = "";

/* GET home page. */
router.get('/',isLoggedIn ,function(req, res, next) {
    console.log("Heyy  "+req.query.student_name);
    res.render('student_dashboard', { title: 'dashboard' });
});


// route middleware to make sure
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
        console.log("asdfaf "+req.user.category);
        if(req.user.category == "student") {
            return next();
        }else{
            res.redirect('/');
        }
    }

    // if they aren't redirect them to the home page
    res.redirect('/');
}


module.exports = router;