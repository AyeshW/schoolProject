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


function login(username) {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "sql12.freemysqlhosting.net",
        user: "sql12230102",
        password: "RFdkSKjyl7",
        database: "sql12230102"
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT password FROM userlogin WHERE username = '"+username+"'", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    });
}

module.exports = router;
