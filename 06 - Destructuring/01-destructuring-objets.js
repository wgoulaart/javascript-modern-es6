/*
  Destructuring - Permite que possamos pegar elementos, variaveis, objetos de
  forma mais facil..

  let, const { elements } = for
*/
const data = {
  name: 'William',
  lastName: 'Goulart',
  age: 23,
  blog: 'http://williamgoulart.com.br',
  social: {
    facebook: '@wgoulart',
    twitter: '@wgoulaart'
  }
}

// Get values without Destructuring
// const name = data.name
// const lastName = data.lastName
// const twitter = data.social.twitter
// const facebook = data.social.facebook
//
// console.log(name) // William
// console.log(lastName) // Goulart
// console.log(twitter) // @wgoulaart
// console.log(facebook) // @wgoulaart

// Get values using Destructuring
const {name, lastName } = data
const {twitter, facebook } = data.social

// Mudando nome da variavel
const {lastName: surname } = data

console.log(name, lastName) // William Goulart
console.log(twitter, facebook) // @wgoulaart @wgoulart
console.log(surname) // Goulart

// Chamar valor default caso não possua em `data{}`
const { city = 'Campo Grande'} = data
console.log(city);
