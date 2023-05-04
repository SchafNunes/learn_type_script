"use strict";
//1 - void
function whithoutReturn() {
    console.log("Esta função não tem retorno");
}
whithoutReturn();
//2 - Callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, name) {
    console.log("Preparando a função!");
    const greet = f(name);
    console.log(greet);
}
preGreeting(greeting, "Matheus");
preGreeting(greeting, "João");
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4]));
console.log(firstElement(["a", "b", "c"]));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Matheus" }, { age: 30, job: "programmer" });
console.log(newObject);
// 4 - Constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber("4521", "4521441"));
// 5 - especificar tipo de argumento
function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArray([1, 2, 3], ["teste", "testando"]));
// 6 - parametros opcionais 
function modernGreeting(name, greet) {
    if (greet) {
        return `olá ${greet} ${name} tudo bem?`;
    }
    return `olá ${name} tudo bem?`;
}
console.log(modernGreeting("João", "Sir"));
console.log(modernGreeting("João"));
// 7 - parametro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 12));
// 8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
doSomething([1, 2, 3]);
doSomething(5);
// 9 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("Algum erro!")
