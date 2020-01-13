function tratarErroeLancar(erro){
    throw new Error('...')

}
function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroeLancar(e)
    } finally { //independente do catch
        console.log('Final!!!')
    }
    
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)
