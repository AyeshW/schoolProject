
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('StudentAttendenceSheet', { title: 'Student Attendence Sheet' });
    res.render()
});
router.post('/a', function(req, res, next) {
    console.log("at a");
});

module.exports = router;

function renderNames(){

    //Names of students
    var tableContent = "";

    /*for (index = 0; index < names.length; index++) {
        tableContent += "<tr><td>" + names[index] + "</td>"

            + "<td>" + Indices[index] + "</td></tr>";

        nameCounter++;
        total.innerHTML = "Total: " + nameCounter;
    }
    output.innerHTML = tableContent;

*/
alert(document.getElementById("p1").checked);
};