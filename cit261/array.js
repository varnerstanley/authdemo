
console.log("connected!!");

function printReverse(arr) {
  for(var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
printReverse([3,6,2,5])

//isUniform()

function isUniform(arr) {
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}

//sumArray()

function sumArray(arr) {
  var total = 0;
  arr.forEach(function(element) {
    total += element;
  });
  return total;
}

// max()

function max(arr) {
  var maxNum = arr[0];
  for (var i = 1; i < arr.length; ++i) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
//forEach extra practice
function myForEach(arr, func) {
	//loop through array
  for (var i = 0; i < arr.length; i++) {
    //call func for each item in array
    func(arr[i]);
  }
}
var colors = ["red", "orange", "yellow"];
