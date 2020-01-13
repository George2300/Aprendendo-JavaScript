// array: agrupar multiplos valores. É uma lista?
const valores = [7.7, 8.8, 9.9, 10.2]
console.log(valores[3])

valores[4] = 50
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[7]
console.log(valores)

console.log(typeof valores)