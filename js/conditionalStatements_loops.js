// Exercise 1: Temperature Check

let temperature = 20;

// if else
if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// switch
switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}

// Exercise 2: Divisibility Check

let number = 6;

// if else
if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// switch
switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For Loops

// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print all even numbers between 1 and 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. Sum of all numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// 4. Print each element of array
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 5. Find the largest number
const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i];
    }
}
console.log(largest);

// Exercise 4: While Loops

// 1. Print numbers from 1 to 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 2. Print all even numbers between 1 and 20
let j = 1;
while (j <= 20) {
    if (j % 2 === 0) {
        console.log(j);
    }
    j++;
}

// 3. Sum of all numbers from 1 to 100
let sum2 = 0;
let k = 1;
while (k <= 100) {
    sum2 += k;
    k++;
}
console.log(sum2);

// 4. Print all multiples of 5 less than 50
let m = 5;
while (m < 50) {
    console.log(m);
    m += 5;
}

// Exercise 5: Do While Loops

// 1. Print numbers from 1 to 10
let n = 1;
do {
    console.log(n);
    n++;
} while (n <= 10);

// 2. Sum of all numbers from 1 to 100
let sum3 = 0;
let count = 1;
do {
    sum3 += count;
    count++;
} while (count <= 100);
console.log(sum3);

// 3. Prompt user to enter a number greater than 10
let userNumber;
do {
    userNumber = parseInt(prompt("Enter a number greater than 10:"));
} while (userNumber <= 10);
console.log("You entered: " + userNumber);

// 4. Guessing game
const secretNumber = 7;
let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    if (guess !== secretNumber) {
        alert("Wrong! Try again.");
    }
} while (guess !== secretNumber);
alert("Correct! The number was " + secretNumber);
