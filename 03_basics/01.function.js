function addTwoNumbers(num1 , num2 , num3){

    // console.log("addition of two number " , num1+num2);
    return num1 + num2 + num3 
    
}
console.log("addition of numbers = ",addTwoNumbers(4,9,6)  )              // addTwoNumbers --> fun call , () fun execution

function subTwoNumber (num1 , num2){
    let result = num1 - num2
    return result
}

result = subTwoNumber(9,5)
console.log("result of subtraction = " , result);

function loginUserMessege(username = "git"){
    if(!username ){
        console.log("Enter your username : ");
        return   
    }
    return(`${username} just logged in`)
}

console.log(loginUserMessege("devil"));
console.log(loginUserMessege(" "));
console.log(loginUserMessege());


// ... --> rest operator in this case     ||   or in before case that is spred  opreator
function calculateCartPrize(...num1){
    return num1

}

console.log(calculateCartPrize(200 , 40 , 60 ,70 ,7));

function checksValueContainer(val1 , val2 , ...num1){
    return num1
}

console.log(checksValueContainer(450,600,7000,800,32,90,67));
// start 2 value contains val1 and val2


let user = {
    username:"devil430",
    prize : 300
}

function object (anyobject){
     console.log(`Username is ${anyobject.username} and the prize is ${anyobject.prize}.. `)   
}

object(user)

const meArr = ["abc", 12 , 13]

function arrayContainer(getArray){
    return getArray[1]
}
console.log(arrayContainer(meArr))