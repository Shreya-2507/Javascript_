const dscriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(dscriptor);

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const obj = {
    name: "shreya",
    changeable: true,
    learning: "descriptors",

    objdarkSide: function () {
        console.log("code phat gya handle krna padega");
    },
};

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// if i enumerable property write false so it stops iteration of name and print remaining properties --> its metoh to prevent iteration

// {
//   value: 'shreya',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.defineProperty(obj, "name", {
    writable: false,
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// {
//   value: 'shreya',                                              ---> output
//   writable: false,
//   enumerable: false,
//   configurable: true
// }

for (let [key, value] of Object.entries(obj)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
}

// changeable : true
// learning : descriptors

// In JavaScript, a descriptor is an object that describes a property on another object — including its behavior like whether it can be changed, enumerated, or accessed in a certain way.

// Descriptors are mainly used with:

// 👉 Object.defineProperty()
// This method allows you to define or modify a property directly and control its behavior using a descriptor.

// 🔍 There are two types of descriptors:
// 1. Data Descriptor – describes a property with a value
// 2. Accessor Descriptor – describes a property with a getter/setter function
