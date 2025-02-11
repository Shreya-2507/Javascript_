const promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("promise one is completed");
        resolve()
        
    },1000)
})
promiseOne.then(function(){
    console.log("promiseOne resolved");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("promise 2 is completed");
        resolve()
    },1000)
}).then(function(){
    console.log("promiseTwo resolved");
    
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false  // true
        if (!error) {
            resolve({username : "shreya" , password:1234})
        } else {
            reject("ERROR : Something went wrong 😱")
        }
    } ,1000)
})

promiseThree
.then(function(user){
    console.log(user);
    return user.username})
    .then((username)=>{
         console.log(username);
         console.log("resolved ✌️");
         
})
.catch((error)=>{
    console.log(error);
    
}).finally(()=> console.log("The promise is either resolved or rejected 😁"))

const promiseFive = new Promise(function(resolve ,reject){
    setTimeout(function(){
        let error = true  //false
        if (!error) {
            resolve({name : ["shreya" , "nezoko" , "Black widow"]})
        } else {
            reject('ERROR : something wrong in js code')
        }
    },1000)
});

// async cannot be able to handle errors directly
// below code only work when probability of error should be zero

// async function consumePromise(){
//     const response = await promiseFive
//     console.log(response);
    
// }

// otherwise use this 👇

async function consumePromise(){
try {
    
    const response = await promiseFive
    console.log(response);
    
} catch (error) {
    console.log(error);
    
}
}
consumePromise()

// async function getAllUser(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
    
//    } catch (error) {
//             console.log('E :', error);
            
//    }
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data) => console.log(data))
.catch((error) => console.log(error))
