//Before ES6
function newFunction(name, age, country){
    var name = name || 'patrick';
    var age = age || 23;
    var country = country || 'ARG';
    console.log(name, age, country);
}

//ES6
function newFunction2(name = 'patrick', age = 23, country = 'ARG'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Patricien', '22', 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
console.log(`${hello} ${world}`); // Template Literals

//ES6 multiline
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet mínima \n" + "Otra frase epica que necesitamos";

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

//ES6 struct
let person = {
    'name': 'patricio',
    'age': 23,
    'country': 'ARG' 
}

console.log(person.name, person.age);

let {name, age, country} = person;
console.log(name, age, country);

//ES6 spread operator

let team1 = ['pepito', 'pepita', 'pepitenso'];
let team2 = ['orca', 'orco', 'orke'];

let arrayWithSpread = ['another element', ...team1, ...array2];

console.log(arrayWithSpread);

//ES5 objects
obj = {name: name, age: age};

//ES6 objects
obj2 = {name, age}; //Como vemos no es necesario aclarar que name es name
console.log(obj2);

const names = [
    { name: 'Patricio', age: 23 },
    { name: 'Nicanor', age: 22}
]

//ES5 functions (anonymous)

let listOfNames = names.map(function (item) {
    console.log(item.name);
});

//ES6 arrow functions (anonymous)
let listOfNames2 = names.map( item => console.log(item.name) );

const listOfNames3 = (name, age, country) => {};
const listOfNames4 = name => {}
const square = num => num * num;

//ES6 Promises
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
.then(response => console.log(response))
.then( () => console.log('hola') )
.catch(error => console.log(error));

//ES6 Class
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

// ES6 import
import { hello } from './module';

hello();

// ES6 generators
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
