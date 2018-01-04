/*
  Iterators & Iterable - Novos protocolos do javascrip que permite iterar sobre
  uma informação, em um Array, String, percorrendo cada um dos itens..

  Elementos que se pode iterar, são chamados de `Iterables`
  Syntax: ``
*/

let txt = 'Ireland' // Iterable
let it = txt[Symbol.iterator]() // Iterator

console.log( it.next() ) // { value: 'I', done: false }
// Done = false, significa que ainda tem elementos para iterar


// Iterator - OF
for(letter of txt) {
  console.log(letter);
  // if (letter === 'a') break
}
