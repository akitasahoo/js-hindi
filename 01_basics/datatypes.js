//primitive

//7 primitive data types:
//string
//number
//bigint
//boolean
//undefined
//symbol
//null

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;  

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false

const bigNumber = 9007199254740991n
console.log(bigNumber);

//Reference (Non primitive) data type:
//Array
//Object
//Function

const heros = ["Shaktiman", "Doga", "Nagraj"]
let myObj = {
    name: "Ankita",
    age: 25,
}

const muFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);//object
console.log(typeof myObj);

//https://262.ecma-international.org/5.1/#sec-11.4.3



//++++++++++++++++++++++++++++++++

//Stack (primitive) and Heap (non primitive) memory

//Primitive data types are stored in stack memory and non primitive data types are stored in heap memory.

//In stack memory, the actual value is stored and in heap memory, a reference to the value is stored.

//When we assign a primitive value to a variable, the value is stored in the stack memory. When we assign a non primitive value to a variable, a reference to the value is stored in the stack memory and the actual value is stored in the heap memory.

let myName = "Ankita"
let anotherName = myName
anotherName="Ankita Sahoo"
console.log(myName);//Ankita
console.log(anotherName);//Ankita Sahoo

let userOne = {
    email: "ueer@google.com", 
    upi: "user@ybl"
}

let userTwo=userOne
userTwo.email="userTwo@google.com"

console.log(userOne.email);//ueer@google.com
console.log(userTwo.email);//userTwo@google.com