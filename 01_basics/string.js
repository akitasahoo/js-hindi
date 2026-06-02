const name = "Ankita"
const repoCount = 50

//console.log(name  +  repoCount + " value"); 

console.log('hello my name is ${} and my repo  count is ${repoCount}'); //hello my name is ${} and my repo count is ${repoCount}

const gameName = new String('ankuuu')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));


const newString = gameName.substring(-8,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);