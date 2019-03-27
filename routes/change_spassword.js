
var express = require('express');
var router = express.Router();
var mysql=require('mysql');

/* GET home page. */
router.get('/', isLoggedIn,function(req, res, next) {
    res.render('change_spassword', { title: 'Change Password' });
});
router.post('/',function (req, res) {
    console.log("Post method called");
    change(req,res);
    //saveToDB(req,res, req.body);
    //res.redirect('/registration_successful');

});
// route middleware to make sure
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
        console.log("asdfaf "+req.user.category);
        if(req.user.category == "student") {
            return next();
        }else{
            res.redirect('/');
        }
    }

    // if they aren't redirect them to the home page
    res.redirect('/');
}
function change(req,res) {
    var error = 0;
    var username = req.body.user1;
    var current = req.body.current1;
    var newpassword = req.body.password1;
    var conpassword = req.body.password_confirmation;

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
                //var category = json[0].category;
                if (realPassword == current) {
                    console.log("DONE!");
                    /*if (category == "admin"){
                        return response.redirect('/admin_dashboard?admin_name=' + username);
                    }else {*/


                    if (realPassword != current) {
                        console.log("Wrong password!");
                        console.log(testVary);
                        var responseText = "Wrong password!";
                        res.render('change_spassword', {title: 'Change Password', message1: 'Wrong Password'});
                        error++;
                    }
                    else if ((newpassword.toString().length >= 6) && (newpassword == conpassword)) {
                        con.query("UPDATE userlogin SET password = '"+newpassword+"' WHERE username = '"+username+"'", function (err, result, fields) {
                            if (err) throw err;

                            res.redirect('/successfully_submitted');
                        });
                    } else {
                        res.render('change_spassword', {
                            title: 'Change Password',
                            message2: 'Invalid Password Entered'
                        });
                        error++;
                    }
                }
            }
        });
    });
}

module.exports = router;