// How to create Array

let studentAge = [19, 15, 24, 18, 20, 23, 17, 14, 21, 22];
console.log(studentAge);



let studentNames = ["Ansem", "Cobie", "Elon", "Unipcs", "Lyxe", "DDG", "Kai", "Logan", "Leonidas", "Jarvis"];
console.log(studentNames);



let numbers=new Array(12,23,15,56);
console.log(numbers);


// Array length
console.log(`The length is : ${studentNames.length}`);

// modfy array
studentNames[0]="Diamond";
console.log(studentNames);

// loop through array


// Array Methods
// push- to add to the end of array
// unshift- to add to the beginning of array

// pop- to remove to the end of array
// shift- to remove from the beginning of the end of array


// Add with push
studentNames.push("Cobie");
console.log(studentNames);

// Add with unshift
studentNames.unshift("Diamond");
console.log(studentNames);

// Add with shift
studentNames.shift();
console.log(studentNames);

// Add with pop
studentNames.pop();
console.log(studentNames);

// CONTROL STRUCTURES
// 1) Conditional Structure
if(studentAge.length > 10){
    alert("Too many students!");
}
else(alert("Eligible for competition!"))

// 2) Looping Structure
// i) For Loop
// for (let index = 19; index < array.length; index++) {
//     const element = array[index]; }

// ii) While Loop
let password = prompt("Enter Password");

while (password !== "lockin") {
    alert("Password Incorrect. Please try again.");
    password = prompt("Enter Password");
}
alert("Access Granted!")

