const user = {
    shop : "McDonalds" ,
    prize : 999,
    
    welcomeMessege : function() {

        console.log(`Welcome , in the ${this.shop}`);
         console.log(this);                    // this --> points current context
        
    }

}


// user.shop = "PizzaHut"
// user.welcomeMessege()

  console.log(this);  // it's current context of node environment which is empty {} (object)


// Browser has windows as a current context

// function chai(){
//     const username = "sh"
//     console.log(this.username);                     // it works on object not in function 
//     console.log(this)
// }
// chai ()


const chai = function(){
    const username = "sh"
    console.log(this.username);
}
chai()
//undefined


// Arrow Function

const Arrow_fun = () => {
    const username = "sh"
    console.log(this.username);
}

Arrow_fun()
// undefined

// explicit return 

const addition = (num1 , num2) =>{
    return num1+num2
}
console.log(addition(8,9));

// Implicit return 

const product = (num1 , num2 ) => num1 * num2
console.log(product(6,7));

// OR

const product_ = (num1 , num2 ) => (num1 * num2)
console.log(product_(6,7));

// OR

const object_ImplicitReturn_ = ( ) => ({username : "shreya"})
console.log(object_ImplicitReturn_());


