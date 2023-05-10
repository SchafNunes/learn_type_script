"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvaliable) {
        console.log("o produto está disponível");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvaliable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.99, isAvaliable: false });
function showUserRole(user) {
    console.log(`O usuario tem o e-mail ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }
}
const u1 = { email: "matheus@email.com", role: "admin" };
const u2 = { email: "joao@email.com" };
showUserRole(u1);
showUserRole(u2);
const fusca = {
    brand: "WV",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.Y = 15;
console.log(coords);
const matheus = {
    name: "matheus",
    age: 15
};
console.log(matheus);
const jonas = {
    name: "matheus",
    age: 15,
    superPowers: ["força", "Invisibilidade"]
};
console.log(jonas);
console.log(jonas.superPowers[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
// 7- readonly array
let myArray = ["Maça", "Laranja", "Banana"];
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
const anotherUser = ["Matheus", 20];
// 9- Tuplas com readonly 
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
