const funcs = []
for (let i = 0; i < 10; i++){
    funcs.push(function(){ //Adicionar um índice no array.
        console.log(i)
    })
}

funcs[2]()
funcs [8]()