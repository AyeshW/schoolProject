
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('student_registration', { title: 'Registration Form'});

});

router.post('/',function (req, res) {
    console.log("Post method called");

    //res.render('student_registration', { title: 'Registration Form' });
    //validate(req.body.date,req.body.grade, req.body.phone_number, req.body.Home_Number);
});

module.exports = router;