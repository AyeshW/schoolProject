var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('registration_successful', { title: 'Registration Successful'});

});

module.exports = router;