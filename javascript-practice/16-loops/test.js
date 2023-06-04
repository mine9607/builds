var age = 5;

while (age < 10) {
  console.log("Your age is less than 10");
  age++;
}

document.write("you are now over 10");

var links = document.getElementsByTagName("a");

for (i = 1; i <= links.length; i++) {
  console.log("this is link number" + i);
}

document.write("all links now looped");
