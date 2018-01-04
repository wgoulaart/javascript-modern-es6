/*
  Generators - É mais um tipo de iterator
  Syntax: `*` após a palavra Function

  yield = return de uma função..
*/

// Normal Function
function names() {
  console.log('William')
  console.log('Wellington')
  console.log('Geazi')
}

// Function Com Generators
function* genatorNames() {
  yield 'William'
  yield 'Wellington'
  yield 'Geazi'
}

// genName()
// William
// Wellington
// Geazi

const names = genatorNames()
console.log(names); // genatorNames {[[GeneratorStatus]]: "suspended"}
console.log(names.next()); // Iterable.. genatorNames {[[GeneratorStatus]]: "suspended"}
