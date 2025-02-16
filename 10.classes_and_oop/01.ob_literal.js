const user = {
    Username: "devil-AI",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        console.log("obj literal done ");
        console.log(`username : ${this.Username}`);
        console.log(this);
    },
};

console.log(user.Username);
console.log(user.getUserDetails());

// constructor --> it is always gives new instance and stops overwrite problem

function User(username, loginCount, isLoggedIn) {
    (this.username = username),
        (this.loginCount = loginCount),
        (this.isLoggedIn = isLoggedIn);

    return this;
}

const userOne = new User("shreya", 2, true);
const userTwo = new User("devil", 2, true);
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);

// learn about insatnceof
