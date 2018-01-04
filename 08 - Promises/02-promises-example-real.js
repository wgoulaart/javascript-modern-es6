/*
  Um objeto com uma ação que não foi resolvida mas vai ser resolvida no futuro,
  uma boa opção para evitar callback hell.

  .fetch() = Igual ao ajax do Jquery, porém ele trabalha com promises
  Possui 3 status importantes na promisse
  - Pending: Quando ainda está acontecendo a promisse.
  - Resolved: Quando a promisse já resolveu tudo e retornou um resultado.
  - Reject: Quando ocorreu algum problema e a promisse não foi resolvida.
*/

let followers = fetch('https://api.github.com/users/wgoulart/followers')

/*
  .then() - "Então" - Quando finalizar faça alguma coisa!
  .catch() - Quando finalizar faça alguma coisa!
*/

followers
  .then((data => data.json())) // Parseando o data para JSON e retornar o mesmo
  .then(data => data.map(users => {
    console.log(users.login)
  }))
  .catch(err => console.error(err))
