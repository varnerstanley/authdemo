function sayHi() {
  console.log("hello world!");
  console.log("goodbye!");
}
//Dont repeat your self - DRY

function square(num) {
  console.log(num * num);
}
function sayHello(name) {
console.log("hello there " + name + "!");
}
function area(length, width) {
  console.log(length * width);
}
area(9,2);

function square(x) {
  return " Hello " + x * x;
}
function capitalize(str) {
  if(typeof str === "number") {
    return "that's not a string!"
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
var city = "paris";
var capital = capitalize(city);

function isEven(num) {
  if(num % 2 === 0)
  return true;
}
var numbers = [
  [22, 67, 33, 96, 88],
  [23, 45, 56, 68]
];

console.log(numbers[numbers.length])
