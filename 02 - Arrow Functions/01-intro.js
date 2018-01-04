// Array Citys Ireland
const ireland = ['Dublin','Galway', 'Cork'];

// Function Anonymous
const love = ireland.map(function(name) {
  return `I love ${name}!`;
});

// Function Anonymous with Arrow Function
const loveArrow = ireland.map((name) => {
  return `I love ${name}!`;
});

// Arrow Function Single Param
const loveArrowSingle = ireland.map(name => {
  return `I love ${name}!`;
});

// Arrow Function Single Line
const loveArrowSingleLine = ireland.map(name => `I love ${name}!`);

console.log(love);
console.log(loveArrow);
console.log(loveArrowSingle);
console.log(loveArrowSingleLine);
/* [ 'I love Dublin!', 'I love Galway!', 'I love Cork!' ] */

// Using Arrow Function to filter & map
const loveChain = ireland
                    .filter(name => name === 'Dublin')
                    .map(name => `I love ${name}!`);

console.log(loveChain); // [ 'I love Dublin!' ]
