// for

for (let i = 0; i < 10; i++) {
    
    console.log(`for loop ${i}`);   
    
}

// inner loop

for(let i = 1; i<=10; i++){

    console.log(`outer loop =  ${i}`);

    for(let j=1 ; j<=3 ; j++){

        console.log(`inner loop ${j}`);
        
    }   
}

// with condition 

for(let i = 0; i<10 ; i++){
    if (i==5){
        console.log(`${i} is a famous number`);    
    }
    console.log(i);
    
}

// with array

let rainbow_color = ["Red","yellow","orange","blue","purple","indigo","green"]

for (let index = 0; index < rainbow_color.length; index++) {
    
    const element = rainbow_color[index];
    console.log(element);
       
}

// break condition

for(let index = 1; index <= 20; index++){
     if(index == 5){
         console.log(`Detected 5 `);
        break;
     }
    console.log(`Value of loop : ${index}`);
   
        
}

console.log("\n******************************\n");

// continue condition
for(let index = 1; index <= 20; index++){
    if(index == 5){
        console.log(`Detected 5 `);
       continue;
    }
   console.log(`Value of loop : ${index}`);
   
       
}
