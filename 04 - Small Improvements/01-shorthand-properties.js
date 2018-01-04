/*
  Quando um objeto recebe dados de algum lugar externo (API, variavel, JSON)
  passamos para algum Object com as propriedades de mesmo nome, não é
  mais necessário atribui 'prop:value' se forem do mesmo nome!
  Exmplo: name:name , somente name resolve
*/

let firstName = 'William';
let lastName = 'Goulart'
let age = 26

// ES5
var otherPerson = {
  firstName: firstName,
  lastName: lastName,
  age: age,

  hello: function() {
    console.log('Hello');
  }
}

// ES6 - Shorthand Properties
const person = {
  firstName,
  lastName,
  age,

  hello() {
    console.log('Hello!');
  }
}

console.log(person);
person.hello();
