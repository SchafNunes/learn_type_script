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