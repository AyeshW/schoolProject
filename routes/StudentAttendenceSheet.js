
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('StudentAttendenceSheet', { title: 'Student Attendence Sheet' });
});

module.exports = router;

function renderNames(){

    //Names of students
    var names=["M.G.Dinelka","H.P.Ishan Maleesha","A.M.Danuka Perera","G.A.Sahan Ravindu","U.P.Amasha Sewwandi","H.I.Menuka Malith","G.Kasuni Malsha"];
    var Indices=[16095,16096,16098,16099,16102,16105,16106];
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