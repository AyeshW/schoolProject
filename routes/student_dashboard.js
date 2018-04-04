/**
 * Created by Hasitha Isuru on 04/04/2018.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('student_dashboard', { title: 'dashboard' });
});

module.exports = router;