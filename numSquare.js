var makeRandomArr = function () {
  // I copied this from merge.js  I don't know how to include js files in other js files yet.
  // Make a randomly sized array and sort it for testing purposes
  var randomArr = [];
  var temp = (Math.floor(Math.random()*8));
  var length = 3 + temp   
  for (i = 0; i <= length; i++) {
    randomArr.push(Math.floor(Math.random()*50 + 1));
  };
  return randomArr.sort(compareNumbers);
}

var numSquare = function(num) {
  arr = [];
  for (i = 1; i < num; i++) {
    square = i * i;
    if (square > num) {
      return arr;
    }
    arr.push(square);
  }
};

val = Math.floor(Math.random()*100);
console.log("With the max number of: " + val);
console.log("These are all of the perfect squares: ");
console.log(numSquare(val));