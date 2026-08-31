// Assignment 1
let color = "black" //my fav color
let height = 176 //height
let likePizza = true //I like pizaa or not. Yes - true, No - false.

console.log(color, height, likePizza)

// Data Types:
let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array

// Operators:
let sum = 10 + 5;          // Arithmetic operator
let isEqual = (10 === 10); // Comparison operator
let isTrue = (true && false); // Logical operator


// FUNCTIONS
function greet(name){
    return `Hello ${name}`
}

console.log(greet("Ayushmaan Shukla!"))

// Assignment 2: Write a function sum that finds the sum of two numbers.

function sumFunction(a, b){
    return a + b;
}
console.log(sumFunction(2,5))

// Assignment 3: Write a function called canVote that returns true or false if the age of a user is > 18.

function canVote(age){
    if(age >= 18){
        return true
    } else {
        return false
    }
}

console.log(canVote(7))


// CONDITIONALS (if-else)
    let age = 18
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Assignment 4: Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

let checkNumber = 12
if(checkNumber%2 == 0){
    console.log("Number is even")
} else {
    console.log("Number is odd")
}


// LOOPS
for(let i=0; i<=5; i++){
    console.log(i)
}

// - Assignment 5 - Write a function called sum that finds the `sum` from 1 to a number

function sumAll(n){
    for(let i=0; i<=n; i++){
        console.log(i+n)
    }
}
sumAll(5)

// COMPLEX TYPES

// OBJECTS: An object in JavaScript is a collection of key-value pairs, where each key is a string and each value can be any valid JavaScript data type, including another object.

let employeeData = {
    name: "Ayushmaan Shukla",
    age: 23,
    city: "Kanpur, UP",
    role: "Accountant",
    salary: 22000
}

console.log(`${employeeData.name} role is ${employeeData.role} and his/her salary is ${employeeData.salary}`)

// Assignment #6 - Write a function that takes a `user` as an input and greets them with their name and age


function greetUser(user){
    return `Hello ${user.name}-${user.age}!`
}

let user = {
    name: "Ayushmaan Shukla",
    age: 23
}

console.log(greetUser(user))


// Assignment #7 - Write a function that takes a new object as input which has `name` , `age`  and `gender` and greets the user with their gender (Hi `Mr/Mrs/Others` harkirat, your age is 21).
// Assignment #8 -  Also tell the user if they are legal to vote or not


function greetUser2(object1){
    if(object1.age >= 18){
        return `Hi Mr/Mrs/Others ${object1.name}, your age is ${object1.age} and you can vote.`;
    } else {
        return `Hi Mr/Mrs/Others ${object1.name}, your age is ${object1.age} and you cannot vote.`;
    }
}

let object1 = {
    name: "Ayushmaan",
    age: 23,
    gendre: "Male"
}

console.log(greetUser2(object1))



// ARRAYS: Arrays let you group data together

const users = ["harkirat", "raman", "diljeet"];
const tatalUsers = users.length;
const firstUser = users[0];


 -//  Assignment 9 - Write a function that takes an array of numbers as input, and returns a new array with only even values.

function evenNumbers(arr){
    return arr.filter(num => num%2==0)
}

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(evenNumbers(numbers))


// ARRAY OF OBJECTS: We can have more complex objects, for example an array of objects

const objectOfUsers = [{
		name: "Harkirat",
		age: 21
	}, {
		name: "raman",
		age: 22
	}]

const user1 = users[0] 
const user1Age = users[0].age


// - Assignment 10 - Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

let usersObject = [{
		name: "Harkirat",
		age: 25
	}, {
		name: "vimal",
		age: 14
	},{
		name: "ayush",
		age: 22
	},{
		name: "raj",
		age: 17
	},{
		name: "deepak",
		age: 26
	},{
		name: "raman",
		age: 15
	}]



function users3(arr){
    return arr.filter(usersObject => usersObject.age>=18)
}

console.log(users3(usersObject))


// OBJETCS OF OBJECTS: We can have an even more complex object (object of objects)

const user9 = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}


// - Assignment 11 - Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

let usersObject2 = [{
		name: "Harkirat",
		age: 25,
        gender: "Male"
	}, {
		name: "Anshika",
		age: 14,
        gender: "Female"
	},{
		name: "ayush",
		age: 22,
        gender: "Male"
	},{
		name: "Raj",
		age: 22,
        gender: "Male"
	},{
		name: "Bhoomi",
		age: 21,
        gender: "Female"
	},{
		name: "raman",
		age: 15,
        gender: "Male"
	}]

function func1(arr){
    return arr.filter(usersObject2 => usersObject2.age >= 18 && usersObject2.gender == "Male")
}

console.log(func1(usersObject2))