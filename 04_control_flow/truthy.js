// false value :- false , 0 , BigInt 0n , -0 , "" , null , undefined , NaN
// TRUE VALUES :- string eg:-("0".'false'etc) , " "-> space between quotes , [] , {} , function (){}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("it's empty object");
    
}

// Nullish Coalescing Operator (??)

let val1 = 5??10
val1 = null??5
val1 = undefined??10??5

console.log(val1)

// Terniary operator
// condition? true : false

let societyTeaPrice = 150

societyTeaPrice >=151 ? console.log("don't buy it's expensive") : console.log("yes , you can buy");

