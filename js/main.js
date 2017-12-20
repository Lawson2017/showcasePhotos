$(document).ready(function(){
	$(".navBar").fadeIn(500);
	$(".greeter").fadeIn(500);
})







// Determine what variable type each one is:

// var testOne = "What kind of variable is this?";
// var testTwo = 256;
// var testThree = ["What", "kind", "of", "variable", "am", "I?"];
// var testFour = false;
// var testFive = [1, 2, 5];
// var testSix = 128;
// var testSeven = "What am I?"
// var testEight = true;
// var testNine = ["What kind of variable is this?", 2, 5, 19];


// Concatenation (combining things in JavaScript):
// Given these variables
// var string1 = "Hello "; 
// var string2 = "my name is "; 
// var string3 = "your name here"; 
// var combinedStrings = string1 + string2 + string3;

// What do you expect the console message to be?

// console.log(combinedStrings);


// Given these variables
// var num1 = 8; 
// var num2 = 52; 
// var num3 = 60; 
// var combinedNumbers = num1 + num2 + num3;

// What do you expect the console message to be?

// console.log(combinedNumbers);


// Given these variables
// var mixedNum1 = 10; 
// var mixedString1 = "ten"; 
// var mixedNum2 = "10"; 
// var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;

// What do you expect the console message to be?

// console.log(mixedConcatenation);


// If / Else If / Else - Checking for True or False
// Given these variables
// var num4 = 5; 
// var num5 = 0;

// What do you expect the console message to be?

// if (num4 > 1) { 
// console.log("Num4 is greater than 1"); 
// } else { 
// console.log("Num4 is NOT greater than 1"); 
// };


// Given these variables
// var num4 = 5; 
// var num5 = 0;

// What do you expect the console message to be?

// if (num4 < num5 || num4 === num5 && true) { 
// console.log("If statement ran!"); 
// } else { 
// console.log("Else statement ran"); 
// };


// Given these variables
// var num4 = 5; 
// var num5 = 0;

// What do you expect the console message to be?

// if (num4 < num5 || num4 === num5) { 
// console.log("If statement ran!"); 
// } else if (num5 === "0" || true) { 
// console.log("Else if statement ran"); 
// } else { 
// console.log("Else statement ran"); 
// };


// Given these variables
// var num4 = 5; 
// var num5 = 0;

// // What do you expect the console message to be?

// if (num4 > num5 && num4 === num5) { 
// console.log("If statement ran!"); 
// } else if (num5 === "0" || true) { 
// console.log("Else if statement ran"); 
// } else { 
// console.log("Else statement ran"); 
// };




// For Loop - Looking into Arrays
// Given this variable
// var array1 = ["this", "is", "an", "array", "of", "strings"];

// // What do you expect the console message to be?

// for (var i = 0; i < array1.length; i = i + 1) { 
// console.log(i, array1[i]); 
// };


// Given these variables
// var array2 = [1, 3, 5, 7, 9]; 
// var total = 0;

// What do you expect the console message to be?

// for (var i = 0; i < array2.length; i = i + 1) { 
// total = total + array2[i]; 
// }; 
// console.log(total);


// Given this variable
// var array3 = [11, 33, 55, 77, 99];

// What do you expect the console message to be?

// for (var i = 0; i < array3.length; i = i + 1) { 
// if(array3[i] >= 55 || array3[i] <= 100){ 
// console.log(array3[i]); 
// }; 
// };




// Functions - making things happen
// Given this function
// function testStuff (a, b) { 
// if(a > 25 && b < 100){ 
// console.log(a + " is greater than 25 and " + b + "is less than 100"); 
// } else { 
// console.log(a + " is NOT greater than 25 or " + b + "is NOT less than 100"); 
// }; 
// };

// What do you expect the console message to be for each?

// testStuff(10, 101); 
// testStuff(26, 99); 
// testStuff(100, 25);

// Given this function
// function testStuff2(c, d) { 
// if(c == 25){ 
// console.log(c + " is equal to 25"); 
// } else if(d <= 100){ 
// console.log(d + " is less than or equal to 100"); 
// } else { 
// console.log("Neither if or else if statement ran"); 
// }; 
// };

// // What do you expect the console message to be?

// testStuff2(26, 101); 
// testStuff2(25, 99); 
// testStuff2(102, 24);










// var myArray = ["evan", "ko", "James", "emily", "samson"]
// var myString = "hello world"

// document.write("the iron giant is awesome")
// var firstName = prompt("What's your first name?")
// var lastName = prompt("What's your last name?")

// console.log(firstName + " " + lastName)

// if(8>0) {
// 	console.log("run this code")
// } else if(-8 > 0) {
// 	console.log("don't run this code")
// } else {
// 	console.log("shit")
// }

// var students = ["an", "jo", "ed"]

// for(var i = 0; i <= students.length; i = i + 1){
// 	console.log(students[i]);
// }

// for(var i=0; i<=100; i=i+3.5){
// 	console.log(i)
// }


// function add(a, b) {
// 	return a + b
// }
// console.log(add(2,2));


// var greeting = 'hello'
// function greet() {
// 	console.log(greeting);
// }

// var greeting = 'hola';

// greet();

// var myString = "you shall not pass";
// var vowels = ['a', 'e', 'i', 'o', 'u']
// for(i=0; myString.length; i++) {
// 	if(vowels.indexOf(myString[i]) > -1) {
// 		console.log(i);
// 	}
// }


// Create a function, which takes an array of numbers as an argument, and returns the greatest number in the array

var testArray = [101, 556, 33, 9, 708]

function largestNumber(numArray){
var greatest = 0;
for(var i = 0; i <= testArray.length ; i++){ 	
	if(numArray[i] > greatest){
		greatest = numArray[i]; 
  }

}
return greatest;
}









