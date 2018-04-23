/**
 * Created by Hasitha Isuru on 23/04/2018.
 */

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var login = require('../routes/login');
var student_name = "";

/* GET home page. */
router.get('/', function(req, res) {
    res.render('create_user', { title: 'Create user' });
});

router.post("/", function(req, res){
    console.log(req.body.fullname);
    insertStudent(req.body.fullname,req.body.nameWithinitials,req.body.indexNum,req.body.address1,req.body.InputEmail1,req.body.InputPassword1,res,req);
});

function insertStudent(fullname,nameWithinitials,indexNum,address,InputEmail1,InputPassword1,response,request) {
    var con = mysql.createConnection({
        host: "sql12.freemysqlhosting.net",
        user: "sql12234088",
        password: "mYvBvIiYjX",
        database: "sql12234088"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO students (fullname,nameWithinitials,indexNum,address,InputEmail,InputPassword) VALUES ('"+fullname+"', '"+nameWithinitials+"','"+indexNum+"','"+address+"','"+InputEmail1+"','"+InputPassword1+"')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            return response.redirect('/successfully_created');
        });
    });
}


module.exports = router;