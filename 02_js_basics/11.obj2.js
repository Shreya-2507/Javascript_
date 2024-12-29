// const tinderuser = new object()

const tinderuser = {}

tinderuser.id = "123Gst"
tinderuser.name = "Mandy"
tinderuser.isloggedin = false

// console.log(tinderuser);

const regularuser = {
    full_Name :{
        user_FullName:{
            firstName : "Shreya",
            lastName  : "Tiwari"
        }
    }
}

// console.log(regularuser.full_Name.user_FullName.firstName);
// console.log(regularuser.full_Name.user_FullName.lastName);


const user = Object.assign({},tinderuser,regularuser);
console.log(user);

// or

const user_ = {...tinderuser , ...regularuser}
console.log(user_);

// obj in array

const dataUser = [{id :"1234.Z", email : "user@github.com"} , 
                    { id :123 , name :"Gon frecces"} ,
                    {id :"123**" , greet : "Hello"}
                ]

console.log(dataUser[1].name);
console.log(dataUser[1].id);

console.log(dataUser[0].hasOwnProperty("email"));  
console.log(dataUser[1].hasOwnProperty("name"));   
console.log(dataUser[2].hasOwnProperty("greet"));  

// object-destructure
const course = {
    courseName : "js series",
    coursePrize : 0 ,
    courseInstructor : "Hitesh Choudhary"
}

console.log(course.courseInstructor)

// de-structure Method

const {courseInstructor:instructor} = course
console.log(instructor)


// json syntax
// {
//     "name":"shreya",
//     "age" : "None"
// }

//or

// [
//     {}
//     {}
// ]








