var express = require('express');
var router = express.Router();
var mysql=require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('leave', { title: 'Teachers_Apply_Leave_Form' });
    //console.log("HI");
});

router.post('/a', function(req, res, next) {
   console.log("at a");
});

router.post('/b', function(req, res, next) {
    savetoDB(req.body ,res);
      console.log('hi');

});

module.exports = router;

function savetoDB(body,res) {
    var errorCounter=0;
    if(body.Sdate>body.Edate){
        errorCounter++;
    }
    if(body.Sdate.length==0 |body.Edate.length==0){
        errorCounter++;
    }

    if(body.ID.length!=5){
        errorCounter++;
    }
    if(body.Ifclasses=="Yes" & body.Classes.length===0){
        errorCounter++;
    }

    if(errorCounter==0) {
        var con = mysql.createConnection({
            host: "sql12.freemysqlhosting.net",
            user: "sql12246368",
            password: "CeVtni3mrY",
            database: "sql12246368"
        });

        con.connect(function (err) {

            if (err) throw err;
            console.log("Connected!");
            console.log(body.Ifclasses);
            //  var sql="INSERT INTO applyleave(name,id,designation,reason, sdate, edate,Ifclasses,classes, email) VALUES("+body.Name+','+body.ID+','+body.Designation+','+body.Reason+','+body.Sdate+','+body.Edate+','+Ifclasses+','+body.Classes+','+body.Email+")";
            var sql = "INSERT INTO applyleave(name,id,designation,reason, sdate, edate,Ifclasses,classes, email) VALUES ?";
            var values = [[body.Name, body.ID, body.Designation, body.Reason, body.Sdate, body.Edate, body.Ifclasses, body.Classes, body.Email]];
            con.query(sql, [values], function (err, result) {
                if (err) throw err;
                console.log(" records inserted: " + result.affectedRows);
                res.end("<html><h1 style='color:blue'>Request sent <a href=''>Go Back</a></h1></html>");
            });
        });

    }
    else{
        console.log("validation fails!...retry");
        res.end("<html><h1 style='color:red'>Validation Failed. Retry!!</h1></html>")

    }

}