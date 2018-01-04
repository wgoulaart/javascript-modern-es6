// Hoisting
console.log(cat); // Undefined
var cat = 'meow';

// ReferenceError ... dont Hoisting
console.log(cat); // cat is not defined
const cat = 'meow';
let cat = 'meow';
