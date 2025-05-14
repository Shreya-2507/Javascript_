class student{
    constructor (name , roll_no , gpa){
        this.name = name
        this.roll_no = roll_no
        this.gpa = gpa
    }

    studentDetail(){
        console.log([this.name , this.roll_no , this.gpa])
    }
}

class Course extends student{
    constructor(name , roll_no , gpa , course){

         super(name , roll_no , gpa)
         this.course = course
    }
    

    studentDetail(){
        console.log([this.name , this.roll_no ,this.gpa , this.course])
    }

}

const data = new Course("shreya" , "CS4690", 9 ,"BSC(CS)")
data.studentDetail()

// const detail = new Course("BSC(CS)")
// detail.studentDetail()