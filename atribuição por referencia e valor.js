/*
a atribuição de objetos é feita por referência,
apontam para o mesmo ponto na memória.
Logo, se mudar um, o outro também muda.
cada objeto recebe o mesmo endereço de acesso na memória.
*/

const a = {nome: 'George'}
const b = a
console.log(b)
b.nome = 'José'
console.log(a)

/*
Isso não acontece com valores primitivos, uma vez que
a atribuição é feita por valor.
cada variável recebe uma cópia do valor
*/

let g = 3
let h = g
g++
console.log(g)
console.log(h)
