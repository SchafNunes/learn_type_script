"use strict";
// 1- generics
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData("teste"));
console.log(showData(true));
// 2- Constraint em generic
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
console.log(showProductName({ name: "porta", ativo: false }));
const myCar = { name: "Agile", wheels: 4, engine: 1.0 };
const myPen = { name: "Bic", wheels: false, engine: false };
console.log(myCar);
console.log(myPen);
// 4- Type parameters
function getSomeKey(obj, key) {
    return `A chave ${[key]} está presente no objeto e tem valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
