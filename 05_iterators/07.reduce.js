
const myNumber  = [1,2,3]

// const totalValue = myNumber.reduce( function (acc , curVal){
//     console.log(` acc : ${acc} and curVal ${curVal}`);
//     return acc + curVal
    

//  },0)

//  console.log(" total value = ", totalValue);


 const total_Value = myNumber.reduce(  (acc , curVal)=>acc + curVal,0)

 console.log(" total value = ", total_Value);

 const ShoppingCart = [
    {
        itemName : "js",
        price : 999
    },{
        
        itemName : "python",
        price : 2990

    },{
        
        itemName : "mob dev",
        price : 4099
    }
 ]

 const toPay = ShoppingCart.reduce((acc ,item)=> acc + item.price , 0)

 console.log("total amout to pay for your course = ",toPay);
 