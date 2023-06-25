for (let i=0; i<5; i++){
    console.log(i);
}
console.log("for loop- array of numbers");
//for loop- array of numbers

let reviews: number[] = [5, 7.8 ,8 ,9 ,100.01];
for (let i=0; i<reviews.length; i++){
    console.log(reviews[i]);
}

console.log("for loop- array of Strings");
//for loop- array of Strings

let sports: string[] = ["Cricket", "TableTennis", "Hockey" , "my@email.com"];
for (let i=0; i<sports.length; i++){
    console.log(sports[i]);
}

//Simplified for loop
console.log("Simplified for loop");

let sports2: string[] = ["GUlly Cricket", "Indoor:TableTennis", "Hockey" , "my@email.com"];
for (let temp_itration_element of sports2){
    console.log(temp_itration_element); // here "temp_itration_element" is not a index, its current element itself but in genetal think of a temp variable
}

//Conditionals
console.log("Simplified for loop & Conditionals");

let sportc: string[] = ["Cricket", "Indoor:TableTennis", "Hockey" , "my@email.com"];
for (let temp_itration_element of sportc){
    if(temp_itration_element == "Indoor:TableTennis")
    console.log(temp_itration_element + "<< My Favorite");
    else
    {
        console.log(temp_itration_element);
    }
}

//Growable arrays or dynamic array
console.log("Growable arrays or dynamic array");

let animal: string[] = ["Dog", "cow", "monkey", "cat"];
animal.push("Lion"); // push to add a new value | by default will add at the end
animal.push("Tiger");
for (let temp_itration_element of animal){
    console.log(temp_itration_element); 
}
export{};//https://web.archive.org/web/20180609155906/http://fullstack-developer.academy/cannot-redeclare-block-scoped-variable-name/

const names: readonly string[] = ["Dylan"];
//names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?

/* Type Inference
TypeScript can infer the type of an array if it has values.

Example */
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
for(let ind of numbers){
    console.log(ind);
}

/* Typed Arrays
A tuple is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known type of value.

To define a tuple, specify the type of each element in the array: */

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding']; //order matter's here
// We have no type safety in our tuple for indexes 3+
console.log(ourTuple);
console.log("-------");
ourTuple.push("Something new added");
ourTuple.push("2000");
console.log(ourTuple);

//A good practice is to make your tuple readonly.

const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding  ');