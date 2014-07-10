var isPrime = function(num) {
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

var value = Math.floor(Math.random()*100);
console.log("\nFor the number: " + value);
console.log("Is it Prime? " + isPrime(value));



var primes = function(num) {
  // this is for the second prime exercise
  var arr = [];
  for (var i = 1; i < num; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
};

var maxNum = Math.floor(Math.random()*100);
console.log("\nFor the max number: " + maxNum);
console.log("Here are all of the primes: ");
console.log(primes(maxNum));