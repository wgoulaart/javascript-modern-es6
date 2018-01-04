/*
  Destructuring - Permite que possamos extrair elementos, variaveis, objetos de
  forma mais facil..

  // Swap Variables
  [a,b] = [b,a]
*/

// Swap variables withou Destructuring
let a = 13
let b = 26
let temp

// temp = a
// a = b
// b = temp

// console.log('a: ' + a) // 26
// console.log('b: ' + b) // 13

// Swap  variables using Destructuring
[a, b] = [b, a]

console.log('a: ' + a) // 26
console.log('b: ' + b) // 13
