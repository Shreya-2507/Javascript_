// a Singleton is a design pattern that ensures a class has only one instance and provides a global point of access to that instance.
// object literal :


const mySym = Symbol("key1")

const person = {
    name: "Shreya",
    "f_name" : "Shreya Tiwari",
    [mySym] : 2567 ,
    age: 20,
    greet: function() {
      console.log("The entire object is:", this); 
      return `Hello, ${this.name}!`;
    }
  };
console.log(person.greet());

// console.log(person.name);
// console.log(person["age"]);

// console.log(person["f_name"]);   
// console.log(person[mySym]);

// it act like push operation
person["email"] = "shreya45@gmail.com"
// console.log(person)

// update object values from the person named object
person.age = 19
// console.log(person)


// prevents the modification of existing property attributes and values, and prevents the addition of new properties.
Object.freeze(person)
person.age = 25
// console.log(person)
          



  