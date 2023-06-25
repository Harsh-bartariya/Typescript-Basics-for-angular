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
console.log("checking pull");
//if properties are private then how to access them,
var Aadhar = /** @class */ (function () {
    function Aadhar() {
    }
    //for accessing those private properties, use getters/setters method 
    Aadhar.prototype.get_details = function () {
        return this.aadhar_no;
    };
    Aadhar.prototype.set_details = function (x) {
        this.aadhar_no = x;
    };
    Aadhar.prototype.get_multiple_details = function () {
        return [this.aadhar_no, this.aadhar_name];
    };
    Aadhar.prototype.set_multiple_details = function (x, y) {
        this.aadhar_no = x;
        this.aadhar_name = y;
    };
    return Aadhar;
}());
var myAadhar = new Aadhar();
myAadhar.set_details("908979389883938");
console.log(myAadhar.get_details());
console.log("---from multiple args method---wo chla nhi to, array bna ke return krwa lia");
myAadhar.set_multiple_details("909093029892389", "Typescript");
console.log(myAadhar.get_multiple_details());
//instead of getters/setters typescript itself provides *Accessors*
var Magic = /** @class */ (function () {
    function Magic() {
    }
    Object.defineProperty(Magic.prototype, "name_details", {
        get: function () {
            return this.fname;
        },
        set: function (value) {
            // note: no return type here, not even void
            this.fname = value;
        },
        enumerable: false,
        configurable: true
    });
    return Magic;
}());
var magic = new Magic();
magic.name_details = "coder"; //behind the scene this will call the set method 
console.log(magic.name_details); // behind the scene this will call the get method
