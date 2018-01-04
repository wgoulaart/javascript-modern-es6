/*
  Um objeto com uma ação que não foi resolvida mas vai ser resolvida no futuro,
  uma boa opção para evitar callback hell.
  2 Métodos estaticos da promises
  - .All() : Trabalhe em cima de todas as promises que eu passar na lista,
  depois que elas forem resolvidas ai que ele vai executar o .then().
  - Race : Parecido com o método .All(), recebe uma lista com todas as promises,
  porém quando ele resolver o primeira resposta ele ignora as outras requisiçóes
*/

const currency = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({currency: 'Euro', value: 3.50})
  }, 2000)
})

const countries = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Ireland', 'England', 'Scotland'])
  },600)
})

/*
  Método All - Trabalhe em cima de todas as promises que eu passar na lista,
  depois que elas forem resolvidas ai que ele vai executar o .then()..
*/
Promise
  .all([currency, countries])
  .then(response => {
    console.log(response)
  })

/*
  Método race - Trabalhe em cima de todas as promises passadas, porém quando a
  primeira for resolvida ele à retorna e ignora as restante.
*/
Promise
  .race([currency, countries])
  .then(response => {
    console.log(response)
  })
