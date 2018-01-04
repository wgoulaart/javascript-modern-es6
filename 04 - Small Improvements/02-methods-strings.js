let text = 'Lorem ipsum dolor sit amet xpto'

/*
  Starts With = Inicia com '', retorna true or false..
  .startsWith('Lorem') ou .startsWith('Lorem', 3)
*/
console.log(`.startsWith('Lorem'): ` + text.startsWith('Lorem'));
console.log(`.startsWith('rem', 2): ` + text.startsWith('rem', 2));

/*
  Ends With = Termina com '', retorna true or false..
  .endsWith('Lorem') ou .endsWith('Lorem', 3)
*/
console.log(`.endsWith('amet'): ` + text.endsWith('amet'));
console.log(`.endsWith('amet', 25): ` + text.endsWith('amet', 26));


/*
  includes(''), vertifica se o param contem na string e retorna true or false..
  .includes('ipsum')
*/
console.log(`.includes('ipsum'): ` + text.includes('ipsum'));

/*
  Repeat param n vezes a repeticao
  .repeat(20);
*/

let laugh = 'kkk';
console.log(laugh.repeat(3));
