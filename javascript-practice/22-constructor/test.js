//Constructor function
var Car = function (maxSpeed, driver) {
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function (speed, time) {
    console.log(speed * time + " miles");
  };
  this.logDriver = function () {
    console.log("driver name is " + this.driver);
  };
};

var myCar = new Car(70, "Brian Miner");
var myCar2 = new Car(50, "Angela Vanegas");
var myCar3 = new Car(35, "Isa Vanegas");
var myCar4 = new Car(120, "Mari Vanegas");

myCar.drive(30, 5);
myCar2.logDriver();
