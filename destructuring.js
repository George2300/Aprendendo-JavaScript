// tirar mais de um atributo de um objeto
const pessoa = {
    nome: 'Maria',
    idade: 5,
    endereco: {
        logradouro: 'Rua blablala',
        numero: 98
    }
}

const {nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)