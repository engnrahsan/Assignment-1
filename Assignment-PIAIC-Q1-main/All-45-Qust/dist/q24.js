"use strict";
// Tests for equality and inequality with strings
let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');
console.log("Is fruit == 'Apple'? I predict False.");
console.log(fruit == 'Apple');
// Tests using the lower case function
let message = 'Hello World';
console.log("Is message.toLowerCase() == 'hello world'? I predict True.");
console.log(message.toLowerCase() == 'hello world');
console.log("Is message.toUpperCase() == 'HELLO WORLD'? I predict True.");
console.log(message.toUpperCase() == 'HELLO WORLD');
// Numerical tests
let number = 42;
console.log("Is number == 42? I predict True.");
console.log(number == 42);
console.log("Is number != 7? I predict True.");
console.log(number != 7);
console.log("Is number > 30? I predict True.");
console.log(number > 30);
console.log("Is number < 20? I predict False.");
console.log(number < 20);
console.log("Is number >= 42? I predict True.");
console.log(number >= 42);
console.log("Is number <= 50? I predict True.");
console.log(number <= 50);
// Tests using "and" and "or" operators
let x = 10;
let y = 5;
console.log("Is x > 5 and y < 8? I predict True.");
console.log(x > 5 && y < 8);
console.log("Is x > 12 or y > 10? I predict True.");
console.log(x > 12 || y > 10);
// Test whether an item is in an array
let colors = ['red', 'blue', 'green'];
console.log("Is 'blue' in colors? I predict True.");
console.log(colors.includes('blue'));
console.log("Is 'yellow' in colors? I predict False.");
console.log(colors.includes('yellow'));
// Test whether an item is not in an array
console.log("Is 'green' not in colors? I predict False.");
console.log(!colors.includes('green'));
console.log("Is 'purple' not in colors? I predict True.");
console.log(!colors.includes('purple'));
