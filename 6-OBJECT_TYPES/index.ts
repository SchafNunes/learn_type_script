// 1- tipo de objeto para função com interface
interface Product {
    name: string
    price: number
    isAvaliable: boolean
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if (product.isAvaliable) {
        console.log("o produto está disponível")
    }
}

const shirt:Product = {
    name: "Camisa",
    price: 19.99,
    isAvaliable: true
}

showProductDetails(shirt)
showProductDetails({name:"Tênis", price: 129.99, isAvaliable: false})

// 2 - Propiedades opcional em interface
interface User {
    email: string,
    role?:string
}

function showUserRole(user: User) {
    console.log(`O usuario tem o e-mail ${user.email}`)

    if(user.role) {
        console.log(`A função do usuário é ${user.role}`)
    }
}

const u1:User = {email: "matheus@email.com", role: "admin"}
const u2:User = {email: "joao@email.com"}

showUserRole(u1)
showUserRole(u2)

// 3- readonly
interface Car {
    brand:string,
    readonly wheels: number
}

const fusca:Car = {
    brand: "WV",
    wheels: 4
}

console.log(fusca)

//fusca.wheels = 6

// 4- index Signature
interface CoordObject {
    [index : string] :number
}

let coords: CoordObject = {
    x: 10
}

coords.Y = 15

console.log(coords)