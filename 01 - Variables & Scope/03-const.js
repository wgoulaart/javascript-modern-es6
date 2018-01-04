// Constant secretNumber equals 23
const secretNumber = 23;

const will = {
  name: 'William',
  age: 24
};
console.log(will); // { name: 'William', age: 24 }

// variavel imutavel
// Object.freeze(will); // Congelar propriedades
// console.log(will); // { name: 'William', age: 23 }

// Modificando valores do conts (propriedades)
will.age = 23;
console.log(will); // { name: 'William', age: 23 }
