var dog = {
  name: "Rusty",
  breed: "Mutt",
  age: 3
}
var someObject = {
  friends: [
    {name: "Malfoy"},
    {name: "Crabbe"},
    {name: "Goyle"}
  ],
  color: "baby blue",
  isEvil: true
};
//someObject.friends[0].name
//"Malfoy"

var movies = [
  {
   title: "In Bruges",
   rating: "5",
   hasWatched: true
 },
  {
   title: "Frozen",
   rating: "4.5",
   hasWatched: false
 },
  {
   title: "Mad Ma Fury Road",
   rating: "5",
   hasWatched: true
 },
  {
   title: "Les Miserables",
   rating: "3.5",
   hasWatched: false
 }
];


movies.forEach(function(movie){
  var result = "You have ";
  if(movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result)
})

function buildString(movie) {
  var result = "You have ";
  if(movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
}
movies.forEach(function(movie){
  console.log(buildString(movie));
})

//Method, function in an object
var obj = {
  name: "Chuck",
  age: 45,
  isCool: false,
  friends: ["bob", "tina"],
  add: function(x,y) {
    return x + y;
  }
}

function speak() {
  return "WOOF!";
}

var dogSpace = {};

dogSpace.speak = function() {
  return "WOOF!";
}

var catSpace = {};

catSpace.speak = function() {
  return "MEOW!";
}

var comments = {};

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = "Mikey"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
