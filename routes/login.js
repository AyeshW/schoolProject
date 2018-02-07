/**
 * Created by Hasitha Isuru on 07/02/2018.
 */
/**
 * Created by Hasitha Isuru on 06/02/2018.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'login' });
});

module.exports = router;
