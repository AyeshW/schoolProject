/**
 * Created by Hasitha Isuru on 07/02/2018.
 */
/**
 * Created by Hasitha Isuru on 06/02/2018.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'login' });
    document.getElementById("response_to_action").style.visibility = "hidden";
});

router.post("/", function(req, res){
    console.log(req.body.username);
    login(req.body.username,req.body.password,res);
});

function login(username,givenPassword,response) {
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
            var string=JSON.stringify(result);
            if (string == "[]"){
                console.log("There is no such an account!")
            }else {
                console.log('>> string: ', string);
                var json = JSON.parse(string);
                console.log('>> json: ', json);
                console.log('>> user.name: ', json[0].password);
                var realPassword = json[0].password;
                if (realPassword == givenPassword) {
                    console.log("DONE!");
                    return response.redirect('/dashboard');
                } if (realPassword != givenPassword) {
                    console.log("Wrong password!")
                }
            }
        });
    });
}



module.exports = router;
