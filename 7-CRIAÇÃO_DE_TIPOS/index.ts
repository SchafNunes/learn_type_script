// 1- generics
function showData<T>(arg: T) : string {
    return `O dado é ${arg}`
}

console.log(showData("teste"))
console.log(showData(true))

// 2- Constraint em generic
function showProductName<T extends {name:string}>(obj: T) {
    return `O nome do produto é ${obj.name}`
}

console.log(showProductName({name: "porta", ativo: false}))
//console.log(showProductName({ativo: false}))

// 3- Generics com interface
interface MyObject<T, U> {
    name: string
    wheels: T
    engine: U
}

type Car = MyObject<number, number>
type Pen = MyObject<boolean, boolean>

const myCar:Car =  {name: "Agile", wheels: 4, engine: 1.0}
const myPen:Pen = {name: "Bic", wheels: false, engine: false}

console.log(myCar)
console.log(myPen)

// 4- Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${[key]} está presente no objeto e tem valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))