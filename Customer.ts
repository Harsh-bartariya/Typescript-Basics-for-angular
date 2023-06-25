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
console.log("checking pull & sync");

//if properties are private then how to access them,

class Aadhar{
    private aadhar_no: string;
    private aadhar_name: string;

    //for accessing those private properties, use getters/setters method 
    public get_details(): string{
        return this.aadhar_no;
    }
    public set_details(x: string): void{
        this.aadhar_no=x;
    }
    public get_multiple_details(): [string,string]{
        return[this.aadhar_no, this.aadhar_name];
    }

    public set_multiple_details(x: string, y: string): void{
        this.aadhar_no=x;
        this.aadhar_name=y;
    }
}

let myAadhar =  new Aadhar();
myAadhar.set_details("908979389883938");
console.log(myAadhar.get_details());
console.log("---from multiple args method---wo chla nhi to, array bna ke return krwa lia");
myAadhar.set_multiple_details("909093029892389","Typescript");
console.log(myAadhar.get_multiple_details());
//instead of getters/setters typescript itself provides *Accessors*

class Magic{
    private fname: string;
    private lname: string;

     get name_details(): string{  //syntax--> get space <property> // by default access modifier type is public
        return this.fname;
    }
    public set name_details(value: string) { //syntax--> set space <property>
                                            // note: no return type here, not even void
        this.fname=value;
    }
}
let magic =  new Magic();
magic.name_details = "coder"; //behind the scene this will call the set method 
console.log(magic.name_details);// behind the scene this will call the get method

//compiler flag 
/* The get/set accessor  feature is only supported in ES5 or higher
you have to set a compiler flag in order to compile the code.

tsc --target ES5 --noEmitOnError <filename>.ts[extension]

Problem with too much compiler flags, so wouldn't it be great to set up a config file?

Typescipt has a solution: "tsconfig.json" file
this file defines compiler options and project settings
place this file in the root of your project directory

you can also generate a template one: by using command " tsc --init" generate a default tsconfig.json file
once you have tsconfig.json: no need to specify file name : tsc , this will compile all *.ts file
*/



