/*
  Um objeto com uma ação que não foi resolvida mas vai ser resolvida no futuro,
  uma boa opção para evitar callback hell.

  2 parametros:  Resolve & Reject
  Resolve: Vai resolver a sua ação
  Reject: Vai rejeitar a sua ação

  Promise é boa para trabalhar com coisas assincronas.
*/

var defer = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('Hello! It works!')
    } else {
      reject('Error!')
    }
  }, 2000)
})

/*
  .then() - "Então" - Quando finalizar faça alguma coisa!
  .catch() - Quando finalizar faça alguma coisa!
*/
defer
  .then((data) => {
    console.log(data)
    return 'foo'
  })
  .then((data) => console.log(data)) // pega o retorno do .then() acima e passa como o parametro 'data'
  .catch((err) => console.log(err))
