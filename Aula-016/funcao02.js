//Parametros opicionais

function soma(n1=0 , n2 =0) {
    return n1 + n2
}

console.log(soma())

//função dentro de uma váriavel
let v = function s(n) {
    return n**2
}

console.log(v(5))

//fatorial de um número
function fatorial(n) {
    let fat = 1
    for(let c = n;c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))



