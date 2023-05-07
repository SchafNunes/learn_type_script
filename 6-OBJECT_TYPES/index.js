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
