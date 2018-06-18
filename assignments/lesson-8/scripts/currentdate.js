function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    document.getElementById("currentdate").innerHTML = n + ", ";
}
myFunction();

var months = ['January','February','March','April','May','June','July',
'August','September','October','November','December'];

var today = new Date();
var dd = today.getDate();
var yyyy = today.getFullYear();

document.getElementById("spanDate").innerHTML = dd + " " + months[today.getMonth()] + " " + yyyy;
