// JavaScript Basics Assessment
// ===========================>>Follow the instructions for each task and complete the code.<<=====================================

// Task 1: Comment Your JavaScript Code
// Write a single-line comment below this line:

// Task 2: Declare JavaScript Variables
// Declare a variable named `myName`:
myName = "phea";

// Task 3: Storing Values with the Assignment Operator
// Assign the value "JavaScript" to a variable named `myLanguage`:
var myName;
let myLanguage = "JavaScript";
// Task 4: Assigning the Value of One Variable to Another
// Declare a variable named `a` with the value 5, and another variable `b`. Assign `a` to `b`:
a = 5;
b = a;
// Task 5: Initializing Variables with the Assignment Operator
// Declare and initialize a variable named `myAge` with the value 25:

// Task 6: Declare String Variables
// Declare a string variable named `greeting` and set it to "Hello, World!":
let greeting = "Hello, World!";

// Task 7: Understanding Uninitialized Variables
// Declare three variables `x`, `y`, and `z` without assigning values. Then, assign values 1, 2, and 3 to them:

let x, y, z; // Declare variables without assigning values

x = 1;
y = 2;
z = 3;

// Task 8: Understanding Case Sensitivity in Variables
// Fix the variable names to follow case sensitivity:
// let StUdEnTnAmE = "John";
// let sTuDeNtAgE = 20;

let STUDENTNAME = "Jonh";
let STUDENTAGE = 20;

// Task 9: Explore Differences Between the var and let Keywords
// Declare a variable using `var` and another using `let`. Show the difference in scope (use a block of code to demonstrate):
// Using var

  if (true) {
    var x = 10; 
  }
  console.log(x); 
}

exampleVarScope(); 
function exampleLetScope() {
  if (true) {
    let y = 20;
  }
  console.log(y);
}

exampleLetScope();

// Task 10: Declare a Read-Only Variable with the const Keyword
// Declare a constant variable `PI` and assign it the value 3.14:
