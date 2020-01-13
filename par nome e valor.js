// par nome/valor

const saudacao = 'Opa' //contexto léxico 1

function exec (){
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'George',
    Idade: 17,
    peso: 65, 
    endereço: {
        logradouro: 'Rua BlábláBlá',
        numero: 124
    }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)

