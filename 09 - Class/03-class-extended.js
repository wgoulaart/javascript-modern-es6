/*
  Extend Class

  `class Dog extends Animal {}`

  - Sempre utilizar o method, para carregar as propriedades da herança
  super(name)

*/

class Animal {
  constructor(name){
    this.name = name
  }
  // Shorthand propeties: Method Hello
  hello() {
    console.log(`I'm a ${this.name}!`)
  }
}

// Objeto de Animal
const elephant = new Animal('Dumbo')

console.log(elephant) // Animal { name: 'Dumbo' }
elephant.hello() //  I'm a Dumbo!


/* Extends Class */
class Dog extends Animal {
  cosntructor(name, sound){
    super(name)
    this.sound = sound
  }

  bark() {
    console.log(`${this.sound} I'm a ${this.name}`);
  }
}

const dog = new Dog('Jake', 'au au!')
dog.name // Jake
dog.bark // au au! I'm a Jake
