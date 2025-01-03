const myObject = {
    game : "PUBG",
    Anime : "Solo leveling",
    js : "JavaScript "
}

// myObject[key] ----> use for printing values

for (const key in myObject) {
    console.log(`${key}  for ${myObject[key]}`);
    
}

// Array

const shortcuts = ["js","cpp","py","CSS","rb","HTML"]
// hera index also act as a key 
for (const key in shortcuts) {
    "\n"
    console.log(key);
    console.log(shortcuts[key]);
    
    
}

// for in loop not working on map  and not throw the any error 

// const map = new Map()                   // unique key container
// map.set('IN'," India")
// map.set('Br',"Brazil")
// map.set('Au',"Australia")
// map.set('UK',"United Kingdom")

// for (const key in map) {
//     console.log(key);
        
// }

//  --> for each loop  on callback function

let coding = ["github", "vscode","programiz","gfg"]

coding.forEach(function (val){
    console.log(val);
    
})


// for each loop on arrow function

coding.forEach((item)=>{
         console.log(item);
         
})

// 

function printme (item){
    console.log(item);
    
}

coding.forEach(printme)


coding.forEach( (item ,index,arr)=>{
    console.log(item,index,arr);
    

})

let myCoding = [{
    filename : "javascript",
    languageFileName : "js"
},
{
    filename:"python",
    languageFileName:"py"
},
{
    filename:"java",
    languageFileName:"java"
}]

myCoding.forEach((item)=>{
    console.log(item.filename);
    
})