/*
  Symbol - É um novo tipo primitivo, tipo Array, String...
  Caracteristicas: É Imutavel e Unico.
  Unico pq ele cria um identificador tipo um hash...

  Vantagens: Criar objetos e criar propriedades com Symbols, evitando
  conflitos com valores e names..

  Utilização - `Symbol('description')`
*/

let firstSymbol = Symbol('description')
console.log(firstSymbol) // Symbol(Descrição)

// Imutavel e Unico
let foo = Symbol('name')
let bar = Symbol('name')

console.log(foo == bar, foo === bar) // false false


// Objeto com properties using Symbols
let person = {
  [Symbol('name')]: 'William',
  [Symbol('age')]: '23',
  city: 'Campo Grande'
}

/*
  O método `Object.keys()` retorna um array de propriedades enumeraveis de um
  determinado objeto, na mesma ordem em que é fornecida.
*/
console.log(Object.keys(person)) // [ 'city' ]


// Pegando só as propriedades Symbols
const symbols = Object.getOwnPropertySymbols(person)
console.log(symbols) // [Symbol(name), Symbol(age)]

// Iteranção dentro do Objeto Buscando as Chaves/propriedades
const data = symbols.map(sym => person[sym])

console.log(data); // [ 'William', '23' ]
