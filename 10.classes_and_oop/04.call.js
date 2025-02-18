function vUsername(username) {
    this.username = username;
    console.log("called");
}

function CreateUsername(username, email, password) {
    vUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const user = new CreateUsername("shreya", "123@g.com", "play_Hard");
console.log(user);
