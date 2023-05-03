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
