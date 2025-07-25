// let fullName = prompt("Enter Your Full Name: ");
// let phone = prompt("Enter Your Phone Number: ");

// // concatenation
// let detail = "Below are my Details: " + "\n" + "\n" + "Name: " + fullName + " " + "\n" + "Phone: " + phone

// // template literals
// let detail2 = ` Below are my Details: \n Name: ${fullName} \n Phone: ${phone}`
// console.log(detail);
// console.log(detail2);

let title = "Student Information:"
console.log(title)

let user = {
    fullName: "Emmanuel Chinedu Okafor",
    age: "16",
    DOB: "August 17, 2003",
    Gender: "Male",
    Nationality: "Nigeria"
}

let myName = user.fullName
let myAge = user.age
let DateOfBirth = user.DOB
let myGender = user.Gender
let myCountry = user.Nationality

let  detail = "Full Name: " + myName + "\n" + "Age: " + myAge + "\n" + "DOB: " + DateOfBirth + "\n" + "Gender: " + myGender + "\n" + "Nationality: " + myCountry
console.log(detail)

let phone = "07040693463"
let email = "emma.okafor03@gmail.com"
let address = "No. 14, Ugochukwu Street, Independence Layout, Enugu"
let religion = "Christianity"

console.log(`More Info: \n Phone: ${phone} \n Email: ${email} \n Address: ${address} \n Religion: ${religion}`)

// OR

let detail2 = `More Info: \n Phone: ${phone} \n Email: ${email} \n Address: ${address} \n Religion: ${religion}`
console.log(detail2)

// if(confirm("Proceed?")) {
//     alert("Welcome!")
// }