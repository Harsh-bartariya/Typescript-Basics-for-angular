"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("for loop- array of numbers");
//for loop- array of numbers
var reviews = [5, 7.8, 8, 9, 100.01];
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}
console.log("for loop- array of Strings");
//for loop- array of Strings
var sports = ["Cricket", "TableTennis", "Hockey", "my@email.com"];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
//Simplified for loop
console.log("Simplified for loop");
var sports2 = ["GUlly Cricket", "Indoor:TableTennis", "Hockey", "my@email.com"];
for (var _i = 0, sports2_1 = sports2; _i < sports2_1.length; _i++) {
    var temp_itration_element = sports2_1[_i];
    console.log(temp_itration_element); // here "temp_itration_element" is not a index, its current element itself but in genetal think of a temp variable
}
//Conditionals
console.log("Simplified for loop & Conditionals");
var sportc = ["Cricket", "Indoor:TableTennis", "Hockey", "my@email.com"];
for (var _a = 0, sportc_1 = sportc; _a < sportc_1.length; _a++) {
    var temp_itration_element = sportc_1[_a];
    if (temp_itration_element == "Indoor:TableTennis")
        console.log(temp_itration_element + "<< My Favorite");
    else {
        console.log(temp_itration_element);
    }
}
//Growable arrays or dynamic array
console.log("Growable arrays or dynamic array");
var animal = ["Dog", "cow", "monkey", "cat"];
animal.push("Lion"); // push to add a new value | by default will add at the end
animal.push("Tiger");
for (var _b = 0, animal_1 = animal; _b < animal_1.length; _b++) {
    var temp_itration_element = animal_1[_b];
    console.log(temp_itration_element);
}
var names = ["Dylan"];
//names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
/* Type Inference
TypeScript can infer the type of an array if it has values.

Example */
var numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
    var ind = numbers_1[_c];
    console.log(ind);
}
/* Typed Arrays
A tuple is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known type of value.

To define a tuple, specify the type of each element in the array: */
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding']; //order matter's here
// We have no type safety in our tuple for indexes 3+
console.log(ourTuple);
console.log("-------");
ourTuple.push("Something new added");
ourTuple.push("2000");
console.log(ourTuple);
//A good practice is to make your tuple readonly.
var ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding  ');
