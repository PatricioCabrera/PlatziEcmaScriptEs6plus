const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web"
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

//ES12 private methods
class Message {
    #show(val) {
        console.log(val);
    };
    get #add(){
        
    }
}

const message = new Message();
message.show('Hola!');

//ES12 promise.any()
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1], promise2, promise3).then(response => console.log(response)); //ignora los reject y retorna el primero que genere un resolve.

//ES12 width ref - permite pasar una referencia débil sin que esta pase por el garbage collector
class anyClass {
    constructor(e){
        this.ref = new WeakRef(element)
    }
}

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);

let isTrue1 = undefined;
let isFalse1 = false;
console.log(isTrue1 ??= isFalse1);