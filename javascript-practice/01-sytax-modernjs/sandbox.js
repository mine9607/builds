//strings
console.log("hello, world");

let email = "brianminer@gmail.com";
console.log(email);

//string concatenation
let firstName = "Brandon";
let lastName = "Sanderson";
console.log(firstName + " " + lastName);

let fullName = firstName + " " + lastName;
console.log(fullName);

//getting characters
console.log(firstName[0]);

//string length
console.log("First name length:" + firstName.length);
console.log("Last name length:" + lastName.length);
console.log("Full name length: " + fullName.length);

//string methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

let name = fullName.toUpperCase();
console.log(name);

let index = email.indexOf("@");
console.log(index);

//common string methods
// LAST INDEX OF //
let lastChar = email.lastIndexOf("n");
console.log(lastChar);
// SLICE //
let sliceBack = email.slice(0, 7);
console.log(sliceBack);

let sliceForward = email.slice(7);
console.log(sliceForward);
// SUBSTRING //
let subString = email.substring(3, 10);
console.log(subString);
// REPLACE - replaces the first char that it finds only //
let string = email.replace("n", "p");
console.log(string);

//numbers and math operators ( + - * / ** %)
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

let math = radius % 3;
console.log(math);

//template strings
const title = "Best reads of 2019";
const author = "Brandon Sanderson";
const likes = 30;

//concatenation way
let group = "The blog called " + title + " by " + author + " has " + likes + " likes";
console.log(group);

//template string way (aka template literal) - allows us to inject variables into a string without having to leave the string
let groupShort = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(groupShort);

//creating html templates - can pull data to be displayed and customize HTML elements
let html = `
<h2>${title}</h2>;
<p>${author}</p>;
<span>This blog has ${likes} links</span>
`;
console.log(html);

//arrays
let ninjas = ["shaun", "ryu", "chun-li"];
console.log(ninjas);
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ["shaun", "crystal", 30, 20];
console.log(random);
console.log(ninjas.length);

//array methods
let result = ninjas.join(", ");
console.log(result);

let result2 = ninjas.indexOf("chun-li");
console.log(result2);

let result3 = ninjas.concat(["Ken", "Crystal"]);
console.log(result3);

let result4 = ninjas.push("brian");
console.log(result4);
//note - returns the length of the array..not the array values
//note - the 'PUSH' method alters the original array
console.log(ninjas);

let result5 = ninjas.pop();
console.log(result5);
console.log(ninjas);
//note - the 'POP' method alters the original array

//booleans
console.log(true, false, "true", "false");

//methods can return booleans
let boolResult = email.includes("@");
let names = ["mario", "luigi", "toad"];
console.log(boolResult);
console.log(names);
console.log(names.includes("bowser"));

//comparison operators
console.log("comparison operators");
let age = 25;
console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

console.log("name comparison");
let myName = "brian";
console.log(myName == "brian");
console.log(myName == "Brian");
console.log(myName > "crystal");

//type conversion
let score = "100";
console.log(typeof score);
console.log(score + 1);

score = Number(score);
console.log(typeof score);
console.log(score + 1);

let string2 = Number("hello");
console.log(string2);

let result6 = String(50);
console.log(result6, typeof result6);
console.log(result6);
