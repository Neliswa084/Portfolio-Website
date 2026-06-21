// Exercise 1: Numbers

let integerNumber = 10;
let floatingNumber = 3.14;

let addition = integerNumber + floatingNumber;
let subtraction = integerNumber - floatingNumber;
let multiplication = integerNumber * floatingNumber;
let division = integerNumber / floatingNumber;
let modulus = integerNumber % 3;
let exponentiation = integerNumber ** 2;

console.log(integerNumber);
console.log(floatingNumber);
console.log("Addition: " + addition);
console.log("Subtraction: " + subtraction);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);
console.log("Modulus: " + modulus);
console.log("Exponentiation: " + exponentiation);

// Exercise 2: Boolean and Operators

// Comparing two numbers and storing results in boolean variables
let isGreater = 15 > 10;
let isEqual = 15 === 10;
console.log(isGreater);
console.log(isEqual);

// x and y
let x = 8;
let y = 12;

console.log(x > y);
console.log(x <= y);
console.log(x === y);
console.log(x !== y);

// Logical operators
let a = true;
let b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

// Assignment operators
let p = 10;

p += 5;
console.log(p);

p -= 3;
console.log(p);

p *= 2;
console.log(p);

p /= 4;
console.log(p);

p %= 3;
console.log(p);
