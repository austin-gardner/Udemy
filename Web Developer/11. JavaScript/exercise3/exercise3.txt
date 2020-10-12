
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

// var firstNumber = Number(prompt("Enter first number:"));
// var secondNumber = Number(prompt("Enter second number:"));
// var sum = firstNumber + secondNumber;
// alert("The sum is equal to: " + sum);

// BONUS: Make a program that can subtract, multiply, and also divide!

var firstNumber = Number(prompt("Enter first number:"));
var secondNumber = Number(prompt("Enter second number:"));
var operation = prompt("What operation should I perform (add, subtract, multiply, or divide)?");
var calculation;

switch(operation) {
    case "add":
        calculation = firstNumber + secondNumber;
        alert(firstNumber + " + " + secondNumber + " = " + calculation);
        break;
    case "subtract":
        calculation = firstNumber - secondNumber;
        alert(firstNumber + " - " + secondNumber + " = " + calculation);
        break;
    case "multiply":
        calculation = firstNumber * secondNumber;
        alert(firstNumber + " * " + secondNumber + " = " + calculation);
        break;
    case "divide":
        calculation = firstNumber / secondNumber;
        alert(firstNumber + " / " + secondNumber + " = " + calculation);
        break;
    default:
        alert("Error, that operation is invalid!");
}