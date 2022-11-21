//ex:1
console.log("I'm printing to console!");

//Ex:2
let name = prompt("Name please: ");
document.write("Hello " + name +"!");

//Ex:3
let firstNumber = parseInt(prompt("Enter 1st number: "));
let secondNumber = parseInt(prompt("Enter 2nd number: "));
let thirdNumber = parseInt(prompt("Enter 3rd number: "));
sum = firstNumber + secondNumber + thirdNumber;
product = firstNumber * secondNumber * thirdNumber;
average = (firstNumber + secondNumber + thirdNumber)/3;

document.write("The sum of three number is " + sum, "<br>");
document.write("The product of three number is " + product, "<br>");
document.write("The average of three number is " + average);