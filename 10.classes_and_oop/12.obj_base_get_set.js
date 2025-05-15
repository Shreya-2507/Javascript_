const User = {
    _email: "s@rt",
    _password: "kjh",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    },
};

const user = Object.create(User);
console.log(user.email);

// console.log(User.get());
// console.log(User.set());
