// let score = "33"
let score = 45
// let score = "123abc"
// let score = null
// let score = undefined
// let score = true

console.log(typeof(score))

let valueIntNumber = Number(score)
// let valueIntNumber = String(score)

console.log(valueIntNumber)                  // NaN  => not an number 
console.log(typeof valueIntNumber)
console.log(valueIntNumber) 

/* conversion 
   "33" => 33 conversion possible   but in case
   "33abc" = > not possible  => NaN 
   true => conversion => 1  , false => 0
*/

// let boolValue = 1
// let boolValue = 0
// let boolValue = ""
let boolValue = "shreya"

let booleanIsLoggedIN = Boolean(boolValue)

console.log(booleanIsLoggedIN )
console.log(typeof booleanIsLoggedIN)


/*
1 => true
0 => false 
" " => false
"shreya" => true
*/