/*
  .find() - Procura um dado dentro de um array e retorna primeiro valor
  .findIndex() - Procura um index dentro de um array

  PS: Diferente do .filter() ele retorna o primeiro valor encontrado,
  retorna apenas o valor não true ou false..
*/

// Array Example
const sampleArray = [4, -5, 0, 1]

// .find(Equação com retorno)
const underZero = sampleArray.find((item) => item < 0)
console.log(underZero) // -5

// .findIndex(Equação)]
const underZeroIndex = sampleArray.findIndex((item) => item == 0)
console.log(underZeroIndex) // 2


// Simulação de dados vindo de uma API ou array complexos
const data = [
  {
    name: 'William',
    age: 23,
    city: 'Campo Grande'
  },
  {
    name: 'Well',
    age: 29,
    city: 'Maranhão'
  }
]

const personName =  data.find((person) => person.name === 'Well')
const personNameIndex =  data.findIndex((person) => person.name === 'Well')
console.log(personName) // { name: 'Well', age: 29, city: 'Maranhão' }
console.log(personNameIndex) // 1
