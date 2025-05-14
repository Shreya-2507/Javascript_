class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return `123${this._email} `;
    }

    set email(newEmail) {
        this._email = newEmail;
    }

    // this password access by the accesot through the some security such as the actual password concatinate with some string
    // this is the getter method

    get password() {
        return `${this._password}la la la `;
    }

    //  in setter password set or save in database without any security means password save in dataabase abc@ without security la la la which is in getter
    // this is the setter method

    set password(newPassword) {
        this._password = newPassword;
    }
}

const user = new User("s@shreya.in", "abc@");
console.log(user.password);
console.log(user.email);
