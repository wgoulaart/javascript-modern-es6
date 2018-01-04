/*
  Array.fill() - Ele serve para preencher um array com valores.
*/
const myArray =  new Array(5)

// Vai preencher o array com "Will" em cada indice
myArray.fill('Will')
console.log(myArray); // ['Will','Will','Will','Will','Will']

// É Possivel passar 2 parametors de intervalos inicio e fim
myArray.fill('wgoulart', 1, 4)
console.log(myArray); // ['Will', 'JS', 'JS', 'JS', 'Will']
