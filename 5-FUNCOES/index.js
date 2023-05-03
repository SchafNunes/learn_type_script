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
