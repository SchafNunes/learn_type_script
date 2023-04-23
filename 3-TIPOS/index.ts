let numbers:number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

//numbers = "Teste"

const nomes: string[] = ["Joao", "Vitor"]

//nomes.push(65)

// 2 - outra sintaxe de array

const nums:Array<number> = [100, 200]

nums.push(5)

console.log(nums)

// nums.push("aaaa")

console.log(nums[2])

// 3- any

const arr1: any = [1, "Teste", true, [], {nome: "Matheus"}]

console.log(arr1)

arr1.push([1, 2, 3])

console.log(arr1)

// 4 - parametros tipados

function soma(a: number, b: number) {
    console.log(a + b)
}

soma(4, 8)

// 5 - Tipando retorno de função


function greeting(name: string): string {
    return `Olá ${name}`
}

console.log(greeting("Matheus")) 

//console.log(greeting(12)) 

// 6 - Função anonima
setTimeout(function() {

    const sallary: number = 1000

    // console.log(sallary)

}, 2000);

// 7 - tipos de objetos
function passCooedinates(coord: {x: number, y: number}) {
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 452}

passCooedinates(objCoord)

const nomeFunc:{nome: string, sobrenome: string } = {nome: "Matheus", sobrenome: "Nunes"}

// 8 - props opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    console.log("C: " + c)
}


showNumbers(2,4,5) 
showNumbers(2,4) 

// 9 - Validando argumento opcional
function advancedGreeting(firstName: string, lastName?: string) {
    if(lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }
    return `Olá, ${firstName}, tudo bem?`
}


console.log(advancedGreeting("João", "Nunes"))
console.log(advancedGreeting("João"))

//10 - union Type
function showBlance(balance: string | number) {
    console.log(`O saldo é ${balance}`)
}

showBlance('345')
showBlance(345)

// 11 - Avançando em union types
function showUserRole(role: boolean | string) {
    if(typeof(role) === "boolean") {
        return "Usuário Não Aprovado!"
    }
    return `A função do usuário é: ${role}` 
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// 12 - type alias
type ID = string | number

function showId(id: ID) {
    console.log(`o ID é: ${id}`)
}

showId(1)
showId("um")

// 13 - interface
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}` )
}

const coordObj:Point ={
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)