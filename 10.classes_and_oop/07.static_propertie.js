// 💡 What are Static Properties?
// Static properties (and methods) are properties that belong to the class itself, not to the instances (objects created from the class).

// In simple words:

// Normal properties → used with this inside the constructor, belong to each object.
// Static properties → used with the class name, belong to the class itself.


// static stops the access of method from the user who tries to access method using instance of the given class

class Student {
  constructor(name) {
    this.name = name; // instance property
  }

  static schoolName = "Green Valley School"; // static property
}


const s1 = new Student("Shreya");

console.log(Student.schoolName);  // ✅ "Green Valley School"
console.log(s1.schoolName);       // ❌ undefined
