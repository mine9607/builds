//create an array

var myArray = [8, "hello"];

console.log(myArray);

//Create a new object with maxSpeed property, driver property and drive fuction

var myCar = {
  maxSpeed: 50,
  driver: "Brian",
  drive: function (speed, time) {
    console.log(speed * time + " miles");
  },
  //note the THIS keyword identifies the object to which the current property or function belongs
  logDriver: function () {
    console.log("driver 1 name is: " + this.driver);
  },
};

var angieCar = {
  maxSpeed: 50,
  driver: "Angela",
  drive: function (speed, time) {
    console.log(speed * time + " miles");
  },
  //note the THIS keyword identifies the object to which the current property or function belongs
  logDriver: function () {
    console.log("driver 2 name is: " + this.driver);
  },
};
console.log(myCar);

myCar.drive(30, 3);
myCar.logDriver();
angieCar.logDriver();

//The Date object

var birthday = new Date(1985, 10, 5, 11, 15, 25);
var birthday2 = new Date(1985, 10, 5, 11, 15, 25);
//get the month of the date (0 - 11)
console.log(birthday.getMonth());

//get the full year (YYYY)
console.log(birthday.getFullYear());

//get the date of the month (1 - 31)
console.log(birthday.getMonth());

//get the day of the week (0 - 6)
console.log(birthday.getDay());

//get the hour of the date (0 - 23)
console.log(birthday.getHours());

//get the number of milliseconds since the 1st Jan 1970
console.log(birthday.getTime());

if (birthday == birthday2) {
  console.log("birthdays are equal");
} else {
  console.log("birthdays are not equal");
}
//use get Time to compare dates to check equality
if (birthday.getTime() == birthday2.getTime()) {
  console.log("birthdays are equal");
} else {
  console.log("birthdays are not equal");
}
