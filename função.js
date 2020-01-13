//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(70, 175)
imprimirSoma(2)
imprimirSoma(4, 5, 6, 10, 50)

//Função com retorno
function soma(a, b = 0) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(3))