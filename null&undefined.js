let valor //não inicializada
console.log(valor) //undefined: declarada, mas não inicializada.

valor = null //Valor nulo, não aponta para mais lugar nenhum, para nenhum objeto.
console.log(valor) //Sempre usar null, caso quiser zerar a variável.
// console.log(valor.tostring()) //Erro

const prod = {}
console.log(prod.preco)

prod.preco = 3.50
console.log(prod)

prod.preco = undefined  //evite usar undefined.
console.log(!!prod.preco)
console.log(prod)

prod.preco = null //sem preço; diferenciar preço 0 de sem preço.
