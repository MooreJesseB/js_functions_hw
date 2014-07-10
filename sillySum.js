var makeRandomArr = function () {
  // I copied this from merge.js  I don't know how to include .js files in other .js files yet.
  // Make a randomly sized array and sort it for testing purposes
  var randomArr = [];
  var temp = (Math.floor(Math.random()*8));
  var length = 3 + temp   
  for (i = 0; i <= length; i++) {
    randomArr.push(Math.floor(Math.random()*50 + 1));
  };
  return randomArr;
}

var sillySum = function(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i] * i;
  };

  return sum;
};

array = makeRandomArr();
console.log("For array: " + array);
console.log("The sillySum is: " + sillySum(array));