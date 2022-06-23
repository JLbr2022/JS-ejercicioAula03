/**
 * TODO: This exercise shows how to use:
 * @method prompt() to get a user input,
 * @method console.log() and
 * @method console.table() to show the result into de console browser.
 * @method Number() to convert age string variable to a number variable.
 * * const to define a constant variable.
 * * let to define a variable that can be changed.
 * * Also, shows how to create an object and define the object properties.
 */

// Defining and Loading variables values from user using prompt()
let nname = prompt("Enter a name: ", "José");
let nage = Number(prompt("Enter your age: ", "54")); // Number() converts string to number

// Defining object user
const user = {
  name: nname,
  age: nage,
};

// Displaying user information using console.log()
console.log("Hello " + nname + ", you are " + nage + " years old.");

// Displaying user information using console.table()
console.table(user);
