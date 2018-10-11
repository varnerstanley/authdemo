var txt = '{"name":"John", "age":30, "city":"New York", "food":"Pizza", "transporation":"bike"}'

var obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age + ", " + obj.food + ", " + obj.transporation;
