function validaArray(arr, num){

    try{

        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo object");

        if(typeof arr !== 'number') throw new TypeError("O número precisa ser do tipo number");

        if(arr.length !== num) throw new RangeError("Tamanho do array inválido!");

        return arr;

    }catch(e){

        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!");
            throw e;
        }else if(e instanceof TypeError){
            console.log("Este erro é um TypeError!");
            throw e;
        }else if(e instanceof RangeError){
            console.log("Este erro é um RangeError!");
            throw e;
        }else{
            console.log("Erro inesperado: " + e);
        }
    }
}

console.log(validaArray());