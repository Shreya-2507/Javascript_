const marvel_Avengers = ["IronMan" , "CaptainAmerica" , "BlackWidow","Thor"]
const dc = ["superman" , "Batman","flash"]

// marvel_Avengers.push(dc)
// console.log(marvel_Avengers)

//concat method
// const avDc = marvel_Avengers.concat(dc)
// console.log(avDc);

//spread method
const team = [...marvel_Avengers , ...dc]
console.log(team);


const arrayWithSubarr = [1,2,3,[4,5,6],[7,8,[9,10]]]
console.log(arrayWithSubarr.flat(1));
console.log(Array.isArray(team));


// conversion of string in  array
const newArr = Array.from("shreya") 
console.log(newArr)

// confirms given object  is array or not
console.log (Array.isArray(newArr));

// In this scenario you cannot directly able to do conversion  -->> Imp || , you can do this process in two parts firstly convert key in array ,
// secondly it's value.. 

//console.log(Array.from({name : "shreya"}));



// 1st example :

const obj = { a: 1, b: 2, c: 3 };
const valuesArray = Object.values(obj);
console.log(valuesArray); 
const keysArray = Object.keys(obj);
console.log(keysArray); 


// 2nd Example :
let arrayLike = { 0: "apple", 1: "banana", length: 2 };
let array_ = Array.from(arrayLike);
console.log(array_); 


// 3rd Example
let array_Like = { 0: "apple", 1: "banana", length: 2, name: "fruit" };
let array = Object.entries(array_Like);
console.log(array);



let score1 = 100
let score2 = 200
let score3 = 300


// array creation method --->> from , of .
console.log(Array.of(score1 , score2 , score3));











