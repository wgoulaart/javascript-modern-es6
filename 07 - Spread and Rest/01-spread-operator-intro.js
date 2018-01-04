/*
  Spread Operator - Server para desmembrar quaisquer elemento elementos iteraveis [array, string] e
  desmembrando em pequenos pedaços

  Sintax : ...
*/

let front = ['react','vue','angular']
let back = ['python','ruby','node.js']

console.log(...front) // react vue  angular
console.log(...back) // python ruby node.js

// Desmembrando uma String e transformando em um array
let name = "William"
console.log([...name]) // [ 'W', 'i', 'l', 'l', 'i', 'a', 'm' ]

// Uninco Arrays
let fullstack = front.concat(back)

// Unido Arrays com Spread
let fullstack = [...front, ...back]

console.log(fullstack) // ['react','vue','angular','python','ruby','node.js']
