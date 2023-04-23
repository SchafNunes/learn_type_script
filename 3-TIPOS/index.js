"use strict";
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
//numbers = "Teste"
const nomes = ["Joao", "Vitor"];
//nomes.push(65)
// 2 - outra sintaxe de array
const nums = [100, 200];
nums.push(5);
console.log(nums);
// nums.push("aaaa")
console.log(nums[2]);
// 3- any
const arr1 = [1, "Teste", true, [], { nome: "Matheus" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 8);
// 5 - Tipando retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Matheus"));
//console.log(greeting(12)) 
// 6 - Função anonima
setTimeout(function () {
    const sallary = 1000;
    // console.log(sallary)
}, 2000);
// 7 - tipos de objetos
function passCooedinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 452 };
passCooedinates(objCoord);
const nomeFunc = { nome: "Matheus", sobrenome: "Nunes" };
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("C: " + c);
}
showNumbers(2, 4, 5);
showNumbers(2, 4);
// 9 - Validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("João", "Nunes"));
console.log(advancedGreeting("João"));
//10 - union Type
function showBlance(balance) {
    console.log(`O saldo é ${balance}`);
}
showBlance('345');
showBlance(345);
// 11 - Avançando em union types
function showUserRole(role) {
    if (typeof (role) === "boolean") {
        return "Usuário Não Aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`o ID é: ${id}`);
}
showId(1);
showId("um");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "Matheus", age: 43 };
console.log(somePerson);
