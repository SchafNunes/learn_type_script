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
