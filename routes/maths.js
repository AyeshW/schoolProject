
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',isLoggedIn, function(req, res, next) {
    res.render('maths', { title: 'maths' });
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
