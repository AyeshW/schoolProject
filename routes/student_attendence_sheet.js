
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
        con.query("SELECT NameWithInit FROM StudentProfile", function (err, result, fields) {
            if (err) throw err;

            //console.log(result);
            var string=JSON.stringify(result);
           // console.log(string);
            var json=JSON.parse(string);
            var studentArray=new Array(json.length);
            var counter=0;
            for(;counter<json.length;counter++) {
                studentArray[counter]=(json[counter].NameWithInit);

            }

            res.render('student_attendence_sheet', { title: 'Student Attendence Sheet',studentArray:json });

            //7 console.log(studentArray);

        });
    });



    //var table=req.body.Table;
    console.log();
});

router.post('/a',function(req,res,next){
    console.log(req.body.Date);
    var date=new Date(req.body.Date);
    if (date=="Invalid Date"){
        res.end("<h1 style='color:blue'>Please indicate the date</h1>");

    }

});

module.exports = router;