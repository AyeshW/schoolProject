var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('successfully_submitted', { title: 'dashboard' });
});

module.exports = router;