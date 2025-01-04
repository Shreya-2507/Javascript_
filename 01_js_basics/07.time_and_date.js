let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toISOString());

console.log(myDate.toJSON());

console.log(myDate.toLocaleTimeString())
"\n"

// in js months starts from 0 (or index 0)
let newDate = new Date(2025, 0 , 4)
console.log(newDate.toDateString());

let date = new Date(2024 , 1 , 4 , 10 , 36,4)
console.log(date.toLocaleString ());

let _date = new Date ("12-27-2024")
console.log(_date.toLocaleString('default',{weekday:"narrow"}));

// for milisecond comparison
let myTimeStamp =  Date.now()
console.log(myTimeStamp);

console.log(_date.getTime());

//  in seconds

console.log(Math.floor(Date.now()/1000))



