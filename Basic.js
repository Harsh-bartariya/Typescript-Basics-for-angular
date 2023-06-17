/*********************************************************************************** */
//TypeScript is a superset of javascript and ECMAscript
//web browers do not understand TypeScript Natively so it converts into js code and this process called:"Transpiling"
//Transpiling is accomplished with : tsc <filename.extension> : command
//then a js file will get generated like in java, so for that use : node<filename>: for output
//To install Typescript "npm install -g typescript"
/*********************************************************************************** */
console.log("Hello world! TYPESCRIPT");
console.log("Hello world!" + "TYPESCRIPT" + "concatenated");
/*********************************************************************************** */
// Datatypes [boolean, number, string, any, array, enum, tuple, any, void, never, etc...]
/* Type Assignment
When creating a variable, there are two main ways TypeScript assigns a type:[ Explicit | Implicit ]
1.Explicit- - writing out the type:
*/
var firstName = "Harsh";
//Implicit - TypeScript will "guess" the type, based on the assigned value:
var IDEName = "Vscode";
var fNo = 2;
var found = true;
console.log(found);
console.log("Firstname: " + firstName + " IDEName: " + IDEName + " fNo: " + fNo);
// use template strings -- for long string concatinations
console.log("Here ".concat(firstName, "  ").concat(IDEName, " "));
