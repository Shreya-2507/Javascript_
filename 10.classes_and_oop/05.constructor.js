// ES6

class User {

    constructor  (username , password , email ){
        this.username = username
        this.password = password
        this.email = email 

    }

    encryptPassword(){
           return `${this.password}1av3`
    }
};


const username = new User("shreya" , "123ded" , "123@gmail.com")
console.log("name of the user is",username.encryptPassword())


// behind the scene 


function user  (username , password){
    this.username = username
    this.password = password
    
}

user.prototype.encryptPassword = function(){
    return `${this.password}1av3`
}

const password = new  user("ghost" , "12890x")
console.log(password.encryptPassword());
