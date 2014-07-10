var compareNumbers = function(a, b) {
  // just exploring other ways to sort
  return a - b;
}

var makeRandomArr = function () {
  // Make a randomly sized array and sort it for testing purposes
  var randomArr = [];
  var temp = (Math.floor(Math.random()*8));
  var length = 3 + temp   
  for (i = 0; i <= length; i++) {
    randomArr.push(Math.floor(Math.random()*30 + 1));
  };
  return randomArr.sort(compareNumbers);
}

var merge = function(arr1, arr2) {
  // merge two already sorted arrays and keep them sorted.
  for (var i = 0; i < arr2.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
      if (arr2[i] <= arr1[j]) {
        arr1.splice(j, 0, arr2[i]);
        break;
      }
      if (j === arr1.length - 1) {
        arr1.push(arr2[i]);
        break;
      }
    };
  };
  return arr1;
};

var arr1 = makeRandomArr();
var arr2 = makeRandomArr();

console.log("For Array: " + arr1);
console.log("And Array: " + arr2);
console.log("The final sorted array is: ");
console.log(merge(arr1, arr2));