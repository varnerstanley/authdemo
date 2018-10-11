var txt = '{"name":"John", "age":30, "city":"New York", "food":"Pizza", "transporation":"bike"}'

var obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age + ", " + obj.food + ", " + obj.transporation;


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo2").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "json_demo.txt", true);
xmlhttp.send();
