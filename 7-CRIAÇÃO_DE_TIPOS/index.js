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
//console.log(showProductName({ativo: false}))
