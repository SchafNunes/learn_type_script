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

// 5- Extending Interfaces
interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human {
    superPowers: string[]
}

const matheus: Human = {
    name: "matheus",
    age: 15
}

console.log(matheus)

const jonas: SuperHuman = {
    name: "matheus",
    age: 15,
    superPowers: ["força", "Invisibilidade"]
}

console.log(jonas)
console.log(jonas.superPowers[1])

// 6- intersection types
interface Character {
    name: string
}
interface Gun {
    type: string,
    caliber: number
}

type humanWithGun = Character & Gun

const arnold: humanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)

// 7- readonly array
let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"]

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)

// 8- Tuplas
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1,2,3,4,5]

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Matheus", 20] 

// 9- Tuplas com readonly 
function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1,2])