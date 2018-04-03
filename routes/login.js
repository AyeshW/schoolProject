/**
 * Created by Hasitha Isuru on 07/02/2018.
 */
/**
 * Created by Hasitha Isuru on 06/02/2018.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/form',function (req,res){
    //employee details from add-employee.html page
    var name=req.body;
    console.log(name);
    res.status(200).send('employee ' + name + ' added');
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'login' });
});

login("student1");
var app = express();

router.post("/login", function(req, res){
    console.log(req.body.username);
    res.render('/',{title:'Home'});
});

function login(username) {
    var con = mysql.createConnection({
        host: "sql12.freemysqlhosting.net",
        user: "sql12230102",
        password: "RFdkSKjyl7",
        database: "sql12230102"
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT password FROM userlogin WHERE username = '"+username+"'", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    });
}

module.exports = router;
