function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTV32 = trabalho1 != trabalho2 //diferença simula o xor
    const manterSaudavel = !comprarSorvete // operador unário
    
    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(compras(false, false))
console.log(compras(true, false))
console.log(compras(true, true))