class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'KGC'
    }
}

const student1 = new Student(12, "Shuvo");
const student2 = new Student(15, "Ria");
const student3 = new Student(14, "Barek");

console.log(student1, student2)