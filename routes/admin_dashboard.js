/**
 * Created by Hasitha Isuru on 23/04/2018.
 */
/**
 * Created by Hasitha Isuru on 04/04/2018.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var login = require('../routes/login');
var student_name = "";

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin_dashboard', { title: 'dashboard' });
});

module.exports = router;