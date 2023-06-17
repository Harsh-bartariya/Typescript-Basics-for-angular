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
