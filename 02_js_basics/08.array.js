// JavaScript arrays are resizable and can contain a mix of different data types.

const array = ['Hi' , 99 ,89,"Shreya"]
console.log(array);
console.log(array[3]);

const arr = new Array("shreya","black widow" )
console.log(arr);


// Method in array

array.push("good evening")
console.log(array);

// array.pop()
// console.log(array);

array.unshift(78)
console.log(array);

array.shift()
console.log(array);

console.log('\n**************************\n');

const newArray = array.join()
console.log(newArray);
console.log(typeof newArray);


//  slice 
console.log("A", array);

const _arr = array.slice(1,3)
console.log(_arr);
console.log(`after using slice we get [ ${array} ] in origional array`)

// Splice

console.log("B" , array);

const arr_ = array.splice(1,3)
console.log(arr_);
console.log(`after using splice we get [ ${array} ] in origional array`)







