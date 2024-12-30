// Imedietely Invoked Function Expression

// Named IIFE
(function division(){
    console.log(20/10)
})();               // ; stopage condition for IIFE


//Unamed IIFE with => function

((num) =>{
    console.log(num**num)
})(4);