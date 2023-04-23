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