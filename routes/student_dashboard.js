/**
 * Created by Hasitha Isuru on 04/04/2018.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/',isLoggedIn ,function(req, res, next) {
    res.render('student_dashboard', { title: 'dashboard', name: req.user.username });
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

// route middleware to make sure
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
        console.log("asdfaf "+req.user.category);
        if(req.user.category == "student") {
            return next();
        }
        if(req.user.category == "teacher"){
            res.redirect('/teachers_dashboard');
        }
        if(req.user.category == "principal"){
            res.redirect('/principals_dashboard');
        }else{
            res.redirect('/');
        }
    }else{
        // if they aren't redirect them to the home page
        res.redirect('/');
    }
}


module.exports = router;