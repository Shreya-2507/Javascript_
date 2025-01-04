// Number

const score = 400
console.log(score)

const balance = new Number(908)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const hundreads = 10000000
console.log(hundreads.toLocaleString('en-IN'));


const preciseNum = 587.76
console.log(preciseNum.toPrecision(4));


console.log(balance.toExponential(4));


//                       *********************** Math **********************

const number = 40.8

console.log(Math.ceil(number));
console.log(Math.floor(number));
console.log(Math.round(number));
console.log((Math.min(1,2,3,3,4)));
console.log(Math.max(1,2,3,4));

 
// random otp generator  didgit - 4

console.log(Math.random());
console.log("your OTP :", Math.floor(Math.random()*10000)+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min)












