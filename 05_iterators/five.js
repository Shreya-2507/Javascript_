// for each doesn't return any item  
// Example :-

const Editor = ["vscode","programiz","GFG"]

const values = Editor.forEach((item)=>{
    //console.log(item);
    return item
    

})
// console.log(values); it not works --> undefined means doesn't return for each loop

const numArray = [1,2,3,4,5,6,7,8,9,10]

const containerArray = numArray.filter((num)=>{
    
    return num > 4
})
console.log(containerArray);

const newNums = []
 numArray.forEach( (num)=>{
    if (num>4) {
        newNums.push(num)
        
    }
 })

 console.log(newNums);
 

const books = [
    {title : "book one" ,  genre :"Fiction" ,     publish : 1981 , edition : 2004},
    {title : "book Two" ,  genre :"Non-Fiction" , publish : 1992 , edition : 2008},
    {title : "book Three", genre :"History" ,     publish : 1999 , edition : 2007},
    {title : "book Four" , genre :"Non-Fiction" , publish : 1989 , edition : 2010},
    {title : "book Five" , genre :"Science" ,     publish : 2009 , edition : 2014},
    {title : "book Six" ,  genre :"Fiction" ,     publish : 1987 , edition : 2010},
    {title : "book Seven", genre :"History" ,     publish : 1986 , edition : 1996},
    {title : "book Eight", genre :"Science" ,     publish : 1981 , edition : 2011},
    {title : "book Nine" , genre :"Non-Fiction" , publish : 1981 , edition : 1986}
    
]

let userBooks =  books.filter( (bk)=> bk.genre === "History")

userBooks = books.filter( (bk)=> {return bk.publish >= 2000})

userBooks = books.filter( (bk) =>{
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);
