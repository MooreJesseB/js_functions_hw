var letterCount = function(str) {
  var obj = {};

  for (var i = 0, letter; i < str.length; i++) {
    letter = str[i];
    if (letter != " ") {      
      if (obj[letter] === undefined) {
        obj[letter] = 1;
      }
      else {
        obj[letter] += 1;  
      }
    }
  };
  for (key in obj) {
    console.log(key + " - " + obj[key]);
  };
  console.log("note: white space not counted");
};

string = "How I wish you were here";
letterCount(string);