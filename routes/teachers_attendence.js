
var express = require('express');
var router = express.Router();
var mysql=require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {

    // console.log("render");
    var con = mysql.createConnection({
        host: "sql12.freemysqlhosting.net",
        user: "sql12246368",
        password: "CeVtni3mrY",
        database: "sql12246368"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("coming.....")
        con.query("SELECT name,id FROM TeacherProfile", function (err, result, fields) {
            if (err) throw err;

            //console.log(result);
            var string=JSON.stringify(result);
            var jsonArray=JSON.parse(string);
         //  var length=jsonArray.length;

            res.render('teachers_attendence', { title: 'Teachers Attendence sheet',jsonArray:jsonArray });

            //7 console.log(studentArray);

        });
    });



    res.render('teachers_attendence', { title: 'Teachers attendence '});


});

module.exports = router;