** primitive datatype ** 

- String 
- Number
- Boolean
- undefined
- null 
- symbol
-> eg :- const id = symbol ("123")
         const anotherId = symbol ("123")
         console.log(id === anotherId);
         output => false

- BigInt
-> eg :- cons bigNumber =  12345467897432315412498n

** Referance (Non-Primitive) **
- typeof(Non- Primitive) :- object

- Array
-> eg:- let array = ["string" , "integer" ,"GitHub"]

- Objects
-> eg:- let obj = {
                   laguage: "javascript" , 
                   object : "language"
               }

- Function 
-> eg:- const myFunction = function(){
                 console.log("hello function");
}

                                 **************************** Stack and Heap memory *******************************


- stack (primitive) 
->Stack Memory is used for storing primitive types and function calls. Each time you assign a value,
a new copy is created in the Stack.

- Heap (Non-primitive)
->Heap Memory is used for storing objects and arrays. 
Variables that reference the same object share the same location in memory, so changes to one variable affect the others
