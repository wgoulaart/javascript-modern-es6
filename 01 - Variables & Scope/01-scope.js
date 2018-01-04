
/* Variable global escope */
var animal = 'cat global';

/* Variable block escope */
function sayAnimal(){
    var animal = 'cat sayAnimal';
    console.log(animal);
}

sayAnimal(); // cat sayAnimal,
console.log(animal);   // cat global
