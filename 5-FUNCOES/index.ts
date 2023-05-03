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
