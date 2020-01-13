var numero = 1
{
    let numero = 2 // variáveis let dão preferências para valores dentro do escopo. 
    console.log('dentro =', numero)
}
console.log('fora =', numero)