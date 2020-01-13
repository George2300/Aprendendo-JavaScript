//Armazenando uma função em uma variável
const ImprimirSoma = function (a, b) {
    console.log(a + b)
}

ImprimirSoma(50, 79)

// Armazenando uma função arrow em uma variável. Resumir a sintaxe.
 const soma = (a, b) => {
     return a + b
 }
console.log(soma(25, 70))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(50, 25))