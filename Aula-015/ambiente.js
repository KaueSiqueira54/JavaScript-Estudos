
let num = [5,2,8,9,3]

console.log(`O vetor tem ${num.length} elementos.`)

console.log(`O vetor em ordem é: ${num.sort()}`)

console.log(`Os vetores tem os elementos: ${num}`)

//loop para mostrar os vetores na tela one by one
// for (let pos = 0; pos < num.length; pos++) {
//     console.log(`A posição ${pos} tem o valor: ${num[pos]}`)
// }

//Usando o for in - funciona como um simplificador
for(let pos in num) {
    console.log(num[pos])
}

let pos = num.indexOf(8)

console.log(pos)




