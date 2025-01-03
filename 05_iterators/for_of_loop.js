// for of loop

let country = ["India" , "America" ,"Ingland","Russia"]

for (const val of country) {
    console.log(val);
    
    
}

// for of with string

let greeting = "hello , javascript"

// for (const greet of greeting) {
//     if (greet = "") {
//         continue;
    
//     }
//     console.log(`char of string : ${greet}`);
    
    
// }

// Maps
const map = new Map()                   // unique key container
map.set('IN'," India")
map.set('Br',"Brazil")
map.set('Au',"Australia")
map.set('UK',"United Kingdom")

// console.log(map);

for (const key of map) {
    console.log(key);
    
    
}
for (const [key,value] of map) {
    console.log(key ,':-',value);
    
    
}

const object = {
    game : "PUBG",
    Anime : "Solo leveling"
}

// for of loop not working on object 

// for (const [key,value] of object) {
//      console.log(key,value);
     
// }
