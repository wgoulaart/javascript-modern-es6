// ES5
function oldHello(name, surname) {
  name = name || 'Yuri'
  surname = surname || 'da atencao'

  console.log(`Hello ${name} ${surname}! How are you?`);
}

// ES6 - Default Parameters
function hello(name = 'William', surname = 'Goulart') {
  console.log(`Hello ${name} ${surname}! How are you?`);
}

oldHello();
hello();
