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
