
var express = require('express');

var router = express.Router();
var mysql=require("mysql");
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Teachers_registration', { title: 'Teachers Registration' });
});

const{check,validationResult}=require('express-validator/check');
const{matchedDate,sanitize}=require('express-validator/filter');

router.post('/a',function(req,res,next){


    console.log("here");
    savetoDB(req.body,res);
});
module.exports = router;

function savetoDB(body,res) {
    var errorCounter=0;
    if(body.Age<18 | body.Age>70){
        errorCounter++;
    }
    if(body.PhoneNumber.length!=10){
        errorCounter++;
    }
    if(body.Nic.length!=10 | (body.Nic.slice(-1)!="v" &body.Nic.slice(-1)!="V")){
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
            var sql = "INSERT INTO TeacherProfile(name,age,gender, address, phonenumber,nic,email,dob,specification,subjects,others) VALUES ?";
            var values = [[body.Name, body.Age, body.Gender, body.Address, body.PhoneNumber, body.Nic, body.Email, body.Dob, body.Specification, body.Subjects, body.Details]];


            con.query(sql, [values], function (err, result) {
                if (err) throw err;
                console.log(" records inserted: " + result.affectedRows);
                res.end();
            });
        });


    }
    else{
        res.end("<html><h1 style='color:blue'>Given data is invalid. Try again</h1></html>");
    }

}


