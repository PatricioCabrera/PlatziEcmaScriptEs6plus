//ES7 includes. Trabaja sobre un arreglo o un string, nos ayuda para saber si hay elementos dentro. Antes usabamos indexOf.
let numbers = [1, 2, 3, 7, 8];

if (numbers.includes(7)) {
    console.log('Si se encuentra el valor 7');
} else {
    console.log('No se encuentra.');
}

//ES7 exponent operator
let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result);