/*
  Rest params - Similar ao Spread Operator, porém ele nos permite representar
  um número infefinido de argumentos em um array
  Sintax : ...
*/

// ES2015
function multiply(mult, arg1, arg2, arg3) {
  let arr = []
  arr.push(mult * arg1)
  arr.push(mult * arg2)
  arr.push(mult * arg3)
  return arr
}

console.log(multiply(2, 1, 2, 3)) // [ 2, 4, 6 ]

// ES6 with Rest params
function multplier(mult, ...args) {
  return args.map(arg =>  arg * mult)
}

console.log(multplier(2, 1, 2, 3)) // [ 2, 4, 6 ]
