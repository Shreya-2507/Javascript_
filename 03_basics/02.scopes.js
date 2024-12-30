// global scope 
var firstUser = "Good"
let secondUser = "Better"
const thirdUser = "Best"


// Block Scope 
 if(true){
    var firstUser = "Dummy"
    let secondUser = "good"
    const thirdUser = "smart"
    console.table([firstUser,secondUser,thirdUser])
 }


console.table([firstUser,secondUser,thirdUser])



// priority of accesing expression variables   -->  | var ->  block > global  | let -> global > block  | const  -> global > block

//1. let: A Block-Scoped Variable   --> Mutable 
//2. const: A Block-Scoped constant    --> Immutable referance

//3.var: A Function-Scoped Variable (Legacy) --> mutable  ,  Rarely used in modern JavaScript.

function function_Scoped() {
    if (true) {
      var value = "I am scoped to the function.";
    }
    console.log(value); // Accessible here
  }
  function_Scoped();



// Nested Scope 

function One () {

    const  userName = "Shreya"   // act as global scope

    function Two(){
        const id = 12390             // act as block scope   --> it can be accesses both the scopes

        console.log(`\nName of the given userName : ${userName}\nuserID : ${id}`);        
    }
    
     Two()
    //  console.log(id);
     console.log(userName);                 //it's only able to acces global scope (assume function One is a global scope)
        
}
One()


if (true){

    const fruit = "Apple"

    if(fruit === "Apple"){

        const color ="Red"
        console.log(`\nIt's a ${color} ${fruit}`);
        
    }
    // console.log(`\nIt's a ${color} ${fruit}`);    
}
  



// Hoisting

// Hoisting with Function Declarations

console.log(addOne(5))
function addOne(num){
    return num + 1
}

// console.log(addOne(5))



// Hoisting with Function Expressions

// console.log(addTwo(10))    --->  not working 

const addTwo = function (num){
    return num + 1
}

console.log(addTwo(10))


