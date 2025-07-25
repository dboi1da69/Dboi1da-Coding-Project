// PRIMITIVE DATA TYPE
let name = "Adebayo Koka"    // String
let age = 25;                // age
let isStudent = true;        // Boolean
let job = null;              // Null
let salary;                  // Undefined
let bigNumber = 123456789n;  // BigInt
let id = Symbol("id");       // Symbol

// NON-PRIMITIVE DATA TYPE
let bioData = {
    fullName: "Diamond Newton Ugo",
    age: 16,
    email: "diamondnewton@gmail.com",
    Qualification: "SSCE"
}
let myName = bioData.fullname;
let myAge = bioData.age;


let person = { name: "Bob" , age: 30 };   // Object

let studentNames = ["Diamond Great", "Philip Bayo", "Emmanuel Ijesu", "Lawal Elizabeth"];   // Array

console.log(studentNames[0]);    // Array Output


let numbers = [1, 2, 3];      // Array

function greet() {
    console.log("Hi!");
}