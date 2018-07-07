var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Teachers_Apply_Leave_Form', { title: 'Teachers_Apply_Leave_Form' });
    console.log("HI");
});

router.post('/a', function(req, res, next) {
    console.log("here");
});

router.post('/b', function(req, res, next) {
      console.log('hi');
});

module.exports = router;



function clic(element)
{
    //getting inputed data from the form one by one to variables.....
    var name=document.getElementById("name").value;
    var id=document.getElementById("Id").value;
    var designation=document.getElementById("designation").value;
    var reason=document.getElementById("reason").value;
    var sdate=document.getElementById("sdate").value;
    var edate=document.getElementById("edate").value;
    var yes_no=document.getElementById("yes_no").value;
    var classes=document.getElementById("classes").value;
    var email=document.getElementById("email").value;


    //end of tracking data from html file....
    //document.getElementById("submitbtn").value="sent";

    // alert(teachers_name+" "+teachers_id+" "+teachers_designation+" sdate "+ sdate+" yn "+if_classes+" e "+teachers_email);
    if(sdate>edate){
        //when the starting date and end dates are not matching ..
        document.getElementById("IfdatesAreInvalid").style.display="inline";
        //alert("Invalid date fields are given. please fill again");
        console.log("Invalid date fields given.");
    }
    else{
        document.getElementById("IfdatesAreInvalid").style.display="none";

    }

    if(teachers_id.length !=5){
        document.getElementById("IfIdIsLong").style.display="inline";
    }else{
        document.getElementById("IfIdIsLong").style.display="none";

    }

    if(if_classes=="Yes" & classes.length==0){
      document.getElementById("NotGivenClasses").style.display="inline";
    }
    else{
        document.getElementById("NotGivenClasses").style.display="none";

    }


};