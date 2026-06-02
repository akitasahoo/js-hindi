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