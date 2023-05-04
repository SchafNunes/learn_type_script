//1 - void
function whithoutReturn():void {
    console.log("Esta função não tem retorno")
}

whithoutReturn()

//2 - Callback como argumento
function greeting(name: string) {
    return `Olá ${name}`
}

function preGreeting(f: (name:string) => string, name:string) {
    console.log("Preparando a função!")

    const greet = f(name)

    console.log(greet)
} 

preGreeting(greeting, "Matheus")
preGreeting(greeting, "João")

// 3 - generic function
function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1, 2, 3, 4]))
console.log(firstElement(["a", "b", "c"]))

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Matheus"}, {age: 30, job: "programmer"})

console.log(newObject)

// 4 - Constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if(+a > +b) {
        biggest = a
    } else {
        biggest = b
    }
    return biggest
}

console.log(biggestNumber("4521", "4521441"))

// 5 - especificar tipo de argumento
function mergeArray<T>(arr1:T[], arr2:T[]) {
    return arr1.concat(arr2)
}

console.log(mergeArray<number | string>([1,2,3], ["teste", "testando"]))

// 6 - parametros opcionais 
function modernGreeting(name: string, greet?: string) {
    if(greet) {
        return `olá ${greet} ${name} tudo bem?`
    }

    return `olá ${name} tudo bem?`
}

console.log(modernGreeting("João", "Sir"))
console.log(modernGreeting("João"))

// 7 - parametro default
function somaDefault(n: number, m = 10): number {
    return n + m
}
console.log(somaDefault(10))
console.log(somaDefault(10, 12))

// 8 - unknown
function doSomething(x: unknown) {
    if(Array.isArray(x)) {
        console.log(x[0])
    } else if(typeof x === "number") {
        console.log("X é um número")
    }
}

doSomething([1,2,3])
doSomething(5)

// 9 - never
function showErrorMessage(msg: string): never {
    throw new Error(msg)
}

//showErrorMessage("Algum erro!")

// 10 - Rest operator 
function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number)
}
console.log(sumAll(1,2,3,4,5))
console.log(sumAll(145,2212))

// 11 - destructuring como parametro
function showProductDetails({name, price}: {name:string, price: number}): string {
    return `Ó nome do produto é ${name} e ele custa R$${price}`
}
 const shirt = {name: "Camisa", price: 49.99}

 console.log(showProductDetails(shirt))
 