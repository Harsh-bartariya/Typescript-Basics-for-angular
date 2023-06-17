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
animal.push("Lion"); // push to add a new value
animal.push("Tiger");
for (var _b = 0, animal_1 = animal; _b < animal_1.length; _b++) {
    var temp_itration_element = animal_1[_b];
    console.log(temp_itration_element);
}
