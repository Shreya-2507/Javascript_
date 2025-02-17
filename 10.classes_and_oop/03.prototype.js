let anime = ["solo leveling", "Demon slayer", "jjk"];

let character = {
    chinwo: "hunter",
    tanjiro: "fire sword",
    gojo: "curse power",

    intro: function () {
        console.log(`hi i am ${this.chinwo}`);
    },
};

console.log(character);
character.intro();

Object.prototype.hello = function () {
    console.log("hello everyone i am shreya !");
};

character.hello();

Array.prototype.newCharacter = function () {
    console.log(`hi i am new memeber in array zenetsu`);
};

console.log(anime);

anime.newCharacter();

//   function   ---->                        Object
//   Array      ---->                        Object     ----->> null
//   String     ---->                        Object

// prototype inheritance

const user = {
    name: "shreya",
    id: "fghj@gmail.com",
};
const Teacher = {
    naemOfTeach: "Hitesh choudhary",
};

const studentSupport = {
    isAvail: "true",
};

const TAsupport = {
    makeAssignment: "js assignment",
    __proto__: studentSupport,
};

Teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(studentSupport, Teacher);

let userr = "      shreya   ";
let random = "       randomlambda";
let anotherUsername = "shreya             ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`true lenght  is : ${this.trim().length}`);
};

anotherUsername.trueLength();
userr.trueLength();
random.trueLength();
