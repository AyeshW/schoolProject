/**
 * Created by Hasitha Isuru on 01/04/2018.
 */
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql12.freemysqlhosting.net",
    user: "sql12230102",
    password: "RFdkSKjyl7",
    database: "sql12230102"
});

var username = "student1";

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT password FROM userlogin WHERE username = '"+username+"'", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});