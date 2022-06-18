/**
 * TODO: This exercise shows how to use:
 * @method prompt() to get a user input,
 * @method console.log() and
 * @method console.table() to show the result into de console browser.
 *
 * * Also, shows how to create an object and define object properties.
 */

// Defining and Loading variables values from user using prompt()
let nname = prompt("Enter a name: ", "José");
let nage = prompt("Enter your age: ", "54");

// Defining object user
var user = {
  name: nname,
  age: nage,
};

// Displaying user information using console.log()
console.log("Hello " + nname + ", you are " + nage + " years old.");

// Displaying user information using console.table()
console.table(user);
