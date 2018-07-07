/**
 * Created by Hasitha Isuru on 07/02/2018.
 */
/**
 * Created by Hasitha Isuru on 06/02/2018.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var fs = require('fs');
var http = require('http');
var url = require('url');
var passport = require('passport');

/* GET home page. */
router.get('/',function(req, res, next) {
    res.render('login', { title: 'login' });
});

router.post("/", passport.authenticate("local-login",
    {
        successRedirect: "/dashboard",
        failureRedirect: "/login",
        failureFlash : true // allow flash messages
    }), function(req, res){

    console.log("hello");

    if (req.body.remember) {
        req.session.cookie.maxAge = 1000 * 60 * 3;
    } else {
        req.session.cookie.expires = false;
    }
    res.redirect('/');
});

function login(username,givenPassword,response,req) {
    var con = mysql.createConnection({
        host: "sql12.freemysqlhosting.net",
        user: "sql12246368",
        password: "CeVtni3mrY",
        database: "sql12246368"
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM userlogin WHERE username = '"+username+"'", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            var string=JSON.stringify(result);
            if (string == "[]"){
                console.log("There is no such an account!");
            }else {
                console.log('>> string: ', string);
                var json = JSON.parse(string);
                console.log('>> json: ', json);
                console.log('>> user.name: ', json[0].password);
                var realPassword = json[0].password;
                var category = json[0].category;
                if (realPassword == givenPassword) {
                    console.log("DONE!");
                    if (category == "admin"){
                        return response.redirect('/admin_dashboard?admin_name=' + username);
                    }else {
                        return response.redirect('/dashboard?student_name=' + username);
                    }
                } if (realPassword != givenPassword) {
                    console.log("Wrong password!");
                    console.log(testVary);
                    responseText = "Wrong password!";
                    response.redirect('/login');
                }
            }
        });
    });
}

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


module.exports = router;
