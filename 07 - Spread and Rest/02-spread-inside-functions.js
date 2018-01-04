/*
  Spread Operator dentro de Funções - Server para desmembrar quaisquer elemento elementos iteraveis [array, string] e
  desmembrando em pequenos pedaços

  Sintax : ...
*/

function makeSandwich(bread,cheese, sauce) {
  console.log(`You Sandwich with ${bread} bread, ${cheese} cheese and ${sauce} is done!`);
}

let ingredients = ['white', 'cheedar', 'barbecue']
makeSandwich(...ingredients)
