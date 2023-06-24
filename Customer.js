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
var Student = /** @class */ (function () {
    function Student() {
        this.stu_name = "intilized student name";
        this.stu_subject = "intilized student subject"; //typescript does not support multiple constructor
        this.age = 18;
    }
    return Student;
}());
var myStudent = new Student();
console.log(myStudent.stu_name);
console.log(myStudent.stu_subject);
console.log(myStudent.age);
