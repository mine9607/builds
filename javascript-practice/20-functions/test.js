//prints a value to console
function getAverage(a, b) {
  var average = (a + b) / 2;
  console.log(average);
}

getAverage(7, 8);

//stores result of function as a variable "average" and stores that result in the variable "result"
function returnAverage(a, b) {
  var average = (a + b) / 2;
  console.log(average);
  return average;
}

var result = returnAverage(7, 8);
