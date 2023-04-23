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
