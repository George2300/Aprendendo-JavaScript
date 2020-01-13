const escola = 'Cod3r' // começa no 0.
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))
console.log(escola.substring(1)) //do indíce 1 até o final.
console.log(escola.substring(0, 3)) // A partir do zero, 3 caracteres (não inclui o último)

console.log ('Escola '.concat (escola).concat('!'))
console.log(escola.replace(3, 'e'))

console.log ('Ana, Maria, Pedro'.split( ', ')) //criar um array