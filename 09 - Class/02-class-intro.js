/*
  Classes

  Método principal de uma classe: Constructor() {}
  Method Constructor: Responsaável por construir nossas propriedades da
  classe/objeto.

  Métodos Staticos: Não vão pra os objetos da classe
  static info() {}

  Getter & Setter
  get name(){}
  set name(){}

*/

/* Maneiras de Criar uma clase */
class Animal {
  constructor(kind, sound){
    this.kind = kind
    this.sound = sound
  }

  // Shorthand propeties: Method Hello
  hello() {
    console.log(`${this.sound} I'm a ${this.kind}!`)
  }

  // Method Static
  static info() {
    console.log('This is a class to create animals!')
  }

  // Method getter
  get name() {
    console.log('My name is William')
  }

  // Method Setter
  set nickname(nick) {
    this.nick = nick
  }
}

// Objeto de Animal
const dog = new Animal('dog', 'auau')
const cat = new Animal('cat', 'miaw')

dog.hello() // auau I'm a dog!
cat.hello() // miaw I'm a cat!
Animal.info() // This is a class to create animals!

// Set nickname
cat.name // My name is William

cat.nick = 'Will'
console.log(cat.nick) // Will
