const city = {
  live: 'Brasil',
  love: 'San Francisco'
};

// Concat string and props without Template literal
const text = 'Eu moro em ' + city.live + ' e sou apaixonado por ' + city.love + '!';

// String using Template literal
const textTemplate = `Eu moro em ${city.live} e sou apaixonado por ${city.love}!`;

console.log(text); // Eu moro em Brasil e sou apaixonado por San Francisco!
console.log(textTemplate); // Eu moro em Brasil e sou apaixonado por San Francisco!

// breaklines contact string
const fruits = 'banana'
              + '\n'
              + 'orange'
              + '\n'
              + 'apple';

// breaklines contact string using Template literals
const fruitsTemplate =
`
banana
orange
apple
`;

console.log(fruits);
/*
banana
orange
apple
*/

console.log(fruitsTemplate);
/*
banana
orange
apple
*/
