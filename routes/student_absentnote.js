
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('student_absentnote', { title: 'Absent Note' });
});

router.post('/', function (req,res) {
    validate(res,req.body);
});

function validate(res, body) {
    var index = body.Index;
    var phone = body.phone_number;
    var sdate = new Date(body.From);
    var edate = new Date(body.To);
    var today = new Date();

    if(sdate == 'Invalid Date' || edate == 'Invalid Date'){
        res.render('student_absentnote', { title: 'Absent Note',message4:'Please fill out all name fields.'});
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
            }else {
                res.render('student_absentnote', {
                    title: 'Absent Note',
                    message1: 'Invalid Index Number. Enter 5 Digit Index Number',
                    message2: 'Invalid Phone Number. Enter 10 Digit Number'
                });
            }
        }else if((sdate.getTime() > edate.getTime()) || (edate.getTime() > today.getTime())){

            res.render('student_absentnote', {
                title: 'Absent Note',
                message1:'Invalid Index Number. Enter 5 Digit Index Number',
                message3:'Invalid Date Fields'});
        }else{
            res.render('student_absentnote', { title: 'Absent Note',message1:'Invalid Index Number. Enter 5 Digit Index Number'});
        }
    }else if(phone.toString().length != 10){
        if((sdate.getTime() > edate.getTime()) || (edate.getTime() > today.getTime())){
            res.render('student_absentnote', {
                title: 'Absent Note',
                message2: 'Invalid Phone Number. Enter 10 Digit Number',
                message3:'Invalid Date Fields'
            });
        }else {
            res.render('student_absentnote', {
                title: 'Absent Note',
                message2: 'Invalid Phone Number. Enter 10 Digit Number'
            });
        }
    }

    if((sdate.getTime() > edate.getTime()) || (edate.getTime() > today.getTime())){
        console.log('Date Error');
        res.render('student_absentnote', { title: 'Absent Note',message3:'Invalid Date Fields'});
    }

}
module.exports = router;