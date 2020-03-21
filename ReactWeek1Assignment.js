class Student {
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students=[]){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    RegisterStudents(student){
        if(this.students.includes(student)){
            console.log("Already Registered")
        }
        else{
            this.students.push(student)
            console.log('registering ${student.email} to the bootcamp ${this.level}.');
        }
        return this.students

    }

}


const Nucamp = new Bootcamp("Nucamp", "react");
const Nucamp2 = new Bootcamp("Other", "js");

const mike = new Student("mike", "mikeflynn@gmail.com", "Detroit");
const mike = new Student("mike", "mikeflynn@gmail.com", "Detroit");

Nucamp.registerStudent(mike);

Nucamp.registerStudent(mike);
Nucamp.registerStudent(mike);
console.log(Nucamp)

