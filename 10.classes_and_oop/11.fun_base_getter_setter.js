function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function () {
            return `123${this._email} `;
        },

        set: function (value) {
            this._email = value;
        },
    });

    Object.defineProperty(this, "password", {
        get: function () {
            return `${this._password}.toUpperCase()`;
        },

        set: function (value) {
            this._password = value;
        },
    });
}

const passwordsetting = new User("mnb@.in", "string");
console.log(passwordsetting.password);
console.log(passwordsetting.email);
