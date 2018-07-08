
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('teachers_attendence', { title: 'Teachers attendence '});
    var name = 'hello';


});

module.exports = router;