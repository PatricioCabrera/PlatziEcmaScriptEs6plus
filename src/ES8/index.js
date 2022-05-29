//ES8 Object.entries retorna un array/matriz de llaves y valores de un objeto dado.
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//ES8 Object values
const values = Object.values(data);
console.log(values);
console.log(values.length);

//ES8 Pad - Sirve para que el string dado alcance el límite dado (en primer parámetro) con lo que indiquemos (segundo parámetro)
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' ---------'));
console.log('food'.padEnd(12, '  ---------'))

//ES8 Trailing commas - puede haber una coma sin que haya un siguiente elemento.
const obj = {
    name: 'Patrick',
}

//ES8 Async Await
const helloWorld = () => {
    return new Promise( (resolve, reject) => {
        (true)
        ? setTimeout( () => resolve('Hello World'), 3000 )
        : reject(new Error('Test Error'))
    } );
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    };
};

anotherFunction();