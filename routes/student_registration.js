
var express = require('express');
var router = express.Router();
var mysql=require('mysql');


router.get('/', function(req, res, next) {
    res.render('student_registration', { title: 'Registration Form'});

});

router.post('/',function (req, res) {
    console.log("Post method called");
    var errors = validate(req.body,res);
    saveToDB(req, req.body);
    res.redirect('/registration_successful');

});

function saveToDB(req,body) {

    var con = mysql.createConnection({
        host: "sql12.freemysqlhosting.net",
        user: "sql12246368",
        password: "CeVtni3mrY",
        database: "sql12246368"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");

        var sql = 'INSERT INTO StudentProfile(FullName,NameWithInit,StudentEmail,Birthday,PhoneNumber,Gender,Grade,Street,City,State,PostalCode,ParentName,Designation,HomeNumber,ParentEmail,Relationship) VALUEs ?';
        var values = [[body.StudentsFullName,body.NameInit,body.email,body.ddate,body.phone_number,body.gender,body.grade,body.Address,body.city,body.states,body.Postal_Code,body.Username,body.designation,body.Home_Number,body.email2,body.relation]];
        var query = con.query(sql,[values],function (err,result) {
            if(err) {
                console.error(err);
            }
            console.error(result);

        });

    });
}

function validate(body,res) {
    var birthday = body.ddate;
    var grade = body.grade;
    var mobile = body.phone_number;
    var home = body.Home_Number;
    var today = 2018;

    var birthday1 = new Date(birthday);

    if (birthday1 == 'Invalid Date') {
        res.render('student_registration', { title: 'Registration Form',message:'Please fill out the birthday field'});

    } else {
        var birthday2 = parseInt((birthday.toString()).slice(0,4));
        var age = today - birthday2

        console.log(age);
        switch (grade) {
            case "1":
                if (age > 6 || age < 5) {
                    if (mobile.toString().length != 10) {
                        if (home.toString().length != 10) {
                            res.render('student_registration', { title: 'Registration Form',message1:'Invalid Phone Number. Enter 10 Digit Number',message2:'Invalid Birthday for Related Grade',message3:'Invalid Phone Number. Enter 10 Digit Number'});
                        }else{
                            res.render('student_registration', { title: 'Registration Form',message1:'Invalid Phone Number. Enter 10 Digit Number',message2:'Invalid Birthday for Related Grade'});
                        }
                    }else{
                        res.render('student_registration', { title: 'Registration Form',message2:'Invalid Birthday for Related Grade'});
                    }
                }
                break;
            case "2":
                if (age > 7 || age < 6) {
                    if (mobile.toString().length != 10) {
                        if (home.toString().length != 10) {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade',
                                message3: 'Invalid Phone Number. Enter 10 Digit Number'
                            });
                        } else {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade'
                            });
                        }
                    } else {
                        res.render('student_registration', {
                            title: 'Registration Form',
                            message2: 'Invalid Birthday for Related Grade'
                        });
                    }
                }
                break;
            case "3":
                if (age > 8 || age < 7) {
                    if (mobile.toString().length != 10) {
                        if (home.toString().length != 10) {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade',
                                message3: 'Invalid Phone Number. Enter 10 Digit Number'
                            });
                        } else {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade'
                            });
                        }
                    } else {
                        res.render('student_registration', {
                            title: 'Registration Form',
                            message2: 'Invalid Birthday for Related Grade'
                        });
                    }
                }
                break;
            case "4":
                if (age > 9 || age < 8) {
                    if (mobile.toString().length != 10) {
                        if (home.toString().length != 10) {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade',
                                message3: 'Invalid Phone Number. Enter 10 Digit Number'
                            });
                        } else {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade'
                            });
                        }
                    } else {
                        res.render('student_registration', {
                            title: 'Registration Form',
                            message2: 'Invalid Birthday for Related Grade'
                        });
                    }
                }
                break;
            case "5":
                if (age > 10 || age < 9) {
                    if (mobile.toString().length != 10) {
                        if (home.toString().length != 10) {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade',
                                message3: 'Invalid Phone Number. Enter 10 Digit Number'
                            });
                        } else {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade'
                            });
                        }
                    } else {
                        res.render('student_registration', {
                            title: 'Registration Form',
                            message2: 'Invalid Birthday for Related Grade'
                        });
                    }
                }
                break;
            case "6":
                if (age > 11 || age < 10) {
                    if (mobile.toString().length != 10) {
                        if (home.toString().length != 10) {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade',
                                message3: 'Invalid Phone Number. Enter 10 Digit Number'
                            });
                        } else {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade'
                            });
                        }
                    } else {
                        res.render('student_registration', {
                            title: 'Registration Form',
                            message2: 'Invalid Birthday for Related Grade'
                        });
                    }
                }
                break;
            case "7":
                if (age > 12 || age < 11) {
                    if (mobile.toString().length != 10) {
                        if (home.toString().length != 10) {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade',
                                message3: 'Invalid Phone Number. Enter 10 Digit Number'
                            });
                        } else {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade'
                            });
                        }
                    } else {
                        res.render('student_registration', {
                            title: 'Registration Form',
                            message2: 'Invalid Birthday for Related Grade'
                        });
                    }
                }
                break;
            case "8":
                if (age > 13 || age < 12) {
                    if (mobile.toString().length != 10) {
                        if (home.toString().length != 10) {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade',
                                message3: 'Invalid Phone Number. Enter 10 Digit Number'
                            });
                        } else {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade'
                            });
                        }
                    } else {
                        res.render('student_registration', {
                            title: 'Registration Form',
                            message2: 'Invalid Birthday for Related Grade'
                        });
                    }
                }
                break;
            case "9":
                if (age > 14 || age < 13) {
                    if (mobile.toString().length != 10) {
                        if (home.toString().length != 10) {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade',
                                message3: 'Invalid Phone Number. Enter 10 Digit Number'
                            });
                        } else {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade'
                            });
                        }
                    } else {
                        res.render('student_registration', {
                            title: 'Registration Form',
                            message2: 'Invalid Birthday for Related Grade'
                        });
                    }
                }
                break;
            case "10":
                if (age > 15 || age < 14) {
                    if (mobile.toString().length != 10) {
                        if (home.toString().length != 10) {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade',
                                message3: 'Invalid Phone Number. Enter 10 Digit Number'
                            });
                        } else {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade'
                            });
                        }
                    } else {
                        res.render('student_registration', {
                            title: 'Registration Form',
                            message2: 'Invalid Birthday for Related Grade'
                        });
                    }
                }
                break;
            case "12":
                if (age > 17 || age < 16) {
                    if (mobile.toString().length != 10) {
                        if (home.toString().length != 10) {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade',
                                message3: 'Invalid Phone Number. Enter 10 Digit Number'
                            });
                        } else {
                            res.render('student_registration', {
                                title: 'Registration Form',
                                message1: 'Invalid Phone Number. Enter 10 Digit Number',
                                message2: 'Invalid Birthday for Related Grade'
                            });
                        }
                    } else {
                        res.render('student_registration', {
                            title: 'Registration Form',
                            message2: 'Invalid Birthday for Related Grade'
                        });
                    }
                }
                break;

        }

        if (mobile.toString().length != 10) {
            console.log('vegbrrb');
            res.render('student_registration', { title: 'Registration Form',message1:'Invalid Phone Number. Enter 10 Digit Number'});

        }
        if (home.toString().length != 10) {
            res.render('student_registration', { title: 'Registration Form',message3:'Invalid Phone Number. Enter 10 Digit Number'});
        }
        if (mobile.toString().length != 10 && home.toString().length != 10 ) {

            res.render('student_registration', { title: 'Registration Form',message1:'Invalid Phone Number. Enter 10 Digit Number',message3:'Invalid Phone Number. Enter 10 Digit Number'});

        }
    }

}

module.exports = router;