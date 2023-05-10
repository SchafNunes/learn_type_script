// 1- generics
function showData<T>(arg: T) : string {
    return `O dado é ${arg}`
}

console.log(showData("teste"))
console.log(showData(true))




