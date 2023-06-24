// class Customer{
//     //properties
//     firstname: string;
//     lastname: string; //properties are public by default
//     age: number;
// }
// let first_customer = new Customer();
// first_customer.firstname = "Martin";
// first_customer.lastname = "joe";

// console.log(first_customer.firstname + "-" + first_customer.lastname);
class Student{
    //properties
    stu_name: string;
    stu_subject: string; 
    age: number;

    constructor(){
        this.stu_name = "intilized student name";
        this.stu_subject = "intilized student subject";  //typescript does not support multiple constructor
        this.age = 18;
    }
    // constructor(iname:string, isubject:string, iage:number){
    //     this.stu_name = iname;
    //     this.stu_subject =isubject;  //typescript does not support multiple constructor
    //     this.age = iage;
    // }
}
let myStudent = new Student();
console.log(myStudent.stu_name);
console.log(myStudent.stu_subject);
console.log(myStudent.age);
