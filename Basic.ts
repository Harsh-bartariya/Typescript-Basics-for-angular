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
let firstName: string = "Harsh";

//Implicit - TypeScript will "guess" the type, based on the assigned value:

let IDEName = "Vscode";
let fNo = 2;
let found: boolean = true;
console.log(found);
console.log("Firstname: " + firstName + " IDEName: " +IDEName+ " fNo: " + fNo);

// use template strings -- for long string concatinations
// use backticks ` `

console.log(`Here ${firstName}  ${IDEName} `);

// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);

//  
// A common use of JSON is to exchange data to/from a web server.
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

/* Imagine we received this text from a web server:

'{"name":"John", "age":30, "city":"New York"}'

Use the JavaScript function JSON.parse() to convert text into a JavaScript object:

const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

ab ye data ek object me change ho chuka hai

*/

