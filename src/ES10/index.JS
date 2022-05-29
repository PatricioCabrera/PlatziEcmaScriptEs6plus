//ES10 Array.prototype.flat()
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2)) //Muestra un nivel del array "lo aplana". Dándole argumento numérico nos muestra mayor o menor profundidad.

//ES10 Array.prototype.flatMap() permite mapear cada elemento, después pasarle una función y aplanar ese resultado.
let array1 = [1,2,3,4,5];

console.log(array.flatMap(value => [value * 2]));

//ES10 trimStart()
let hello  = '           hello world';
console.log(hello);
console.log(hello.trimStart());

let hello1 = 'hello world       '
console.log(hello1);
console.log(hello1.trimEnd());

//ES10 try/catch ahora es opcional el argumento error en catch(error) ya que se da por sentado.
try{

} catch {
    error
}

//ES10 Object.fromEntries devuelve un objeto con clave valor de un arreglo 
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

//ES10 Symbol.prototype.description permite regresar descripción opcional del Symbol
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);