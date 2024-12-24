const name = "shreya " 
const repo = 3

// console.log(name + repo)

//string Interpolation
console.log (`i am ${name}, and i pushed ${ repo } repsitiories. `)

// key - value pair

const newName = new String("Shreya--09")
console.log(newName[0])
console.log(newName.__proto__)

console.log( newName.length);
console.log(newName.toUpperCase())
console.log(newName.charAt(4))
console.log(newName.indexOf("e"))

console.log(newName.substring(0,8))
console.log(newName.slice( -8,5))

const newString = "           Shreya         "
console.log(newString.trim());

const url = "https://github.com%20repo"
console.log(url.replace(/%20/g, '-')); 

const Url = "https://github.com/shreya20%Tiwari";
console.log(Url.replace(/20%/g, '-'));

console.log(newName.split('-'))
consol

