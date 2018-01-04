/*
  Heraça prototipal
*/

/*
  Função construtora - Criar propriedades com os parametros passados.
  Nossa Função que vai funcionar como "Classe" responsável criar nossos objetos
 */
function Animal(kind, sound) {
  this.kind = kind
  this.sound = sound
}

// Method interno da classe Animal, prototype do Objeto Animal
Animal.prototype.hello = function() {
  console.log(`${this.sound} I'm a ${this.kind}!`)
}

// Objeto de Animal
const dog = new Animal('dog', 'auau')
const cat = new Animal('cat', 'miaw')

dog.hello() // auau I'm a dog!
cat.hello() // miaw I'm a cat!
