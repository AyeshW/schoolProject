
var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var length;
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
        con.query("SELECT NameWithInit,ID FROM StudentProfile", function (err, result, fields) {
            if (err) throw err;

            //console.log(result);
            var string=JSON.stringify(result);
             var jsonArray=JSON.parse(string);
              length=jsonArray.length;

            res.render('student_attendence_sheet', { title: 'Student Attendence Sheet',jsonArray:jsonArray });

            //7 console.log(studentArray);

        });
    });



    //var table=req.body.Table;
    console.log();
});

router.post('/a',function(req,res,next){
    console.log(req.body.Date);
    var realdate=req.body.Date;
    var date=new Date(req.body.Date);
      todaydate=date.toString();
    if (date=="Invalid Date"){
        res.end("<h1 style='color:blue'>Please indicate the date</h1>");

    }
    else{
        res.end("<html><h1 style='color:blue'>Marking Attendence Completed ! <a href=''>Go Back</a></h1></html>");

        //into data base
        var con = mysql.createConnection({
            host: "sql12.freemysqlhosting.net",
            user: "sql12246368",
            password: "CeVtni3mrY",
            database: "sql12246368"
        });



        con.connect(function (err) {

            if (err) throw err;
            console.log("Connected!");
            //  var sql="INSERT INTO applyleave(name,id,designation,reason, sdate, edate,Ifclasses,classes, email) VALUES("+body.Name+','+body.ID+','+body.Designation+','+body.Reason+','+body.Sdate+','+body.Edate+','+Ifclasses+','+body.Classes+','+body.Email+")";
           // var sql1="ALTER TABLE StudentAttendence  ADD "+realdate.toString()+" TEXT(15) ";
           realdate=realdate.toString();
           realdate=realdate.slice(0,4)+realdate.slice(5,7)+realdate.slice(8,realdate.length);
          console.log("gasfg'afgaf     real "+realdate);
            var sql1="ALTER TABLE StudentAtttendence  ADD fn TEXT(15) ";

            var sql = "INSERT INTO StudentAtttendence (fn) VALUES ?";

           var values=new Array(length);
           var i=0;
           for(;i<length;i++){
              var str="check"+i+1+"box";
              console.log(req.body.str);
              // values[i]=[(req.body.str.checked)];
               values[i]=req.body.str;
           }
           ;
           console.log("values ="+values);
           con.query(sql1);
            con.query(sql, [[values]], function (err, result) {
                if (err) throw err;
                console.log(" records inserted: " + result.affectedRows);
                //res.end("<html><h1 style='color:blue'>Request sent <a href=''>Go Back</a></h1></html>");
            });
        });

    }

});

module.exports = router;