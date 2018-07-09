
var express = require('express');
var router = express.Router();
var mysql=require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('student_absentnote', { title: 'Absent Note' });
});

router.post('/', function (req,res) {

    saveToDB(req,res, req.body);
    console.log('Data successfully saved to database');
    res.redirect('/successfully_submitted');

});

function validate(res, body) {
    var error = 0;
    var index = body.Index;
    var phone = body.phone_number;
    var sdate = new Date(body.From);
    var edate = new Date(body.To);
    var today = new Date();

    if(sdate == 'Invalid Date' || edate == 'Invalid Date'){
        res.render('student_absentnote', { title: 'Absent Note',message4:'Please fill out all name fields.'});
        return ++error;
    }

    if(index.toString().length != 5){

        if(phone.toString().length != 10){
            if((sdate.getTime() > edate.getTime()) || (edate.getTime() > today.getTime())){
                res.render('student_absentnote', {
                    title: 'Absent Note',
                    message1: 'Invalid Index Number. Enter 5 Digit Index Number',
                    message2: 'Invalid Phone Number. Enter 10 Digit Number',
                    message3:'Invalid Date Fields'
                });
                return ++error;
            }else {
                res.render('student_absentnote', {
                    title: 'Absent Note',
                    message1: 'Invalid Index Number. Enter 5 Digit Index Number',
                    message2: 'Invalid Phone Number. Enter 10 Digit Number'
                });
                return ++error;
            }
        }else if((sdate.getTime() > edate.getTime()) || (edate.getTime() > today.getTime())){

            res.render('student_absentnote', {
                title: 'Absent Note',
                message1:'Invalid Index Number. Enter 5 Digit Index Number',
                message3:'Invalid Date Fields'});
            return ++error;
        }else{
            res.render('student_absentnote', { title: 'Absent Note',message1:'Invalid Index Number. Enter 5 Digit Index Number'});
            console.log(++error);
            return ++error;
        }
    }else if(phone.toString().length != 10){
        if((sdate.getTime() > edate.getTime()) || (edate.getTime() > today.getTime())){
            res.render('student_absentnote', {
                title: 'Absent Note',
                message2: 'Invalid Phone Number. Enter 10 Digit Number',
                message3:'Invalid Date Fields'
            });
            return ++error;
        }else {
            res.render('student_absentnote', {
                title: 'Absent Note',
                message2: 'Invalid Phone Number. Enter 10 Digit Number'
            });
            return ++error;
        }
    }

    else if((sdate.getTime() > edate.getTime()) || (edate.getTime() > today.getTime())){
        console.log('Date Error');
        res.render('student_absentnote', { title: 'Absent Note',message3:'Invalid Date Fields'});
        return ++error;
    }else {
        console.log('No errors found ');
        return error;
    }
}
function saveToDB(req,res,body) {
    var err = validate(res,body);
    console.log('Error value '+err);
    if(err == 0) {
        var con = mysql.createConnection({
            host: "sql12.freemysqlhosting.net",
            user: "sql12246368",
            password: "CeVtni3mrY",
            database: "sql12246368"
        });

        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");

            var sql = 'INSERT INTO AbsentNotes(IndexNo,Name,Email,ParentPhone,FromDate,ToDate,Reason) VALUES ?';
            var values = [[body.Index, body.Students_Full_Name, body.email, body.phone_number, body.From, body.To, body.reason]];
            var query = con.query(sql, [values], function (err, result) {
                if (err) {
                    console.error(err);
                }
                console.error(result);

            });

        });
    }
}
module.exports = router;